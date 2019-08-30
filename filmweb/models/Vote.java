package info.talacha.filmweb.models;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

/**
 * Ocena
 * @author Paweł Talacha
 */
public class Vote implements Serializable {
    
    private static final long serialVersionUID = 4334478307623945060L;

    private Long itemId;
    private LocalDate date;
    private int rate;
    private boolean favourite;
    private ItemType type;
    private String comment;
    
    public Vote(List<String> data) {
        this.prepare(data);
    }

    /**
     * ID emisji telewizyjnej 
     */
    public Long getItemId() {
        return itemId;
    }

    /**
     * Data oddania głosu
     */
    public LocalDate getDate() {
        return date;
    }

    /**
     * Ocena 0-10
     */
    public int getRate() {
        return rate;
    }

    /**
     * Czy film / serial dodany do ulubionych
     */
    public boolean isFavourite() {
        return favourite;
    }

    /**
     * Komentarz oceny
     */
    public String getComment() {
        return comment;
    }
    
    /**
     * Typ - film / serial / gra
     */
    public ItemType getType() {
        return type;
    }

    private void prepare(List<String> data) {
        this.itemId = Long.parseLong(data.get(0));
        
        Timestamp stamp = new Timestamp(Long.parseLong(data.get(1)));
        this.date = stamp.toLocalDateTime().toLocalDate();

        this.rate = Integer.parseInt(data.get(2));
        this.favourite = Integer.parseInt(data.get(3)) == 1;
        if (data.get(4) != null) {
            this.comment = data.get(4);
        }
        this.type = ItemType.getType(Integer.parseInt(data.get(5)));
    }
}
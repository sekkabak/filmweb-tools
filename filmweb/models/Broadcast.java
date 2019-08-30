package info.talacha.filmweb.models;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * Premiera telewizyjna
 * @author Paweł Talacha
 */
public class Broadcast implements Serializable {

    private static final long serialVersionUID = 8699398168324597671L;

    private Long id;
    private Long itemId;
    private Long channelId;
    private LocalTime time;
    private LocalDate date;
    private String description;
    private ItemType type;
    
    public Broadcast(List<String> data) {
        this.prepare(data);
    }

    /**
     * ID premiery TV
     */
    public Long getId() {
        return id;
    }

    /**
     * ID filmu / serialu
     */
    public Long getItemId() {
        return itemId;
    }

    /**
     * ID kanału TV
     */
    public Long getChannelId() {
        return channelId;
    }

    /**
     * Godzina emisji
     */
    public LocalTime getTime() {
        return time;
    }

    /**
     * Data emisji
     */
    public LocalDate getDate() {
        return date;
    }

    /**
     * Opis - gatune / odcinek i sezon
     */
    public String getDescription() {
        return description;
    }

    /**
     * Typ - film / serial / gra
     */
    public ItemType getType() {
        return type;
    }
    
    private void prepare(List<String> data) {
        this.itemId = Long.parseLong(data.get(0));
        this.channelId = Long.parseLong(data.get(1));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("H:mm");
        this.time = LocalTime.parse(data.get(2), formatter);
        this.date = LocalDate.parse(data.get(3));
        this.id = Long.parseLong(data.get(4));
        this.description = data.get(5);
        this.type = data.get(6).equals("1") ? ItemType.FILM : ItemType.SERIES;
    }
}
package info.talacha.filmweb.models;

import lombok.Getter;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

/**
 * Lista do obejrzenia / zagrania
 *
 * @author Paweł Talacha
 */
@Getter
public class WatchlistItem implements Serializable {

    private static final long serialVersionUID = 2057545650501269129L;

    /**
     * ID na liście do obejrzenia
     */
    private Long itemId;
    private LocalDate date;
    private ItemType type;
    private int level;

    public WatchlistItem(List<String> data) {
        this.prepare(data);
    }

    private void prepare(List<String> data) {
        itemId = Long.parseLong(data.get(0));

        Timestamp stamp = new Timestamp(Long.parseLong(data.get(1)));
        date = stamp.toLocalDateTime().toLocalDate();

        level = Integer.parseInt(data.get(2));

        type = ItemType.getType(Integer.parseInt(data.get(3)));
    }
}
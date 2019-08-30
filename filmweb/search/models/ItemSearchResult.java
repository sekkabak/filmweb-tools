package info.talacha.filmweb.search.models;

import lombok.Getter;
import lombok.Setter;

/**
 * Dane wyszukiwarki dotyczące obiektów z bazy Filmweb - filmów / seriali / gier
 *
 * @author Paweł Talacha
 */
@Getter
@Setter
public class ItemSearchResult extends SearchResult {

    private static final long serialVersionUID = -929743988978856885L;

    private String title;
    private String polishTitle;
    private String alternativeTitle;
    private Integer year;

    public ItemSearchResult(String[] data) {
        super(data);
        this.prepare(data);
    }

    private void prepare(String[] data) {
        setTitle(data[3]);
        setPolishTitle(data[4]);
        setAlternativeTitle(data[5]);
        setYear(Integer.parseInt(data[6]));
    }
}
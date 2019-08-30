package info.talacha.filmweb.search.models;

import lombok.Getter;
import lombok.Setter;

/**
 * Dane wyszukiwarki dotyczące filmów / seriali
 *
 * @author Paweł Talacha
 */
@Getter
@Setter
public class FilmSearchResult extends ItemSearchResult {

    private static final long serialVersionUID = -1901762623597675003L;

    private String cast;

    public FilmSearchResult(String[] data) {
        super(data);
        this.prepare(data);
    }

    private void prepare(String[] data) {
        if (data.length >= 8) {
            setCast(data[7]);
        }
    }
}
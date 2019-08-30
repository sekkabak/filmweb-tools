package info.talacha.filmweb.search.models;

import info.talacha.filmweb.search.SearchResultType;
import info.talacha.filmweb.settings.Config;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Dane z wyszukiwarki
 *
 * @author Paweł Talacha
 */
@Getter
@Setter
public class SearchResult implements Serializable {

    private static final long serialVersionUID = 2678915797839142638L;

    private Long id;
    private SearchResultType type;
    private String imageURL;

    public SearchResult(String[] data) {
        prepare(data);
    }

    private void prepare(String[] data) {
        setId(Long.parseLong(data[1]));
        if (!data[2].isEmpty()) {
            this.setImageURL(Config.IMG_POSTER_URL + data[2]);
        }
    }
}
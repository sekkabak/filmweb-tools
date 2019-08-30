package info.talacha.filmweb.search.models;

import info.talacha.filmweb.settings.Config;
import lombok.Getter;
import lombok.Setter;

/**
 * Dane wyszukiwarki dotyczące osób
 *
 * @author Paweł Talacha
 */
@Getter
@Setter
public class PersonSearchResult extends SearchResult {

    private static final long serialVersionUID = 5566470455683761546L;

    private String name;    //imię i nazwisko
    private SearchProfession profession;
    private String title;    //tytuł + roku produkcji, z której jest znany

    public PersonSearchResult(String[] data) {
        super(data);
        this.prepare(data);
    }

    private void prepare(String[] data) {
        if (!data[2].isEmpty()) {
            setImageURL(Config.IMG_PERSON_URL + data[2]);
        }
        setName(data[3]);
        if (!data[5].isEmpty() && !data[5].equals("0")) {
            setProfession(SearchProfession.valueByCode(Integer.parseInt(data[5])));
        }
        if (data.length >= 7 && !data[6].isEmpty()) {
            setTitle(data[6]);
        }
    }
}
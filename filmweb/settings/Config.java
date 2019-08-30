package info.talacha.filmweb.settings;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/**
 * Konfiguracja
 *
 * @author Paweł Talacha
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Config {

    /**
     * Adres, z którym wykonywane jest połączenie
     */
    public static final String API_SERVER = "https://ssl.filmweb.pl/api?";
    public static final String KEY = "qjcGhW2JnvGT9dfCt3uT_jozR3s";
    public static final String WWW = "http://www.filmweb.pl";

    /**
     * Adres początkowy dla zdjęć osób
     */
    public static final String IMG_PERSON_URL = "http://1.fwcdn.pl/p";

    /**
     * Adres początkowy dla plakatów filmu / gier / seriali
     */
    public static final String IMG_POSTER_URL = "http://1.fwcdn.pl/po";

    /**
     * Adres początkowy dla awatarów użytkowników
     */
    public static final String IMG_USER_URL = "http://1.fwcdn.pl/u";

    public static final String IMG_TV_CHANNEL_LOGO_URL = "http://1.fwcdn.pl/channels/";

    public static final String FORUM_URL_SUFFIX = "/discussion";
    public static final String LIVE_SEARCH_URL = "http://www.filmweb.pl/search/live?q=";
    public static final String LIVE_SEARCH_FIELD_SPACER = "\\\\c";
    public static final String LIVE_SEARCH_ROW_SPACER = "\\\\a";

}
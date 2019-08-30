package info.talacha.filmweb.search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.connection.Connection;
import info.talacha.filmweb.connection.HttpMethod;
import info.talacha.filmweb.search.models.FilmSearchResult;
import info.talacha.filmweb.search.models.ItemSearchResult;
import info.talacha.filmweb.search.models.PersonSearchResult;
import info.talacha.filmweb.search.models.SearchResult;
import info.talacha.filmweb.settings.Config;

/**
 * Wyszukiwarka danych
 *
 * @author Paweł Talacha
 */
@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class LiveSearch {

    private static final List<SearchResultType> NOT_SUPPORTED_TYPES = Arrays.asList(
        SearchResultType.CINEMA,
        SearchResultType.TV_CHANNEL
    );

    private static String getResult(String param) {
        log.debug("Wyszukiwanie: " + param);
        StringBuilder html = new StringBuilder();
        try (
            Connection conn = new Connection(Config.LIVE_SEARCH_URL + URLEncoder.encode(param, "UTF-8"), HttpMethod.GET);
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF8"))) {

            String str;
            while ((str = br.readLine()) != null) {
                html.append(str);
            }
            br.close();
        } catch (MalformedURLException e) {
            log.error("Nieprawidłowy adres URL", e);
        } catch (Exception e) {
            log.error("Błąd pobierania danych", e);
        }
        log.debug("Resp: " + html.toString());
        return html.toString();
    }

    private static List<SearchResult> prepareResultList(String result) {
        List<SearchResult> resultList = new ArrayList<>();
        String[] elementList = result.split(Config.LIVE_SEARCH_ROW_SPACER);
        for (String element : elementList) {
            SearchResult searchResult = prepareResult(element);
            if (searchResult != null) {
                resultList.add(searchResult);
            }
        }
        return resultList;
    }

    private static SearchResult prepareResult(String element) {
        log.debug("Analizowany element: " + element);
        String[] elementData = element.split(Config.LIVE_SEARCH_FIELD_SPACER);

        SearchResult result;
        SearchResultType searchResultType = SearchResultType.valueByDiscriminant(elementData[0]);
        if (searchResultType.equals(SearchResultType.FILM) || searchResultType.equals(SearchResultType.SERIES)) {
            result = new FilmSearchResult(elementData);
        } else if (searchResultType.equals(SearchResultType.PERSION)) {
            result = new PersonSearchResult(elementData);
        } else if (NOT_SUPPORTED_TYPES.contains(searchResultType)) {
            return null;
        } else {
            result = new ItemSearchResult(elementData);
        }
        result.setType(searchResultType);
        return result;
    }

    /**
     * Metoda wyszukuje dane w bazie serwisu Filmweb
     *
     * @param query Zapytanie
     * @return Skrócone informacje o pasujących obiektach
     */
    public static List<SearchResult> search(String query) {
        query = query.replaceAll("\\s", "+");
        String res = getResult(query);
        if (res.isEmpty()) {
            return Collections.emptyList();
        }
        return prepareResultList(res);
    }

    /**
     * Metoda wyszukuje dane w bazie serwisu Filmweb
     *
     * @param query Zapytanie
     * @param type  Typ oczekiwanego wyniku: film, serial, osoba, gra
     * @return Skrócone informacje o pasujących obiektach
     */
    public static List<SearchResult> search(String query, SearchResultType type) {
        List<SearchResult> resList = search(query);
        List<SearchResult> resultList = new ArrayList<>();
        for (SearchResult result : resList) {
            if (result.getType().equals(type)) {
                resultList.add(result);
            }
        }
        return resultList;
    }
}

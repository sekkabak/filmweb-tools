package info.talacha.filmweb.api;

import java.net.CookieHandler;
import java.net.CookieManager;
import java.net.HttpCookie;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.api.cache.Cache;
import info.talacha.filmweb.api.methodHandlers.GetBroadcastsMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetDescriptionsMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetItemDataMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetPersonsMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetTVChannelsMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetUserTVChannelsMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetUserVotesMthHandler;
import info.talacha.filmweb.api.methodHandlers.GetUserWatchlistMthHandler;
import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;
import info.talacha.filmweb.models.Broadcast;
import info.talacha.filmweb.models.Film;
import info.talacha.filmweb.models.Game;
import info.talacha.filmweb.models.Person;
import info.talacha.filmweb.models.Profession;
import info.talacha.filmweb.models.Program;
import info.talacha.filmweb.models.Series;
import info.talacha.filmweb.models.TVChannel;
import info.talacha.filmweb.models.User;
import info.talacha.filmweb.models.Vote;
import info.talacha.filmweb.models.WatchlistItem;
import info.talacha.filmweb.search.LiveSearch;
import info.talacha.filmweb.search.SearchResultType;
import info.talacha.filmweb.search.models.FilmSearchResult;
import info.talacha.filmweb.search.models.ItemSearchResult;
import info.talacha.filmweb.search.models.PersonSearchResult;
import info.talacha.filmweb.search.models.SearchResult;

/**
 * Zbiór metod możliwych do wywołania zdalnie
 * @author Paweł Talacha
 */
public class FilmwebApi {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(FilmwebApi.class);
	private Cache cache = new Cache();
	
	
    /**
     * Lista filmów (+ podstawowe informacje) o danym tytule
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł filmu
     * @return Lista filmów wraz z podstawowymi informacjami
     */
    public List<FilmSearchResult> findFilm(String title) {
        List<SearchResult> resultList = LiveSearch.search(title, SearchResultType.FILM);
        return resultList.stream().map(res -> (FilmSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista filmów (+ podstawowe informacje) o danym tytule i roku produkcji
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł filmu
     * @param year Rok produkcji
     * @return Lista filmów wraz z podstawowymi informacjami
     */
    public List<FilmSearchResult> findFilm(String title, int year) {
        List<SearchResult> resultList = LiveSearch.search(title + "+" + year, SearchResultType.FILM);
        return resultList.stream().map(res -> (FilmSearchResult)res).collect(Collectors.toList());
    }
    
    /**
     * Lista seriali (+ podstawowe informacje) o danym tytule
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł serialu
     * @return Lista seriali wraz z podstawowymi informacjami
     */
    public List<FilmSearchResult> findSeries(String title) {
        List<SearchResult> resultList = LiveSearch.search(title, SearchResultType.SERIES);
        return resultList.stream().map(res -> (FilmSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista seriali (+ podstawowe informacje) o danym tytule i roku produkcji
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł serialu
     * @param year Rok produkcji
     * @return Lista seriali wraz z podstawowymi informacjami
     */
    public List<FilmSearchResult> findSeries(String title, int year) {
        List<SearchResult> resultList = LiveSearch.search(title + "+" + year, SearchResultType.SERIES);
        return resultList.stream().map(res -> (FilmSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista gier (+ podstawowe informacje) o danym tytule
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł gry
     * @return Lista gier wraz z podstawowymi informacjami
     */
    public List<ItemSearchResult> findGame(String title) {
        List<SearchResult> resultList = LiveSearch.search(title, SearchResultType.GAME);
        return resultList.stream().map(res -> (ItemSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista gier (+ podstawowe informacje) o danym tytule i roku produkcji
     * Pozycje posortowane wg trafności (popularność)
     * @param title Tytuł gry
     * @param year Rok produkcji
     * @return Lista gier wraz z podstawowymi informacjami
     */
    public List<ItemSearchResult> findGame(String title, int year) {
        List<SearchResult> resultList = LiveSearch.search(title + "+" + year, SearchResultType.GAME);
        return resultList.stream().map(res -> (ItemSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista osób (+ podstawowe informacje) o danym imieniu lub/i nazwisku
     * Pozycje posortowane wg trafności (popularność)
     * @param name Imię lub/i nazwisko
     * @return Lista osób wraz z podstawowymi informacjami
     */
    public List<PersonSearchResult> findPerson(String name) {
        List<SearchResult> resultList = LiveSearch.search(name, SearchResultType.PERSION);
        return resultList.stream().map(res -> (PersonSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista programów TV (+ podstawowe informacje) o danym tytule
     * Pozycje posortowane wg trafności (popularność)
     * @param name Tytuł programu
     * @return Lista programów TV z podstawowymi informacjami
     */
    public List<ItemSearchResult> findProgram(String title) {
        List<SearchResult> resultList = LiveSearch.search(title, SearchResultType.PROGRAM);
        return resultList.stream().map(res -> (ItemSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista programów TV (+ podstawowe informacje) o danym tytule i roku produkcji
     * Pozycje posortowane wg trafności (popularność)
     * @param name Tytuł programu
     * @param year Rok produkcji
     * @return Lista programów TV z podstawowymi informacjami
     */
    public List<ItemSearchResult> findProgram(String title, int year) {
        List<SearchResult> resultList = LiveSearch.search(title + "+" + year, SearchResultType.PROGRAM);
        return resultList.stream().map(res -> (ItemSearchResult)res).collect(Collectors.toList());
    }

    /**
     * Lista osób danej profesji związanej z danym filmem / serialem / grą
     * @param itemId ID filmu / serialu / gry
     * @param profession Profesja
     * @param page Strona wyników (numerowane od 0)
     * @param limit Liczba elementów na stronie
     * @return Lista osób
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<Person> getPersons(Long itemId, Profession profession, int page, int limit) throws FilmwebException {
        if (!dataValidation(itemId, page, limit)) {
            return Collections.emptyList();
        }
        try {
            GetPersonsMthHandler handler = (GetPersonsMthHandler)cache.getMthHandler(GetPersonsMthHandler.class.getName());
            return handler.getEntry(itemId, profession, page, limit);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();
    }

    /**
     * Opisy pozycji (filmu, serialu lub gry)
     * @param itemId ID pozycji
     * @return Lista opisów
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<String> getDescriptions(Long itemId) throws FilmwebException {
        if (itemId <= 0) {
        	LOGGER.error("Nieprawidłowe ID pozycji: " + itemId);
        	return null;
        }
        
        try {
            GetDescriptionsMthHandler handler = (GetDescriptionsMthHandler)cache.getMthHandler(GetDescriptionsMthHandler.class.getName());
            return handler.getEntry(itemId);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return null;
    }
    
    /**
     * Pobieranie informacji nt filmu
     * @param filmId ID filmu
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     * @return Informacja nt filmu
     */
    public Film getFilmData(Long filmId) throws FilmwebException {
    	return new Film(getItemData(filmId));
    }
    
    /**
     * Pobieranie informacji nt serialu
     * @param seriesId ID serialu
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     * @return Informacja nt serialu
     */
    public Series getSeriesData(Long seriesId) throws FilmwebException {
    	return new Series(getItemData(seriesId));
    }

    /**
     * Pobieranie informacji nt gry
     * @param gameId ID gry
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     * @return Informacja nt gry
     */
    public Game getGameData(Long gameId) throws FilmwebException {
    	return new Game(getItemData(gameId));
    }

    /**
     * Pobieranie informacji nt programu
     * @param programId ID programu
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     * @return Informacja nt programu
     */
    public Program getProgramData(Long programId) throws FilmwebException {
        return new Program(getItemData(programId));
    }

    /**
     * Logowanie
     * @param login Login
     * @param password Hasło
     * @return Dane użytkownika
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public User login(String login, String password) throws FilmwebException {

        CookieManager manager = new CookieManager();
        CookieHandler.setDefault(manager);
        
        List<String> data = ApiCaller.fire("login ["+login+", "+password+", 1]", HttpMethod.POST);
        List <HttpCookie> cookies = manager.getCookieStore().getCookies();
        for (HttpCookie cookie : cookies) {
            if (cookie.getName().contains("sessionId")) {
                return new User(data);
            }
        }
        throw new NullPointerException();
    }

    /**
     * Pobieranie głosów użytkownika
     * @param userId ID zalogowanego użytkownika
     * @param page Strona wyników (numerowane od 0)
     * @param limit Liczba elementów na stronie
     * @return Lista głosów użytkownika
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<Vote> getUserVotes(Long userId, int page, int limit) throws FilmwebException {
        if (!dataValidation(userId, page, limit)) {
            return Collections.emptyList();
        }
        try {
            GetUserVotesMthHandler handler = (GetUserVotesMthHandler)cache.getMthHandler(GetUserVotesMthHandler.class.getName());
            
            /**
             * FW zawsze zwraca całą listę niezależnie od parametrów stronicowania,
             * nie ma sensu cacheować per strona
             * wywalć poniższe jak testIsGetVotesPaginatorNotFixed przestanie działać
             */
            page = 0; limit = 100;
            
            return handler.getEntry(userId, page, limit);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();
    }
    
    /**
     * Pobieranie pozycji z listy do obejrzenia / zagrania
     * @param userId ID zalogowanego użytkownika
     * @param page Strona wyników (numerowane od 0)
     * @param limit Liczba elementów na stronie
     * @return Lista "do obejrzenia"
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<WatchlistItem> getUserWatchlist(Long userId, int page, int limit) throws FilmwebException {
        if (!dataValidation(userId, page, limit)) {
            return Collections.emptyList();
        }
        try {
            GetUserWatchlistMthHandler handler = (GetUserWatchlistMthHandler)cache.getMthHandler(GetUserWatchlistMthHandler.class.getName());
            
            /**
             * FW zawsze zwraca całą listę niezależnie od parametrów stronicowania,
             * nie ma sensu cacheować per strona
             * wywalć poniższe jak testIsGetUserWatchlistPaginatorNotFixed przestanie działać
             */
            page = 0; limit = 100;
            
            return handler.getEntry(userId, page, limit);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();
    }

    /**
     * Lista emisji w TV filmu / serialu
     * @param itemId ID filmu / serialu
     * @param page Strona wyników (numerowane od 0)
     * @param limit Liczba elementów na stronie
     * @return Lista najbliższych emisji w TV filmu / serialu
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<Broadcast> getBroadcasts(Long itemId, int page, int limit) throws FilmwebException {
        try {
            GetBroadcastsMthHandler handler = (GetBroadcastsMthHandler)cache.getMthHandler(GetBroadcastsMthHandler.class.getName());
            return handler.getEntry(itemId, page, limit);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();
    }

    /**
     * Pobieranie kanałów TV użytkownika
     * @param userId ID zalogowanego użytkownika
     * @return Zbiór ID kanałów TV
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public Set<Long> getUserTvChannels(Long userId) throws FilmwebException {
        try {
            GetUserTVChannelsMthHandler handler = (GetUserTVChannelsMthHandler)cache.getMthHandler(GetUserTVChannelsMthHandler.class.getName());
            return handler.getEntry(userId);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptySet();
    }
    
    /**
     * Pobieranie listy wszystkich kanałów TV
     * @return Lista kanałów TV
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public List<TVChannel> getTvChannels() throws FilmwebException {
        try {
            GetTVChannelsMthHandler handler = (GetTVChannelsMthHandler)cache.getMthHandler(GetTVChannelsMthHandler.class.getName());
            return handler.getEntry();
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();
    }

    private List<String> getItemData(Long itemId) throws FilmwebException {
        if (itemId <= 0) {
            LOGGER.error("Nieprawidłowe ID: " + itemId);
            return Collections.emptyList();
        }
        try {
            GetItemDataMthHandler handler = (GetItemDataMthHandler)cache.getMthHandler(GetItemDataMthHandler.class.getName());
            return handler.getEntry(itemId);
        }
        catch (Exception e) {
            LOGGER.error(e.getMessage());
        }
        return Collections.emptyList();

        /* 7 - liczba komentarzy,
         * 8 - adres forum
         * 9 - czy ma zarys fabuły
         * 10 - czy ma opis fabuły
         * 12 - video, 13 - premiera światowa, 14 - premiera polska
         */
    }

    private boolean dataValidation(Long userId, int page, int limit) {
        if (userId <= 0) {
            LOGGER.error("Nieprawidłowe ID: " + userId);
            return false;
        }
        if (page < 0) {
            LOGGER.error("Nieprawidłowy nr strony: " + page);
            return false;
        }
        if (limit < 0) {
            LOGGER.error("Nieprawidłowy limit: " + limit);
            return false;
        }
        return true;
    }
}
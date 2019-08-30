package info.talacha.filmweb.api.methodHandlers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;
import info.talacha.filmweb.models.WatchlistItem;

/**
 * Wczytywanie pozycji do obejrzenia użytkownika + cache
 * @author Paweł Talacha
 */
public class GetUserWatchlistMthHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GetUserVotesMthHandler.class);
    
    private static final Long TIME_PERIOD = 30L;
    private static final TimeUnit TIME_UNIT = TimeUnit.MINUTES;
    
    private final LoadingCache<String, List<WatchlistItem>> cache;
    
    public GetUserWatchlistMthHandler() {
        cache = CacheBuilder.newBuilder()
                .expireAfterAccess(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<String, List<WatchlistItem>>() {

            @Override
            public List<WatchlistItem> load(String key) throws FilmwebException {
                List<WatchlistItem> list = new ArrayList<>();
                
                List<Object> respData = ApiCaller
                    .fire("getUserFilmsWantToSee [" + key + "]", HttpMethod.GET);

                boolean first = true;
                for (Object data : respData) {
                    
                    //Info o czasie odpytania serwera o głosy
                    if (first) {
                        first = false;
                        continue;
                    }

                    @SuppressWarnings("unchecked")
                    WatchlistItem watchlistItem = new WatchlistItem((List<String>) data);
                    list.add(watchlistItem);
                }
                return list;
            }
        });
    }
    
    public List<WatchlistItem> getEntry(Long userId, int page, int limit) {
        try {
            return cache.getUnchecked(keyFromParams(userId, page, limit));
        }
        catch (NullPointerException | ClassCastException e) {
            String error = "Brak danych o pozycjach do obejrzenia użytkownika o ID " + userId;
            LOGGER.debug(error);
        }
        return Collections.emptyList();
    }
    
    private String keyFromParams(Long itemId, int page, int limit) {
        return itemId + "," + page + "," + limit;
    }
}
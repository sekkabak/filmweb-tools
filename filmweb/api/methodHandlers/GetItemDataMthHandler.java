package info.talacha.filmweb.api.methodHandlers;

import java.util.List;
import java.util.concurrent.TimeUnit;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;

/**
 * Wczytywanie danych pozycji (filmu, serialu lub gry) + cache
 * @author Paweł Talacha
 */
public class GetItemDataMthHandler {

    private static final Long TIME_PERIOD = 1L;
    private static final TimeUnit TIME_UNIT = TimeUnit.DAYS;
    private static final long MAX_SIZE = 5000;
    
    private final LoadingCache<Long, List<String>> cache;
    
    public GetItemDataMthHandler() {
        cache = CacheBuilder.newBuilder()
                .maximumSize(MAX_SIZE)
                .expireAfterWrite(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<Long, List<String>>() {

            @Override
            public List<String> load(Long itemId) throws FilmwebException {
                return ApiCaller.fire("getFilmInfoFull ["+itemId+"]", HttpMethod.GET);
            }
        });
    }
    
    public List<String> getEntry(Long itemId) {
        return cache.getUnchecked(itemId);
    }

}

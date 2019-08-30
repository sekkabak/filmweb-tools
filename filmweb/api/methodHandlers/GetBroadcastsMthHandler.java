package info.talacha.filmweb.api.methodHandlers;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;
import info.talacha.filmweb.models.Broadcast;

/**
 * Wczytywanie danych emisji filmu / serialu w TV + cache
 * @author Paweł Talacha
 */
public class GetBroadcastsMthHandler {

    private static final Long TIME_PERIOD = 1L;
    private static final TimeUnit TIME_UNIT = TimeUnit.DAYS;
    private static final long MAX_SIZE = 3000;
    
    private final LoadingCache<String, List<Broadcast>> cache;
    
    public GetBroadcastsMthHandler() {
        cache = CacheBuilder.newBuilder()
                .maximumSize(MAX_SIZE)
                .expireAfterWrite(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<String, List<Broadcast>>() {

            @Override
            public List<Broadcast> load(String key) throws FilmwebException {
                
                List<Object> respData = ApiCaller
                        .fire("getFilmsNearestBroadcasts [[" + key + "]]", HttpMethod.GET);
                
                List<Broadcast> list = new ArrayList<>();
                for (Object data : respData) {
                    
                    @SuppressWarnings("unchecked")
                    Broadcast broadcast = new Broadcast((List<String>)data);
                    list.add(broadcast);
                }
                return list;
            }
        });
    }
    
    public List<Broadcast> getEntry(Long itemId, int page, int limit) {
        return cache.getUnchecked(keyFromParams(itemId, page, limit));
    }
    
    private String keyFromParams(Long itemId, int page, int limit) {
        return itemId + "," + page + "," + limit;
    }
}
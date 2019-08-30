package info.talacha.filmweb.api.methodHandlers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;

/**
 * Wczytywanie listy kanałów TV dla użytkownika + cache
 * @author Paweł Talacha
 */
public class GetUserTVChannelsMthHandler {

    private static final Long TIME_PERIOD = 10L;
    private static final TimeUnit TIME_UNIT = TimeUnit.MINUTES;
    
    private final LoadingCache<Long, Set<Long>> cache;
    
    public GetUserTVChannelsMthHandler() {
        cache = CacheBuilder.newBuilder()
                .expireAfterAccess(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<Long, Set<Long>>() {

            @Override
            public Set<Long> load(Long userId) throws FilmwebException {
                List<Object> resp = ApiCaller
                        .fire("getUserFavouriteChannels [" + userId + "]", HttpMethod.GET);
                
                Set<Long> set = new HashSet<>();
                resp.forEach(res -> set.add(Long.parseLong(res.toString())));
                return set;
            }
        });
    }
    
    public Set<Long> getEntry(Long userId) {
        return cache.getUnchecked(userId);
    }
}
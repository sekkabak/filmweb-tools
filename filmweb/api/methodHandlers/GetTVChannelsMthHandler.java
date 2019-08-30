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
import info.talacha.filmweb.models.TVChannel;

/**
 * Wczytywanie listy wszystkich kanałów TV + cache
 * @author Paweł Talacha
 */
public class GetTVChannelsMthHandler {

    private static final Long TIME_PERIOD = 1L;
    private static final TimeUnit TIME_UNIT = TimeUnit.DAYS;
    
    private final LoadingCache<Integer, List<TVChannel>> cache;
    
    public GetTVChannelsMthHandler() {
        cache = CacheBuilder.newBuilder()
                .expireAfterAccess(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<Integer, List<TVChannel>>() {

            @Override
            public List<TVChannel> load(Integer key) throws FilmwebException {
                List<Object> resp = ApiCaller.fire("getAllChannels [\"\"]", HttpMethod.GET);
                List<TVChannel> list = new ArrayList<>();

                boolean first = true;
                for (Object data : resp) {
                    
                    //Info o czasie odpytania serwera
                    if (first) {
                        first = false;
                        continue;
                    }
                    
                    @SuppressWarnings("unchecked")
                    TVChannel tvChannel = new TVChannel((List<String>)data);
                    list.add(tvChannel);
                }
                return list;
            }
        });
    }
    
    public List<TVChannel> getEntry() {
        return cache.getUnchecked(1);
    }
}

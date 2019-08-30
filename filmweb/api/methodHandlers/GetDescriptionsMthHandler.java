package info.talacha.filmweb.api.methodHandlers;

import java.util.Collections;
import java.util.List;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import info.talacha.filmweb.connection.ApiCaller;
import info.talacha.filmweb.connection.FilmwebException;
import info.talacha.filmweb.connection.HttpMethod;

/**
 * Wczytywanie opisów pozycji (filmu, serialu lub gry) + cache
 * @author Paweł Talacha
 */
public class GetDescriptionsMthHandler {
    
    private static final long MAX_SIZE = 1000;
    
    private final LoadingCache<Long, List<String>> cache;
    
    public GetDescriptionsMthHandler() {
        cache = CacheBuilder.newBuilder()
                .maximumSize(MAX_SIZE)
                .build(new CacheLoader<Long, List<String>>() {

            @Override
            public List<String> load(Long key) throws FilmwebException {
                List<String> descList = null;
                try {
                    descList = ApiCaller.fire("getFilmDescription ["+key+"]", HttpMethod.GET);
                }
                catch (NullPointerException e) {
                    descList = Collections.emptyList();
                }
                return descList;
            }
        });
    }
    
    public List<String> getEntry(Long key) {
        return cache.getUnchecked(key);
    }
}
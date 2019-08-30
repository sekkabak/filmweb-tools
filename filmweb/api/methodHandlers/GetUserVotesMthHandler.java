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
import info.talacha.filmweb.models.Vote;

/**
 * Wczytywanie ocen użytkownika + cache
 * @author Paweł Talacha
 */
public class GetUserVotesMthHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GetUserVotesMthHandler.class);
    
    private static final Long TIME_PERIOD = 30L;
    private static final TimeUnit TIME_UNIT = TimeUnit.MINUTES;
    
    private final LoadingCache<String, List<Vote>> cache;
    
    public GetUserVotesMthHandler() {
        cache = CacheBuilder.newBuilder()
                .expireAfterAccess(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<String, List<Vote>>() {

            @Override
            public List<Vote> load(String key) throws FilmwebException {
                List<Vote> list = new ArrayList<>();
                List<Object> respData = ApiCaller
                    .fire("getUserFilmVotes [" + key + "]", HttpMethod.GET);

                boolean first = true;
                for (Object voteData : respData) {
                    
                    //Info o czasie odpytania serwera o głosy
                    if (first) {
                        first = false;
                        continue;
                    }

                    @SuppressWarnings("unchecked")
                    Vote vote = new Vote((List<String>) voteData);
                    list.add(vote);
                }
                return list;
            }
        });
    }
    
    public List<Vote> getEntry(Long userId, int page, int limit) {
        try {
            return cache.getUnchecked(keyFromParams(userId, page, limit));
        }
        catch (NullPointerException | ClassCastException e) {
            String error = "Brak danych o głosach dla użytkownika o ID " + userId;
            LOGGER.debug(error);
        }
        return Collections.emptyList();
    }
    
    private String keyFromParams(Long itemId, int page, int limit) {
        return itemId + "," + page + "," + limit;
    }
}

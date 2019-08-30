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
import info.talacha.filmweb.models.Person;
import info.talacha.filmweb.models.Profession;

/**
 * Wczytywanie danych ludzi związanych z filmem / grą / serialem + cache
 * @author Paweł Talacha
 */
public class GetPersonsMthHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GetPersonsMthHandler.class);
    
    private static final Long TIME_PERIOD = 1L;
    private static final TimeUnit TIME_UNIT = TimeUnit.DAYS;
    private static final long MAX_SIZE = 3000;
    
    private final LoadingCache<String, List<Person>> cache;
    
    public GetPersonsMthHandler() {
        cache = CacheBuilder.newBuilder()
                .maximumSize(MAX_SIZE)
                .expireAfterWrite(TIME_PERIOD, TIME_UNIT)
                .build(new CacheLoader<String, List<Person>>() {

            @Override
            public List<Person> load(String key) throws FilmwebException, NullPointerException, ClassCastException {
                List<Person> personList = new ArrayList<>();
                List<List<String>> data = ApiCaller
                    .fire("getFilmPersons [" + key + "]", HttpMethod.GET);

                for (List<String> personData : data) {
                    Person person = new Person(personData);
                    personList.add(person);
                }
                return personList;
            }
        });
    }
    
    public List<Person> getEntry(Long itemId, Profession profession, int page, int limit) {
        try {
            return cache.getUnchecked(keyFromParams(itemId, profession, page, limit));
        }
        catch (NullPointerException | ClassCastException e) {
            String error = "Brak ludzi o profesji "+profession+" związanych z filmem / serialem / grą o ID " + itemId;
            LOGGER.debug(error);
        }
        return Collections.emptyList();
    }
    
    private String keyFromParams(Long itemId, Profession profession, int page, int limit) {
        return itemId + "," + profession.getCode() + "," + page + "," + limit;
    }
}

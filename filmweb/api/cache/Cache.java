package info.talacha.filmweb.api.cache;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.HashSet;
import java.util.Set;

/**
 * Klasa gromadząca mechanizmy cacheowania charakterystyczne dla metod API
 * Pozwala uniknąć wielokrotnego inicjowania klas cacheujących 
 * @author Paweł Talacha
 */
public class Cache {

    private Set<Object> cacheSet = new HashSet<>();

    public Object getMthHandler(String className) throws ClassNotFoundException, NoSuchMethodException,
                                                    SecurityException, InstantiationException, IllegalAccessException,
                                                    IllegalArgumentException, InvocationTargetException {

        Class<?> mthHandlerClass = Class.forName(className);
        for (Object obj : cacheSet) {
            if (mthHandlerClass.isInstance(obj)) {
                return obj;
            }
        }

        Constructor<?> ctor = mthHandlerClass.getConstructor();
        Object object = ctor.newInstance();
        
        cacheSet.add(object);
        return object;
    }
}
package info.talacha.filmweb.connection;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonStreamParser;

import info.talacha.filmweb.settings.Config;

/**
 * Wywoływanie metod zdalnych API FW
 * @author Paweł Talacha
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ApiCaller {
    
	private static final Logger LOGGER = LoggerFactory.getLogger(ApiCaller.class);
	
	private static final String VERSION = "1.0";
	private static final String APPID = "android";
	
    /**
     * Przygotowanie sygnatury
     * @param method Dane metody zdalnej postaci: nazwa_metody [parametry]
     * @return Sygnatura
     */
    private static String prepareSignature(String method) {
        String signature = method + "\\n" + ApiCaller.APPID + Config.KEY;
        signature = ApiCaller.VERSION + "," + DigestUtils.md5Hex(signature);
        return signature;
    }
    
    /**
     * Przygotowanie parametrów dla zapytania
     * @param method Dane metody zdalnej postaci: nazwa_metody [parametry]
     * @return Parametry dla URL
     */
    private static String prepareParams(String method) {
    	
    	String signature = ApiCaller.prepareSignature(method);
    	method += "\\n";
    	
        String qs;
        try {
            qs = "methods=" + URLEncoder.encode(method, "UTF-8");
            qs += "&signature=" + URLEncoder.encode(signature, "UTF-8");
            qs += "&version=" + URLEncoder.encode(ApiCaller.VERSION, "UTF-8");
            qs += "&appId=" + URLEncoder.encode(ApiCaller.APPID, "UTF-8");
        } catch (UnsupportedEncodingException ex) {
            LOGGER.error(ex.getMessage());
            return null;
        }
        return qs;
    }
    
    /**
     * Odpytanie serwera FW
     * @param method Dane metody zdalnej postaci: nazwa_metody [parametry]
     * @param httpMethod Sposób wywołania: post / get
     * @param <T>
     * @return Odpowiedź serwera FW
     * @throws FilmwebException Błąd wywołania metody po stronie serwisu Filmweb
     */
    public static <T> T fire(String method, HttpMethod httpMethod) throws FilmwebException {
    	
    	String params = ApiCaller.prepareParams(method);
    	if (params == null) {
    		return null;
    	}
    	
    	String error = "";
        StringBuilder html = new StringBuilder();
        try (
    		Connection conn = new Connection(Config.API_SERVER + params, httpMethod);
    		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {

            /**
             * Pierwsza linia jest komunikatem o stanie zapytania, możliwe opcje:
             * "ok" - pozostałe linie są wynikiem
             * "err" - pozostała linia zawiera opis błędu
             */
            String stateStr = br.readLine();
            
            String str;
            while ((str = br.readLine()) != null) {
                html.append(str);
            }
            br.close();
            
            if (!stateStr.equals("ok")) {
                error = html.toString();
            }
            else if (html.equals("exc NullPointerException")) {
                LOGGER.error("Brak danych");
                return null;
            }
        } catch (MalformedURLException e) {
            LOGGER.error("Nieprawidłowy adres URL", e);
        }
        catch (Exception e) {
        	LOGGER.error("Błąd pobierania danych", e);
		}
        if (!error.isEmpty()) {
            throw new FilmwebException(error);
        }
        LOGGER.debug("Resp: " + html.toString());
        return ApiCaller.analyze(html.toString());
    }

    /**
     * Analizuje element Json budując na jego podstawie obiekt
     * @param element Analizowany element
     * @return Obiekt String, ArrayList, ew. null
     */
    @SuppressWarnings("unchecked")
	private static <T> T getData(JsonElement element) {
        if (element.isJsonNull()) return null;
        else if (element.isJsonArray()) {
            List<T> data = new ArrayList<>();
            JsonArray ja = element.getAsJsonArray();
            for (JsonElement e : ja) {
                data.add((T) ApiCaller.getData(e));
            }
            return (T) data;
        }
        else return (T) element.getAsString();
    }

    /**
     * Analiza odpowiedzi 
     * @param response Dane zwrócone przez zdalną metodę API FW
     * @return Lista obiektów (String, List, ew. null)
     */
    private static <T> T analyze(String response) {
        
        JsonStreamParser parser = new JsonStreamParser(response);
        if (parser.hasNext()) {
        	JsonElement reposnse = parser.next();
        	return ApiCaller.getData(reposnse);
        }
    	
        return null;
    }
}

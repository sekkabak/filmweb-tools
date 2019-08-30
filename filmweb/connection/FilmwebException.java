package info.talacha.filmweb.connection;

import java.util.HashMap;
import java.util.Map;

/**
 * Błąd serwisu FW
 * @author Paweł Talacha
 */
public class FilmwebException extends Exception {

    private static final long serialVersionUID = -3863630725315114960L;

    private Integer code;
    private String label;
    private String filmwebMessage;
    
    private static final Map<Integer, String> codeMap;
    static {
        codeMap = new HashMap<Integer, String>();
        codeMap.put(20, "Błędne dane logowania");
    }
    
    FilmwebException(String fwMsg) {
        super(fwMsg);
        prepareInfo(fwMsg);
    }

    public Integer getCode() {
        return code;
    }

    public String getLabel() {
        return label;
    }

    public String getFilmwebMessage() {
        return filmwebMessage;
    }
    
    private void prepareInfo(String fwMsg) {
        String[] errorInfo = fwMsg.split(",");
        code = Integer.parseInt(errorInfo[0]);
        label = errorInfo[1].trim();
        filmwebMessage = codeMap.get(code);
    }
}
package info.talacha.filmweb.models;

import java.io.Serializable;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.settings.Config;

/**
 * Osoba
 * @author Paweł Talacha
 */
public class Person implements Serializable {
	
    private static final long serialVersionUID = 42428289304271017L;
    private static final Logger LOGGER = LoggerFactory.getLogger(Person.class);

    private Long id;
    private String role;
    private String info;
    private String name;
    private URL photoUrl;
    
    public Person(List<String> data) {
    	this.prepare(data);
    }

    /**
     * ID w serwisie Filmweb
     */
    public Long getId() {
        return id;
    }

    /**
     * Rola pełniona w filmie
     */
    public String getRole() {
        return role;
    }

    /**
     * Dodatkowe informacje, np. "Niewymieniony w czołówce", "głos" etc.
     */
    public String getInfo() {
        return info;
    }

    /**
     * Imię i nazwisko
     */
    public String getName() {
        return name;
    }

    /**
     * Adres zdjęcia
     */
    public URL getPhotoUrl() {
        return photoUrl;
    }
    
    private void prepare(List<String> data) {
		this.id = Long.parseLong(data.get(0).toString());
		if (data.get(1) != null) {
			this.role = data.get(1).toString();
		}
		if (data.get(2) != null) {
			this.info = data.get(2).toString();
		}
		if (data.get(3) != null) {
			this.name = data.get(3).toString();
		}
    	if (data.get(4) != null) {
    		try {
    			this.photoUrl = new URL(Config.IMG_PERSON_URL + data.get(4));
			} catch (MalformedURLException e) {
				LOGGER.error("Błąd URL", e);
			}
    	}
    }
}
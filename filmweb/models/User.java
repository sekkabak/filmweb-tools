package info.talacha.filmweb.models;

import java.io.Serializable;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.settings.Config;

/**
 * Użytkownik serwisu FW
 * @author Paweł Talacha
 */
public class User implements Serializable {
	
    private static final long serialVersionUID = -3799137788389521114L;
    private static final Logger LOGGER = LoggerFactory.getLogger(User.class);

	private long id;
	private String username;
	private String name;
	private boolean male;
	private URL avatarURL;

	public User(List<String> data) {
		this.prepare(data);
	}

	public long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public String getName() {
		return name;
	}

	public boolean isMale() {
		return male;
	}
	
	public URL getAvatarURL() {
		return avatarURL;
	}

	private void prepare(List<String> data) {
		
    	//nazwa użytkownika
    	if (data.get(0) != null) {
    		this.username = data.get(0);
    	}
    	
    	//imię i nazwisko
    	if (data.get(1) != null) {
    		this.name = data.get(1);
    	}
    	
    	if (data.get(2) != null) {
    		try {
    			this.avatarURL = new URL(Config.IMG_USER_URL + data.get(2));
    		} catch (MalformedURLException e) {
    			LOGGER.error("Błąd URL", e);
    		}
    	}

    	//id
    	if (data.get(3) != null) {
    		this.id = Long.parseLong(data.get(3));
    	}

    	//płeć
    	if (data.get(4) != null) {
    		this.male = data.get(4).equals("M");
    	}
	}
}
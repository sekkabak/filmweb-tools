package info.talacha.filmweb.models;

import java.io.Serializable;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.settings.Config;

/**
 * Wspólne dane dla filmów, seriali, gier
 * @author Paweł Talacha
 */
public class Item implements Serializable {
	
    private static final long serialVersionUID = -1222434740731786935L;
    private static final Logger LOGGER = LoggerFactory.getLogger(Item.class);
	
    private Long id;
    private String title;
    private String polishTitle;
    private Integer year;
    private URL posterURL;
    private URL websiteURL;
    private Float rate;
    private Integer votes;
    private String genre;
    private String countries;
    private String plot;
    
    /**
     * ID w serwisie Filmweb
     */
    public Long getId() {
        return id;
    }

    /**
     * Tytuł oryginalny
     */
    public String getTitle() {
        return title;
    }

    /**
     * Tytuł polski
     */
    public String getPolishTitle() {
        return polishTitle;
    }

    /**
     * Rok produkcji
     */
    public Integer getYear() {
        return year;
    }

    /**
     * Adres URL plakatu
     */
    public URL getPosterURL() {
        return posterURL;
    }

    /**
     * Adres URL strony WWW
     */
    public URL getWebsiteURL() {
        return websiteURL;
    }

    /**
     * Średnia ocen
     */
    public Float getRate() {
        return rate;
    }

    /**
     * Liczba głosów
     */
    public Integer getVotes() {
        return votes;
    }

    /**
     * Gatunek
     */
    public String getGenre() {
        return genre;
    }

    /**
     * Kraj produkcji
     */
    public String getCountries() {
        return countries;
    }

    /**
     * Zarys fabuły
     */
    public String getPlot() {
        return plot;
    }

    protected void prepare(List<String> data) {

    	// tytuł oryginalny; null - polski jest identyczny -> tytuł przechowywany jako polski
    	if (data.get(1) != null) {
    		this.title = data.get(1);
    	}

    	//tytuł polski
    	if (data.get(0) != null) {
    		this.polishTitle = data.get(0);
    	}

    	//ocena
    	if (data.get(2) != null) {
    		this.rate = Float.parseFloat(data.get(2));
    	}

        //liczba głosów
    	if (data.get(3) != null) {
    		this.votes = Integer.parseInt(data.get(3));
    	}

        //gatunek
    	if (data.get(4) != null) {
    		this.genre = data.get(4).replace(",", ", ");
    	}

        //rok produkcji
    	if (data.get(5) != null) {
    		this.year = Integer.parseInt(data.get(5));
    	}
    	
    	//url strony
    	if (data.get(8) != null) {
    		String url = data.get(8).replace(Config.FORUM_URL_SUFFIX, "");
    		try {
    			this.websiteURL = new URL(url);
			} catch (MalformedURLException e) {
				LOGGER.error("Błąd URL", e);
			}
    	}

    	//plakat
    	if (data.get(11) != null) {
    		try {
    			this.posterURL = new URL(Config.IMG_POSTER_URL + data.get(11));
			} catch (MalformedURLException e) {
				LOGGER.error("Błąd URL", e);
			}
    	}

    	//kraj produkcji
    	if (data.get(18) != null) {
    		this.countries = data.get(18);
    	}

    	//zarys fabuły
    	if (data.get(19) != null) {
    		this.plot = data.get(19);
    	}
    }
}
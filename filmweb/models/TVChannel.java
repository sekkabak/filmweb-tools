package info.talacha.filmweb.models;

import java.io.Serializable;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import info.talacha.filmweb.settings.Config;

/**
 * Kanał telewizyjny
 * @author Paweł Talacha
 */
public class TVChannel implements Serializable {
    
    private static final long serialVersionUID = 3771991998975086550L;
    private static final Logger LOGGER = LoggerFactory.getLogger(TVChannel.class);

    private Long id;
    private String name;
    private int dayStartHour;
    
    public TVChannel(List<String> data) {
        this.prepare(data);
    }

    /**
     * ID kanału TV 
     */
    public Long getId() {
        return id;
    }
    
    /**
     * Nazwa kanału TV 
     */
    public String getName() {
        return name;
    }
    
    /**
     * Logo kanału TV w danym rozmiarze
     * @param size Rozmiar logo
     */
    public URL getLogo(Size size) {
        URL url = null;
        try {
            url = new URL(Config.IMG_TV_CHANNEL_LOGO_URL + id + "." + size.getSizeNo() + ".png");
        } catch (MalformedURLException e) {
            LOGGER.error("Błąd URL", e);
        }
        return url;
    }
    
    /**
     * Godzina początku dnia emisji
     */
    public int getDayStartHour() {
        return dayStartHour;
    }
    
    private void prepare(List<String> data) {
        this.id = Long.parseLong(data.get(0));
        this.name = data.get(1);
        this.dayStartHour = Integer.parseInt(data.get(3));
    }    
}
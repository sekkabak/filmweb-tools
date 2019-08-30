package info.talacha.filmweb.models;

import java.util.List;

/**
 * Film
 * @author Paweł Talacha
 */
public class Film extends Item {
	
    private static final long serialVersionUID = -5711213695196395535L;

    private Integer duration;
    
    public Film() {
    	super();
    }
    
    public Film(List<String> data) {
    	super();
    	this.prepare(data);
    }

    /**
     * Czas trwania
     */
    public Integer getDuration() {
        return duration;
    }

    @Override
    protected void prepare(List<String> data) {
    	
    	super.prepare(data);

    	//czas trwania
    	if (data.get(6) != null) {
    		this.duration = Integer.parseInt(data.get(6));
    	}
 
    }
}
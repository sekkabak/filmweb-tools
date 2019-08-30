package info.talacha.filmweb.models;

import java.util.List;

/**
 * Serial
 * @author Paweł Talacha
 */
public class Series extends Film {
    
    private static final long serialVersionUID = -1855832778845768724L;

    private Integer episodesCount;
    private Integer seasonsCount;
    
    public Series() {
    	super();
    }

    public Series(List<String> data) {
    	super();
    	this.prepare(data);
    }

    /**
     * Ilość odcinków
     */
    public Integer getEpisodesCount() {
        return episodesCount;
    }

    /**
     * Ilość sezonów
     */
    public Integer getSeasonsCount() {
        return seasonsCount;
    }

    @Override
    protected void prepare(List<String> data) {
    	
    	super.prepare(data);
    	
    	if (data.get(16) != null) {
    		this.seasonsCount = Integer.parseInt(data.get(16));
    	}
    	if (data.get(17) != null) {
    		this.episodesCount = Integer.parseInt(data.get(17));
    	}
    }
}
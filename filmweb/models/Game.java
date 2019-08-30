package info.talacha.filmweb.models;

import java.util.List;

/**
 * Gra
 * @author Paweł Talacha
 */
public class Game extends Item {
	
    private static final long serialVersionUID = 4214615180792003635L;

    public Game() {
		super();
	}

    public Game(List<String> data) {
    	super();
    	this.prepare(data);
    }
}

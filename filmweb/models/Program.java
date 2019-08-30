package info.talacha.filmweb.models;

import java.util.List;

/**
 * Program
 * @author Paweł Talacha
 */
public class Program extends Item {

    private static final long serialVersionUID = -3130294654186348425L;

    public Program() {
        super();
    }

    public Program(List<String> data) {
        super();
        this.prepare(data);
    }
}
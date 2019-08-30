package info.talacha.filmweb.models;

/**
 * Rozmiar (np. logo kanału TV)
 * @author Paweł Talacha
 */
public enum Size {
    
    SMALL(0),
    MEDIUM(1),
    BIG(2);
    
    private int sizeNo;
    
    Size(int sizeNo) {
        this.sizeNo = sizeNo;
    }

    public int getSizeNo() {
        return sizeNo;
    }
}
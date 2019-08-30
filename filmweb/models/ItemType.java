package info.talacha.filmweb.models;

import java.util.NoSuchElementException;

/**
 * Typ oceny
 * @author Paweł Talacha
 */
public enum ItemType {
    FILM(0),
    SERIES(1),
    GAME(2);
    
    private int id;
    
    ItemType(int id) {
        this.id = id;
    }
    
    /**
     * Typ na podstawie identyfikatora
     * @param id Identyfikator
     * @return Typ
     */
    public static ItemType getType(int id) {
        for (ItemType voteType : ItemType.values()) {
            if (voteType.id == id) {
                return voteType;
            }
        }
        throw new NoSuchElementException("Brak typu o ID " + id);
    }
}
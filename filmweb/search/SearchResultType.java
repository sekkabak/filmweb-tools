package info.talacha.filmweb.search;

import lombok.Getter;

/**
 * Typ "rekordu" zwracanego przez wyszukiwarkę
 *
 * @author Paweł Talacha
 */
public enum SearchResultType {

    CINEMA("c"),
    FILM("f"),
    GAME("g"),
    PERSION("p"),
    PROGRAM("tv"),
    SERIES("s"),
    TV_CHANNEL("t");

    @Getter
    private String discriminant;

    SearchResultType(final String discriminant) {
        this.discriminant = discriminant;
    }

    public static SearchResultType valueByDiscriminant(String discriminant) throws IllegalStateException {
        for (SearchResultType type : SearchResultType.values()) {
            if (type.discriminant.equals(discriminant)) {
                return type;
            }
        }
        throw new IllegalStateException("Nieprawidłowy typ wyszukiwania: " + discriminant);
    }
}
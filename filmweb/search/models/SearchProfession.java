package info.talacha.filmweb.search.models;

import lombok.Getter;

public enum SearchProfession {

    SCREENWRITER(1),
    DIRECTOR(2),
    CINEMATOGRAPHER(3),
    MUSIC(4),
    SCENOGRAPHY(5),
    ACTOR(6),
    PRODUCER(7),
    MONTAGE(10),
    COSTUME_DESIGNER(12),
    ORIGINAL_MATERIALS(17),
    SOUND(18);

    @Getter
    private int code;

    SearchProfession(final int code) {
        this.code = code;
    }

    /**
     * Profesja na podstawie identyfikatora
     *
     * @param code Identyfikator
     * @return Profesja
     * @throws IllegalStateException Brak profesji o podanym identyfikatorze
     */
    public static SearchProfession valueByCode(int code) throws IllegalStateException {
        for (SearchProfession profession : SearchProfession.values()) {
            if (profession.code == code) {
                return profession;
            }
        }
        throw new IllegalStateException("Nieprawidłowy kod zawodu: " + code);
    }
}
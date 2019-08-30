package info.talacha.filmweb.models;

/**
 * Profesja (ID w serwisie Filmweb - nazwa)
 * @author Paweł Talacha
 */
public enum Profession {
	
	DIRECTOR(1),
	SCREENWRITER(2),
	MUSIC(3),
	CINEMATOGRAPHER(4),
	ORIGINAL_MATERIALS(5),
	ACTOR(6),
	PRODUCER(9),
	MONTAGE(10),
	COSTUME_DESIGNER(11);

    private int code;

    Profession(final int code) {
        this.code = code;
    }

    /**
     * Identyfikator profesji
     */
    public int getCode() {
        return code;
    }

    /**
     * Profesja na podstawie identyfikatora
     * @param code Identyfikator
     * @return Profesja
     * @throws IllegalStateException Brak profesji o podanym identyfikatorze
     */
    public static Profession valueByCode(int code) throws IllegalStateException {
    	for (Profession profession : Profession.values()) {
    		if (profession.code == code) {
    			return profession;
    		}
    	}
    	throw new IllegalStateException("Nieprawidłowy kod zawodu: " + code);
    }
}

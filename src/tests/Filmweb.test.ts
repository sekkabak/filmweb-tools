import Filmweb from "../Filmweb";
import {LiveSearchData} from "../interfaces/LiveData";
import Film from "../interfaces/Film";

test('getGenres', () => {
    expect(Filmweb.genres).toBeInstanceOf(Array);
    expect(Filmweb.getGenre(67)).toBe("Niemy");
});

test('getFilmShortData', done => {
    Filmweb.getFilmShortData('Obcy').then(data => {
        expect(data).toEqual({
            "type": "f",
            "id": 980,
            "poster": "/09/80/980/7518072.6.jpg",
            "polishTitle": "Alien",
            "title": "Obcy - 8. pasażer \"Nostromo\"",
            "year": 1979,
            "stars": [
                "Sigourney Weaver",
                "Tom Skerritt"
            ]
        } as LiveSearchData);
        done();
    });
});

test('getFilmInfoFull', done => {
    Filmweb.getFilmData(1048).then(result => {
        expect(result).toEqual({
            "id": 1048,
            "type": "f",
            "polishTitle": "Skazani na Shawshank",
            "title": "The Shawshank Redemption",
            "rate": 8.78118,
            "votes": 858602,
            "genres": [
                6
            ],
            "year": 1994,
            "duration": 142,
            "forumLink": "https://www.filmweb.pl/Skazani.Na.Shawshank/discussion",
            "isReleasedInPoland": true,
            "isReleasedWorldly": true,
            "poster": "/10/48/1048/6925401.2.jpg",
            "images": [
                "/10/48/1048/6925401.0.jpg",
                "/10/48/1048/6925401.1.jpg",
                "/10/48/1048/6925401.2.jpg",
                "/10/48/1048/6925401.3.jpg",
                "/10/48/1048/6925401.4.jpg",
                "/10/48/1048/6925401.5.jpg",
                "/10/48/1048/6925401.6.jpg"
            ],
            "url": "https://www.filmweb.pl/film/Skazani%20na%20Shawshank-1994-1048",
            "trailerPosterLink": "https://1.fwcdn.pl/wv/26/92/12692/snap1.12692.1.jpg",
            "trailerVideoLink": "https://mm.filmweb.pl/1048/the_shawshank_redemption___trailer.iphone.mp4",
            "releaseWorldDate": "1994-09-10",
            "releasePolandData": "1995-04-16",
            "production": [
                53
            ],
            "plot": "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie."
        } as Film);
        done();
    });
});
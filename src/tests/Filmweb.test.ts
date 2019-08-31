import Filmweb from "../Filmweb";
import ResponseGetFilmInfoFull from "../models/ResponseGetFilmInfoFull";

test('getFilmInfoFull', done => {
    const fw = new Filmweb();
    fw.getFilmInfoFull(1048,(result: ResponseGetFilmInfoFull) => {
        expect(result).toEqual({
            title: "Skazani na Shawshank",
            title2: "The Shawshank Redemption",
            rating: 8.78118,
            rateCount: 858602,
            genres: [
                "Dramat"
            ],
            year: 1994,
            minutes: 142,
            forumLink: "https://www.filmweb.pl/Skazani.Na.Shawshank/discussion",
            isReleasedInPoland: 1,
            isReleasedWorldly: 1,
            posterLink: "https://1.fwcdn.pl/po/10/48/1048/6925401.2.jpg",
            trailerPosterLink: "https://1.fwcdn.pl/wv/26/92/12692/snap1.12692.1.jpg",
            trailerVideoLink: "https://mm.filmweb.pl/1048/the_shawshank_redemption___trailer.iphone.mp4",
            releaseWorldDate: "1994-09-10",
            releasePolandData: "1995-04-16",
            isSeries: 0,
            seasonCount: 0,
            episodesCount: 0,
            productionCountry: "USA",
            description: "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie."
        });
        done();
    });
});
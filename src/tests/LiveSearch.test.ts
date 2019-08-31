import LiveSearch from "../LiveSearch";
import ResponseLiveSearch from "../models/ResponseLiveSearch";

test('LiveSearch.search(Obcy)', done => {
    LiveSearch.search('Obcy', (data: any) => {
        expect(data[0]).toEqual({
            type: "f",
            id: 980,
            img: "https://1.fwcdn.pl/po/09/80/980/7518072.6.jpg",
            title: "Alien",
            title2: "Obcy - 8. pasażer \"Nostromo\"",
            title3: "Пришълецът",
            year: 1979,
            stars: [
                "Sigourney Weaver",
                "Tom Skerritt"
            ],
            link: "https://www.filmweb.pl/film/Obcy%20-%208.%20pasa%C5%BCer%20%22Nostromo%22-1979-980"
        });
        done();
    });
});

test('LiveSearch.search(The Shawshank Redemption)', done => {
    LiveSearch.search('The Shawshank Redemption', (data: ResponseLiveSearch[]) => {
        expect(data[0]).toEqual({
            type: "f",
            id: 1048,
            img: "https://1.fwcdn.pl/po/10/48/1048/6925401.6.jpg",
            title: "Skazani na Shawshank",
            title2: "The Shawshank Redemption",
            title3: "الخلاص من شوشانك",
            year: 1994,
            stars: [
                "Tim Robbins",
                "Morgan Freeman"
            ],
            link: "https://www.filmweb.pl/film/The%20Shawshank%20Redemption-1994-1048"
        });
        done();
    });
});

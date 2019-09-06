import axios from "axios";
import Helper from "../Helper";
import {ItemType} from "../interfaces/Item";
import LiveSearch from "../LiveSearch";
import {LivePreviewData, LiveSearchData} from "../models/LiveData";

import genres from "../static/genres.json";
import gameGenres from "../static/gameGenres.json";
import TVshowGenres from "../static/tvshowgenres.json";

test('getAllPosters("/09/80/980/7518072.6.jpg")', () => {
    expect(Helper.getAllPosters("/09/80/980/7518072.6.jpg")).toEqual(
        [
            "/09/80/980/7518072.0.jpg",
            "/09/80/980/7518072.1.jpg",
            "/09/80/980/7518072.2.jpg",
            "/09/80/980/7518072.3.jpg",
            "/09/80/980/7518072.4.jpg",
            "/09/80/980/7518072.5.jpg",
            "/09/80/980/7518072.6.jpg",
        ]
    );
});

test('generateFilmwebUrl("/09/80/980/7518072.6.jpg")', () => {
    expect(Helper.generateFilmwebUrl(980, "Alien", 1979, ItemType.Film)).toBe('https://www.filmweb.pl/film/Alien-1979-980');
});

test('mapLiveSearchResponse', () => {
    const data = Helper.mapLiveSearchResponse("f\\c980\\c/09/80/980/7518072.6.jpg\\cAlien\\cObcy - 8. pasażer \"Nostromo\"\\cПришълецът\\c1979\\cSigourney Weaver, Tom Skerritt\\af\\c994\\c/09/94/994/7518073.6.jpg\\cAliens\\cObcy - decydujące starcie\\cПришълците\\c1986\\cSigourney Weaver, Michael Biehn\\af\\c8243\\c/82/43/8243/7517909.6.jpg\\cAlien³\\cObcy 3\\cПришълецът 3\\c1992\\cSigourney Weaver, Charles S. Dutton\\af\\c665400\\c/54/00/665400/7784620.6.jpg\\cAlien: Covenant\\cObcy: Przymierze\\cفضائي: العهد\\c2017\\cMichael Fassbender, Katherine Waterston\\af\\c134\\c/01/34/134/7517908.6.jpg\\cAlien: Resurrection\\cObcy: Przebudzenie\\cПришълецът: Завръщането\\c1997\\cSigourney Weaver, Winona Ryder\\af\\c107555\\c/75/55/107555/7528756.6.jpg\\cAVP: Alien vs. Predator\\cObcy kontra Predator\\cПришълецът срещу хищникът\\c2004\\cSanaa Lathan, Lance Henriksen\\af\\c193505\\c/35/05/193505/7388585.6.jpg\\cCowboys & Aliens\\cKowboje i obcy\\cKovbojové a vetřelci\\c2011\\cDaniel Craig, Harrison Ford\\af\\c300636\\c/06/36/300636/7176411.6.jpg\\cAVPR: Aliens vs Predator - Requiem\\cObcy kontra Predator 2\\cПришълците срещу хищникът 2\\c2007\\cSteven Pasquale, Reiko Aylesworth\\af\\c425990\\c/59/90/425990/7251267.6.jpg\\cMonsters vs. Aliens\\cPotwory kontra Obcy\\cЧудовища срещу извънземни\\c2009\\cReese Witherspoon, Seth Rogen\\af\\c229424\\c/94/24/229424/7175732.6.jpg\\cPerfect Stranger\\cKtoś całkiem obcy\\cИдеалната непозната\\c2007\\cHalle Berry, Bruce Willis");
    expect(data).toEqual([
            {
                "type": "f",
                "id": 980,
                "poster": "/09/80/980/7518072.6.jpg",
                "title": "Obcy - 8. pasażer \"Nostromo\"",
                "polishTitle": "Alien",
                "otherTitle": "Пришълецът",
                "year": 1979,
                "stars": [
                    "Sigourney Weaver",
                    "Tom Skerritt"
                ]
            },
            {
                "type": "f",
                "id": 994,
                "poster": "/09/94/994/7518073.6.jpg",
                "title": "Obcy - decydujące starcie",
                "polishTitle": "Aliens",
                "otherTitle": "Пришълците",
                "year": 1986,
                "stars": [
                    "Sigourney Weaver",
                    "Michael Biehn"
                ]
            },
            {
                "type": "f",
                "id": 8243,
                "poster": "/82/43/8243/7517909.6.jpg",
                "title": "Obcy 3",
                "polishTitle": "Alien³",
                "otherTitle": "Пришълецът 3",
                "year": 1992,
                "stars": [
                    "Sigourney Weaver",
                    "Charles S. Dutton"
                ]
            },
            {
                "type": "f",
                "id": 665400,
                "poster": "/54/00/665400/7784620.6.jpg",
                "title": "Obcy: Przymierze",
                "polishTitle": "Alien: Covenant",
                "otherTitle": "فضائي: العهد",
                "year": 2017,
                "stars": [
                    "Michael Fassbender",
                    "Katherine Waterston"
                ]
            },
            {
                "type": "f",
                "id": 134,
                "poster": "/01/34/134/7517908.6.jpg",
                "title": "Obcy: Przebudzenie",
                "polishTitle": "Alien: Resurrection",
                "otherTitle": "Пришълецът: Завръщането",
                "year": 1997,
                "stars": [
                    "Sigourney Weaver",
                    "Winona Ryder"
                ]
            },
            {
                "type": "f",
                "id": 107555,
                "poster": "/75/55/107555/7528756.6.jpg",
                "title": "Obcy kontra Predator",
                "polishTitle": "AVP: Alien vs. Predator",
                "otherTitle": "Пришълецът срещу хищникът",
                "year": 2004,
                "stars": [
                    "Sanaa Lathan",
                    "Lance Henriksen"
                ]
            },
            {
                "type": "f",
                "id": 193505,
                "poster": "/35/05/193505/7388585.6.jpg",
                "title": "Kowboje i obcy",
                "polishTitle": "Cowboys & Aliens",
                "otherTitle": "Kovbojové a vetřelci",
                "year": 2011,
                "stars": [
                    "Daniel Craig",
                    "Harrison Ford"
                ]
            },
            {
                "type": "f",
                "id": 300636,
                "poster": "/06/36/300636/7176411.6.jpg",
                "title": "Obcy kontra Predator 2",
                "polishTitle": "AVPR: Aliens vs Predator - Requiem",
                "otherTitle": "Пришълците срещу хищникът 2",
                "year": 2007,
                "stars": [
                    "Steven Pasquale",
                    "Reiko Aylesworth"
                ]
            },
            {
                "type": "f",
                "id": 425990,
                "poster": "/59/90/425990/7251267.6.jpg",
                "title": "Potwory kontra Obcy",
                "polishTitle": "Monsters vs. Aliens",
                "otherTitle": "Чудовища срещу извънземни",
                "year": 2009,
                "stars": [
                    "Reese Witherspoon",
                    "Seth Rogen"
                ]
            },
            {
                "type": "f",
                "id": 229424,
                "poster": "/94/24/229424/7175732.6.jpg",
                "title": "Ktoś całkiem obcy",
                "polishTitle": "Perfect Stranger",
                "otherTitle": "Идеалната непозната",
                "year": 2007,
                "stars": [
                    "Halle Berry",
                    "Bruce Willis"
                ]
            }
        ] as LiveSearchData[]
    );
});

test('mapLiveItemPreview', done => {
    axios.get(LiveSearch.PREVIEW_URL + 980).then(result => {
        const data = Helper.mapLiveItemPreview(result.data);
        expect(data).toEqual(
            {
                "id": 980,
                "polishTitle": "Obcy - 8. pasażer \"Nostromo\"",
                "title": "Alien",
                "year": 1979,
                "trailer": "/video/Zwiastun/nr+2-13182",
                "url": "https://www.filmweb.pl/film/Obcy%20-%208.%20pasa%C5%BCer%20%22Nostromo%22-1979-980",
                "type": "f",
                "poster": "/09/80/980/7518072.6.jpg",
                "images": [
                    "/09/80/980/7518072.0.jpg",
                    "/09/80/980/7518072.1.jpg",
                    "/09/80/980/7518072.2.jpg",
                    "/09/80/980/7518072.3.jpg",
                    "/09/80/980/7518072.4.jpg",
                    "/09/80/980/7518072.5.jpg",
                    "/09/80/980/7518072.6.jpg",
                ],
                "duration": 117,
                "rate": 7.846449851989746,
                "rateCount": 267920,
                "description": "Załoga statku kosmicznego Nostromo odbiera tajemniczy sygnał i ląduje na niewielkiej planetoidzie, gdzie jeden z jej członków zostaje zaatakowany przez obcą formę życia.",
                "genres": [
                    12,
                    33
                ],
                "countries": [
                    53,
                    59
                ],
                "directors": [
                    "Ridley Scott"
                ],
                "cast": [
                    "Sigourney Weaver",
                    "Tom Skerritt"
                ]
            } as LivePreviewData
        );
        done();
    })
});

test('getGenres', done => {
    Helper.getGenres().then(data => {
        expect(data).toEqual(genres);
        done();
    })
});

test('getGameGenres', done => {
    Helper.getGameGenres().then(data => {
        expect(data).toEqual(gameGenres);
        done();
    })
});

test('getTVshowGenres', done => {
    Helper.getTVshowGenres().then(data => {
        expect(data).toEqual(TVshowGenres);
        done();
    })
});
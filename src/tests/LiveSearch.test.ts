import LiveSearch from "../LiveSearch";
import {LivePreviewData, LiveSearchDataFilm} from "../models/LiveData";

test('LiveSearch.search(Obcy)', done => {
    LiveSearch.search('Obcy').then(data => {
        expect(data[0]).toEqual({
            "type": "f",
            "id": 980,
            "poster": "/09/80/980/7518072.6.jpg",
            "polishTitle": "Alien",
            "otherTitle": "Пришълецът",
            "title": "Obcy - 8. pasażer \"Nostromo\"",
            "year": 1979,
            "stars": [
                "Sigourney Weaver",
                "Tom Skerritt"
            ]
        } as LiveSearchDataFilm);
        done();
    });
});

test('LiveSearch.search(The Shawshank Redemption)', done => {
    LiveSearch.search('The Shawshank Redemption').then(data => {
        expect(data[0]).toEqual({
            "type": "f",
            "id": 1048,
            "poster": "/10/48/1048/6925401.6.jpg",
            "polishTitle": "Skazani na Shawshank",
            "title": "The Shawshank Redemption",
            "otherTitle": "الخلاص من شوشانك",
            "year": 1994,
            "stars": [
                "Tim Robbins",
                "Morgan Freeman"
            ]
        } as LiveSearchDataFilm);
        done();
    });
});

test('LiveSearch.searchFirst(The Shawshank Redemption)', done => {
    LiveSearch.searchFirst('The Shawshank Redemption').then(data => {
        expect(data).toEqual({
            "type": "f",
            "id": 1048,
            "poster": "/10/48/1048/6925401.6.jpg",
            "polishTitle": "Skazani na Shawshank",
            "title": "The Shawshank Redemption",
            "otherTitle": "الخلاص من شوشانك",
            "year": 1994,
            "stars": [
                "Tim Robbins",
                "Morgan Freeman"
            ]
        } as LiveSearchDataFilm);
        done();
    });
});

test('LiveSearch.searchFirst(Venom)', done => {
    LiveSearch.searchFirst('Venom').then(data => {
        expect(data).toEqual({
            "type": "f",
            "id": 519906,
            "poster": "/99/06/519906/7857303.6.jpg",
            "title": "Venom",
            "polishTitle": "Venom",
            "otherTitle": "سم",
            "year": 2018,
            "stars": [
                "Tom Hardy",
                "Michelle Williams"
            ]
        } as LiveSearchDataFilm);
        done();
    });
});

test('LiveSearch.searchFirst(Captain Marvel)', done => {
    LiveSearch.searchFirst('Captain Marvel').then(data => {
        expect(data).toEqual({
            "type": "f",
            "id": 726490,
            "poster": "/64/90/726490/7866639.6.jpg",
            "title": "Captain Marvel",
            "polishTitle": "Kapitan Marvel",
            "otherTitle": "كابتن مارفل",
            "year": 2019,
            "stars": [
                "Brie Larson",
                "Samuel L. Jackson"
            ]
        } as LiveSearchDataFilm);
        done();
    });
});

test('.itemPreview(1048)', done => {
    LiveSearch.itemPreview(1048).then(data => {
        expect(data).toEqual({
            "id": 1048,
            "polishTitle": "Skazani na Shawshank",
            "title": "The Shawshank Redemption",
            "url": "https://www.filmweb.pl/film/Skazani%20na%20Shawshank-1994-1048",
            "year": 1994,
            "type": "f",
            "trailer": "/video/Zwiastun/nr+1-12692",
            "poster": "/10/48/1048/6925401.6.jpg",
            "images": [
                "/10/48/1048/6925401.0.jpg",
                "/10/48/1048/6925401.1.jpg",
                "/10/48/1048/6925401.2.jpg",
                "/10/48/1048/6925401.3.jpg",
                "/10/48/1048/6925401.4.jpg",
                "/10/48/1048/6925401.5.jpg",
                "/10/48/1048/6925401.6.jpg"
            ],
            "duration": 142,
            "rate": 8.781305313110352,
            "rateCount": 859129,
            "description": "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
            "genres": [
                6
            ],
            "countries": [
                53
            ],
            "directors": [
                "Frank Darabont"
            ],
            "cast": [
                "Tim Robbins",
                "Morgan Freeman"
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreview(547035)', done => {
    LiveSearch.itemPreview(547035).then(data => {
        expect(data).toEqual({
            "id": 547035,
            "polishTitle": "The Walking Dead",
            "url": "https://www.filmweb.pl/serial/The%20Walking%20Dead-2010-547035",
            "year": 2010,
            "type": "s",
            "trailer": "/video/Zwiastun/nr+2+sezon+10-50736",
            "poster": "/70/35/547035/7856859.6.jpg",
            "images": [
                "/70/35/547035/7856859.0.jpg",
                "/70/35/547035/7856859.1.jpg",
                "/70/35/547035/7856859.2.jpg",
                "/70/35/547035/7856859.3.jpg",
                "/70/35/547035/7856859.4.jpg",
                "/70/35/547035/7856859.5.jpg",
                "/70/35/547035/7856859.6.jpg"
            ],
            "duration": 45,
            "rate": 7.8563232421875,
            "rateCount": 152871,
            "description": "Świat opanowały zombie. Grupka ocalałych szuka bezpiecznego schronienia. ",
            "genres": [
                6,
                12
            ],
            "countries": [
                53
            ],
            "directors": [
                "Frank Darabont"
            ],
            "cast": [
                "Andrew Lincoln",
                "Norman Reedus"
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreviewByQuery(Avengers)', done => {
    LiveSearch.itemPreviewByQuery("Avengers").then(data => {
        expect(data).toEqual({
            "id": 371515,
            "polishTitle": "Avengers",
            "title": "The Avengers",
            "type": "f",
            "url": "https://www.filmweb.pl/film/Avengers-2012-371515",
            "year": 2012,
            "trailer": "/video/Zwiastun/nr+4+polski-27638",
            "poster": "/15/15/371515/7611932.6.jpg",
            "images": [
                "/15/15/371515/7611932.0.jpg",
                "/15/15/371515/7611932.1.jpg",
                "/15/15/371515/7611932.2.jpg",
                "/15/15/371515/7611932.3.jpg",
                "/15/15/371515/7611932.4.jpg",
                "/15/15/371515/7611932.5.jpg",
                "/15/15/371515/7611932.6.jpg"
            ],
            "duration": 142,
            "rate": 7.479465007781982,
            "rateCount": 300733,
            "description": "Grupa superbohaterów, na czele z Thorem, Iron Manem i Hulkiem, łączy siły, by obronić Ziemię przed inwazją kosmitów.",
            "genres": [
                28,
                33
            ],
            "countries": [
                53
            ],
            "directors": [
                "Joss Whedon"
            ],
            "cast": [
                "Robert Downey Jr.",
                "Chris Evans"
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreviewByQuery(Agenci T.A.R.C.Z.Y.)', done => {
    LiveSearch.itemPreviewByQuery("Agenci T.A.R.C.Z.Y.").then(data => {
        expect(data).toEqual({
            "id": 668019,
            "polishTitle": "Agenci T.A.R.C.Z.Y.",
            "title": "Agents of S.H.I.E.L.D.",
            "type": "s",
            "url": "https://www.filmweb.pl/serial/Agenci%20T.A.R.C.Z.Y.-2013-668019",
            "year": 2013,
            "trailer": "/video/Zwiastun/Clark+Gregg+o+agencie+Coulsonie-31557",
            "poster": "/80/19/668019/7791968.6.jpg",
            "images": [
                "/80/19/668019/7791968.0.jpg",
                "/80/19/668019/7791968.1.jpg",
                "/80/19/668019/7791968.2.jpg",
                "/80/19/668019/7791968.3.jpg",
                "/80/19/668019/7791968.4.jpg",
                "/80/19/668019/7791968.5.jpg",
                "/80/19/668019/7791968.6.jpg"
            ],
            "duration": 43,
            "rate": 7.458980083465576,
            "rateCount": 25842,
            "description": "Phil Coulson wraca do T.A.R.C.Z.Y., gdzie dowodzi małym oddziałem świetnie wytrenowanych agentów, którzy zajmują się niesklasyfikowanymi jeszcze dziwnymi i trudnymi do zrozumienia sprawami.",
            "genres": [
                6,
                28,
                33
            ],
            "countries": [
                53
            ],
            "directors": [
                "Jed Whedon"
            ],
            "cast": [
                "Clark Gregg",
                "Chloe Bennet"
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreviewByQuery(Gra o tron)', done => {
    LiveSearch.itemPreviewByQuery("Gra o tron").then(data => {
        expect(data).toEqual({
            "id": 476848,
            "polishTitle": "Gra o tron",
            "title": "Game of Thrones",
            "type": "s",
            "url": "https://www.filmweb.pl/serial/Gra%20o%20tron-2011-476848",
            "year": 2011,
            "trailer": "/video/Zwiastun/nr+19+polski%2C+sezon+8-49393",
            "poster": "/68/48/476848/7794141.6.jpg",
            "images": [
                "/68/48/476848/7794141.0.jpg",
                "/68/48/476848/7794141.1.jpg",
                "/68/48/476848/7794141.2.jpg",
                "/68/48/476848/7794141.3.jpg",
                "/68/48/476848/7794141.4.jpg",
                "/68/48/476848/7794141.5.jpg",
                "/68/48/476848/7794141.6.jpg"
            ],
            "duration": 60,
            "rate": 8.850475311279297,
            "rateCount": 339202,
            "description": "Adaptacja sagi George'a R.R. Martina. W królestwie Westeros walka o władzę, spiski oraz zbrodnie są na porządku dziennym.",
            "genres": [
                6,
                9,
                20
            ],
            "countries": [
                53,
                59
            ],
            "directors": [
                "David Benioff"
            ],
            "cast": [
                "Peter Dinklage",
                "Lena Headey"
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreviewByQuery(Wiedzmin)', done => {
    LiveSearch.itemPreviewByQuery("Wiedzmin").then(data => {
        expect(data).toEqual({
            "id": 678629,
            "polishTitle": "Wiedźmin 3: Dziki Gon",
            "type": "g",
            "year": 2015,
            "poster": "/86/29/678629/7615888.6.jpg",
            "url": "https://www.filmweb.pl/gra/Wied%C5%BAmin%203:%20Dziki%20Gon-2015-678629",
            "trailer": "/video/Zwiastun/Edycja+Gra+roku+polski-40314",
            "images": [
                "/86/29/678629/7615888.0.jpg",
                "/86/29/678629/7615888.1.jpg",
                "/86/29/678629/7615888.2.jpg",
                "/86/29/678629/7615888.3.jpg",
                "/86/29/678629/7615888.4.jpg",
                "/86/29/678629/7615888.5.jpg",
                "/86/29/678629/7615888.6.jpg"
            ],
            "rate": 9.680258750915527,
            "rateCount": 40758,
            "description": "Wiedźmin Geralt wyrusza na południe w celu odnalezienia swojej miłości, czarodziejki Yennefer. Wkrótce będzie zmuszony zmierzyć się ze swoim nemezis, Dzikim Gonem.",
            "genres": [
                4
            ],
            "countries": [
                42
            ]
        } as LivePreviewData);
        done();
    })
});

test('.itemPreviewByQuery(Jaka to melodia?)', done => {
    LiveSearch.itemPreviewByQuery("Jaka to melodia?").then(data => {
        expect(data).toEqual({
            "id": 778902,
            "polishTitle": "Jaka to melodia?",
            "type": "tv",
            "year": 1997,
            "url": "https://www.filmweb.pl/tvshow/Jaka%20to%20melodia?-1997-778902",
            "duration": 25,
            "rate": 5.0168352127075195,
            "rateCount": 891,
            "description": "Trójka zawodników bierze udział w muzycznym teleturnieju.",
            "genres": [
                12,
                16
            ],
            "countries": [
                42
            ]
        } as LivePreviewData);
        done();
    })
});
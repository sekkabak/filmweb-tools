import LiveSearch from "../LiveSearch";
import {LivePreviewData, LiveSearchData} from "../interfaces/LiveData";

test('LiveSearch.search(Obcy)', done => {
    LiveSearch.search('Obcy').then(data => {
        expect(data[0]).toEqual({
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

test('LiveSearch.search(The Shawshank Redemption)', done => {
    LiveSearch.search('The Shawshank Redemption').then(data => {
        expect(data[0]).toEqual({
            "type": "f",
            "id": 1048,
            "poster": "/10/48/1048/6925401.6.jpg",
            "polishTitle": "Skazani na Shawshank",
            "title": "The Shawshank Redemption",
            "year": 1994,
            "stars": [
                "Tim Robbins",
                "Morgan Freeman"
            ]
        } as LiveSearchData);
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
            "year": 1994,
            "stars": [
                "Tim Robbins",
                "Morgan Freeman"
            ]
        } as LiveSearchData);
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
            "title": "The Walking Dead",
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
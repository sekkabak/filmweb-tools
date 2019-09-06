import jsdom from 'jsdom';
import axios from 'axios';
import {ItemType, ItemTypeUrl} from "./interfaces/Item";
import {Profession} from "./interfaces/Person";
import {
    LivePreviewData,
    LiveSearchData,
    LiveSearchDataFilm,
    LiveSearchDataGame,
    LiveSearchDataPerson,
    LiveSearchDataSeries,
    LiveSearchDataTVshow
} from "./models/LiveData";

export default class Helper {
    /**
     * Tworzy odnośniki do wszystkich wersji postera
     */
    static getAllPosters(poster: string): string[] {
        if (poster == "" || poster === undefined) return [];
        let data = [];
        const split = poster.split('.');
        for (let i = 0, tmp = split; i < 7; i++) {
            tmp[1] = i.toString();
            data[i] = tmp.join('.');
        }
        return data;
    }

    /**
     *  Zwraca ściężkę url do filmwebu
     */
    static generateFilmwebUrl = (id: number, title: string, year: number, type: ItemType = ItemType.Film): string => 'https://www.filmweb.pl/' + ItemTypeUrl[type] + '/' + encodeURI(title) + '-' + year + '-' + id;

    /**
     * Mapuje zwrócone dane do obiektów
     */
    static mapLiveSearchResponse(response: string): LiveSearchData[] {
        const result: LiveSearchData[] = [];
        response.split('\\a').forEach((record: string) => {
            let core = new LiveSearchData();
            const row: any[] = record.split('\\c');
            core.type = row[0];
            core.id = parseInt(row[1]);
            core.poster = row[2];

            let data: LiveSearchData = core;
            const fillData = (data: LiveSearchData, row: any[]) => {
                data.title = row[4];
                data.polishTitle = row[3];
                data.otherTitle = row[5];
                data.year = parseInt(row[6]);
                data.stars = (row[7] != "") ? row[7].split(', ') : "";
            };

            if (core.type === ItemType.Series) {
                data = <LiveSearchDataSeries>core;
                fillData(data, row);
            } else if (core.type === ItemType.Game) {
                data = <LiveSearchDataGame>core;
                fillData(data, row);
            } else if (core.type === ItemType.Person) {
                data = <LiveSearchDataPerson>core;
                data.name = row[3];
                data.professionIndex = parseInt(row[4]);
                data.profession = parseInt(row[5]);
            } else if (core.type === ItemType.TVshow) {
                data = <LiveSearchDataTVshow>core;
                data.title = row[4];
                data.polishTitle = row[3];
                data.otherTitle = row[5];
                data.year = parseInt(row[6]);
            } else {
                data = <LiveSearchDataFilm>core;
                fillData(data, row);

                // Log jeśli wystąpi inny typ
                if (core.type !== ItemType.Film)
                    console.warn("Different LiveSearch type");
            }
            result.push(data);
        });
        return result;
    }

    /**
     *  Zwraca polską nazwę profesji
     */
    static getProfessionName(profession: Profession, type: number = 0) {
        return {
            1: ["Scenarzysta", "Scenarzystka"],
            2: ["Reżyser", "Reżyserka"],
            3: ["Zdjęcia"],
            4: ["Muzyka"],
            5: ["Scenografia"],
            6: ["Aktor(ka)", "Aktorka", "Aktor", "Zespół"],
            7: ["Producent", "Producentka"],
            10: ["Montaż"],
            12: ["Kostiumy"],
            17: ["Materiały do scenariusza"],
            18: ["Dźwięk"],
            19: ["Materiały archiwalne"],
            20: ["Głos"],
            21: ["We własnej osobie", "", "", "Zespół"],
            22: ["Gościnnie"]
        }[profession][type]
    }

    static mapLiveItemPreview(content: string) {
        const result = new LivePreviewData();
        const el = new jsdom.JSDOM(content).window.document;

        const id = parseInt(this.domQuerySelectorAttr(el, '.filmPreview', 'data-id'));
        if (!isNaN(id))
            result.id = id;
        else
            throw new Error("Item without id ??");

        const polishTitle = this.domQuerySelectorTextContent(el, '.filmPreview__title');
        if (polishTitle != "")
            result.polishTitle = polishTitle;

        const title = this.domQuerySelectorTextContent(el, '.filmPreview__originalTitle');
        if (title != "")
            result.title = title;

        const typeStr = this.domQuerySelectorAttr(el, '.filmPreview', 'data-type');
        const type = Helper.getTypeByString(typeStr);
        if (type == ItemType.Film && typeStr != "FILM")
            throw new Error("Item with other type ??");
        else
            result.type = type;

        const year = parseInt(this.domQuerySelectorTextContent(el, '.filmPreview__year'));
        result.year = year;

        const poster = this.domQuerySelectorAttr(el, 'img.filmPoster__image', 'data-src').split('/po')[1];
        if (poster != undefined)
            result.poster = poster;

        result.url = Helper.generateFilmwebUrl(id, polishTitle, year, type);

        const trailer = this.domQuerySelectorAttr(el, 'a.filmPoster__videoLink', 'href');
        if (trailer != "")
            result.trailer = trailer;

        if (poster != undefined)
            result.images = Helper.getAllPosters(poster);

        const duration = parseInt(this.domQuerySelectorAttr(el, '.filmPreview__filmTime', 'data-duration'));
        if (!isNaN(duration))
            result.duration = duration;

        const rate = parseFloat(this.domQuerySelectorAttr(el, '.filmPreview__rateBox', 'data-rate'));
        if (!isNaN(rate))
            result.rate = rate;

        const rateCount = parseInt(this.domQuerySelectorAttr(el, '.filmPreview__rateBox', 'data-count'));
        if (!isNaN(rateCount))
            result.rateCount = rateCount;

        const description = this.domQuerySelectorTextContent(el, '.filmPreview__description p');
        if (description != "")
            result.description = description;

        const genres = this.domQuerySelectorAllAttr(el, '.filmPreview__info--genres ul li a', 'href').map(str => {
            return parseInt(str.split('=')[1])
        });
        if (genres.length != 0)
            result.genres = genres;

        const countries = this.domQuerySelectorAllAttr(el, '.filmPreview__info--countries ul li a', 'href').map(str => {
            return parseInt(str.split('=')[1])
        });
        if (countries.length != 0)
            result.countries = countries;

        const directors = this.domQuerySelectorAllAttr(el, '.filmPreview__info--directors ul li a', 'title');
        if (directors.length != 0)
            result.directors = directors;

        const cast = this.domQuerySelectorAllAttr(el, '.filmPreview__info--cast ul li a', 'title');
        if (cast.length != 0)
            result.cast = cast;

        return result;
    }

    public static getTypeByString(str: string): ItemType {
        if (['FILM', 'f'].indexOf(str) != -1) return ItemType.Film;
        if (['SERIAL', 's'].indexOf(str) != -1) return ItemType.Series;
        if (['VIDEOGAME', 'g'].indexOf(str) != -1) return ItemType.Game;
        if (['TVSHOW', 'tv'].indexOf(str) != -1) return ItemType.TVshow;

        return ItemType.Film;
    }

    private static domQuerySelectorAttr(dom: Document, str: string, attr: string): string {
        try {
            return (dom.querySelector(str) as Element).getAttribute(attr) as string;
        } catch (e) {
            return "";
        }
    }

    private static domQuerySelectorAllAttr(dom: Document, str: string, attr: string): string[] {
        const data: string[] = [];
        (dom.querySelectorAll(str) as NodeListOf<Element>).forEach(elem => {
            data.push(elem.getAttribute(attr) as string);
        });
        return data;
    }

    private static domQuerySelectorTextContent(dom: Document, str: string): string {
        try {
            return (dom.querySelector(str) as Element).textContent as string;
        } catch (e) {
            return "";
        }
    }

    private static getGenresFunc(linkPart: string, selectorPart: string): Promise<string[]> {
        return new Promise<string[]>(resolve => {
            axios.get('https://www.filmweb.pl/' + linkPart + '/search').then(result => {
                const el = new jsdom.JSDOM(result.data).window.document;

                let arr: string[] = [];
                el.querySelectorAll(selectorPart + ' .filterSelect__option').forEach(item => {
                    item.innerHTML = <string>item.getAttribute('data-name');
                    arr[parseInt(<string>item.getAttribute('data-value'))] = <string>item.textContent;
                });

                // zmiana wszystkich null na ""
                for (let i = 0; i < arr.length; i++)
                    if (arr[i] == null || arr[i] === undefined) arr[i] = "";

                resolve(arr);
            });
        });
    }

    static getGenres(): Promise<string[]> {
        return new Promise(resolve => {
            resolve(this.getGenresFunc('films', '.GenresFilter'))
        });
    }

    static getGameGenres(): Promise<string[]> {
        return new Promise(resolve => {
            resolve(this.getGenresFunc('games', '.GameGenresFilter'))
        });
    }

    static getTVshowGenres(): Promise<string[]> {
        return new Promise<string[]>(resolve => {
            resolve(this.getGenresFunc('tvshows', '.TvshowGenresFilter'))
        })
    }
}
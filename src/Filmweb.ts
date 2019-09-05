import MD5 from 'crypto-js/md5';
import axios from "axios";
import genres from './static/genres.json';
import countries from './static/countries.json';

import Config from "./Config";
import {LiveSearchData} from "./interfaces/LiveData";
import LiveSearch from "./LiveSearch";
import Film from "./interfaces/Film";
import Helper from "./Helper";
import {ItemType} from "./interfaces/Item";

export default class Filmweb {

    // todo
    // https://www.filmweb.pl/ajax/whereWatchCity/804561/63
    // https://www.filmweb.pl/ajax/whereWatchOther/804561

    static get genres(): string[] {
        return genres;
    }

    static get countries(): string[] {
        return countries;
    }

    public static getImageServers = (index: number = 0) => Config.IMAGE_SERVER(index);

    public static getCountry(id: number): string {
        if (id > 236) return '';
        return countries[id];
    }

    static getCountryId = (country: string) => countries.indexOf(country);

    /**
     * Zwraca kategorie o podanym id
     * jeśli kategoria nie istnieje zwraca pusty string
     */
    public static getGenre(id: number): string {
        if (id > 77) return '';
        return genres[id];
    }

    static getGenreId = (genre: string) => genres.indexOf(genre);

    // @TODO: standaryzacja errorów dla api filmwebu
    public static getFilmData(filmId: number): Promise<Film> {
        return new Promise((resolve) => {
            axios.get(
                Config.API_SERVER +
                Filmweb.prepareQuery("getFilmInfoFull [" + filmId + "]")
            ).then(result => {
                const [status, data] = result.data.split('\n');
                const json = JSON.parse(data.replace(/t:.*/, ''));

                // json[16],   // seasonCount
                // json[17],   // episodesCount

                // todo series?
                // todo game?

                resolve({
                    id: filmId,
                    type: ItemType.Film,
                    polishTitle: json[0],
                    title: json[1],
                    rate: json[2],
                    votes: json[3],
                    genres: json[4].split(',').map((item: string) => {
                        return Filmweb.getGenreId(item);
                    }),
                    year: json[5],
                    duration: json[6],
                    forumLink: json[8],
                    isReleasedInPoland: !!+json[9],
                    isReleasedWorldly: !!+json[10],
                    poster: json[11],
                    images: Helper.getAllPosters(json[11]),
                    url: Helper.generateFilmwebUrl(filmId, json[0], json[5]),
                    trailerPosterLink: json[12][0] == undefined ? "" : json[12][0],
                    trailerVideoLink: json[12][1] == undefined ? "" : json[12][1],
                    releaseWorldDate: json[13],
                    releasePolandData: json[14],
                    production: json[18].split(','),
                    plot: json[19]
                } as Film);
            });
        });
    }

    public static getPersons(itemId: number, profesion: string, page: number, limit: number) {
    }

    public static getFilmShortData = (query: string): Promise<LiveSearchData> => LiveSearch.searchFirst(query);

    public static getLiveSearchData = (query: string): Promise<LiveSearchData[]> => LiveSearch.search(query);

    private static prepareQuery(method: string): string {
        const signature = Config.APP_VERSION + "," + MD5(method + "\\n" + Config.APPID + Config.APP_KEY);

        return "methods=" + encodeURI(method + "\\n")
            + "&signature=" + encodeURI(signature)
            + "&version=" + encodeURI(Config.APP_VERSION)
            + "&appId=" + encodeURI(Config.APPID);
    }
}
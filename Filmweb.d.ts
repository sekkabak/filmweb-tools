declare module "Config" {
    export default class Config {
        static readonly APP_VERSION: string;
        static readonly APPID: string;
        static readonly API_SERVER: string;
        static readonly APP_KEY: string;
        static readonly IMAGE_SERVERS: string[];
        static IMAGE_SERVER(index?: number): string;
        private static _IMAGE_SERVERS;
        private static _APP_KEY;
        private static _API_SERVER;
        private static _APPID;
        private static _APP_VERSION;
    }
}
declare module "interfaces/Item" {
    export enum ItemType {
        Film = "f",
        Series = "s",
        Game = "g",
        TVshow = "tv",
        Cinema = "c",
        Person = "p",
        TVchannel = "t"
    }
    export enum ItemTypeUrl {
        'f' = "film",
        's' = "serial",
        'g' = "gra",
        'tv' = "tvshow",
        'c' = "showtimes",
        'p' = "person",
        't' = "program-tv"
    }
    export interface Item {
        genres: number[];
        id: number;
        plot: string;
        polishTitle: string;
        poster: string;
        images: string[];
        production: number[];
        rate: number;
        title: string;
        type: ItemType;
        url: string;
        votes: number;
        year: number;
    }
}
declare module "interfaces/Person" {
    export enum Profession {
        Screenwriter = 1,
        Director = 2,
        Cinematographer = 3,
        Music = 4,
        Scenography = 5,
        Actor = 6,
        Producer = 7,
        Montage = 10,
        CostumeDesigner = 12,
        OriginalMaterials = 17,
        Sound = 18,
        ArchivalMaterials = 19,
        Voice = 20,
        InPerson = 21,
        Guest = 22
    }
}
declare module "models/LiveData" {
    import { ItemType } from "interfaces/Item";
    export class LiveSearchData {
        type: string;
        id: number;
        poster: string;
        title?: string;
        polishTitle?: string;
        otherTitle?: string;
        year?: number;
        stars?: string[];
        name?: string;
        professionIndex?: number;
        profession?: number;
    }
    export class LiveSearchDataFilm extends LiveSearchData {
        title: string;
        polishTitle: string;
        otherTitle: string;
        year: number;
        stars: string[];
    }
    export class LiveSearchDataSeries extends LiveSearchDataFilm {
    }
    export class LiveSearchDataGame extends LiveSearchDataFilm {
    }
    export class LiveSearchDataPerson extends LiveSearchData {
        name: string;
        professionIndex: number;
        profession: number;
    }
    export class LiveSearchDataTVshow extends LiveSearchData {
    }
    export class LivePreviewData {
        id: number;
        polishTitle: string;
        title: string;
        type: ItemType;
        year: number;
        poster: string;
        url: string;
        images: string[];
        trailer: string;
        duration: number;
        rate: number;
        rateCount: number;
        description: string;
        genres: number[];
        countries: number[];
        directors: string[];
        cast: string[];
    }
}
declare module "Helper" {
    import { ItemType } from "interfaces/Item";
    import { Profession } from "interfaces/Person";
    import { LivePreviewData, LiveSearchData } from "models/LiveData";
    export default class Helper {
        /**
         * Tworzy odnośniki do wszystkich wersji postera
         */
        static getAllPosters(poster: string): string[];
        /**
         *  Zwraca ściężkę url do filmwebu
         */
        static generateFilmwebUrl: (id: number, title: string, year: number, type?: ItemType) => string;
        /**
         * Mapuje zwrócone dane do obiektów
         */
        static mapLiveSearchResponse(response: string): LiveSearchData[];
        /**
         *  Zwraca polską nazwę profesji
         */
        static getProfessionName(profession: Profession, type?: number): string;
        static mapLiveItemPreview(content: string): LivePreviewData;
        static getTypeByString(str: string): ItemType;
        private static domQuerySelectorAttr;
        private static domQuerySelectorAllAttr;
        private static domQuerySelectorTextContent;
        private static getGenresFunc;
        static getGenres(): Promise<string[]>;
        static getGameGenres(): Promise<string[]>;
        static getTVshowGenres(): Promise<string[]>;
    }
}
declare module "LiveSearch" {
    import { LivePreviewData, LiveSearchData } from "models/LiveData";
    export default class LiveSearch {
        static URL: string;
        static PREVIEW_URL: string;
        /**
         * Zwraca tablice elementów z wyszukiwarki filmwebu o podanej frazie
         * @param query
         */
        static search(query: string): Promise<LiveSearchData[]>;
        static itemPreview(id: number): Promise<LivePreviewData>;
        static itemPreviewByQuery(query: string): Promise<LivePreviewData>;
        /**
         * Zwraca pierwszy element z wyszukiwarki filmwebu o podanej frazie
         * @param query
         */
        static searchFirst(query: string): Promise<LiveSearchData>;
    }
}
declare module "interfaces/Film" {
    import { Item } from "interfaces/Item";
    export default interface Film extends Item {
        duration: number;
        forumLink: string;
        isReleasedInPoland: boolean;
        isReleasedWorldly: boolean;
        images: string[];
        trailerPosterLink: string;
        trailerVideoLink: string;
        releaseWorldDate: string;
        releasePolandData: string;
    }
}
declare module "Filmweb" {
    import Film from "interfaces/Film";
    import { LivePreviewData, LiveSearchData } from "models/LiveData";
    export default class Filmweb {
        static readonly genres: string[];
        static readonly countries: string[];
        static readonly tvshowGenres: string[];
        static getImageServers: (index?: number) => string;
        static getCountry(id: number): string;
        static getCountryId: (country: string) => number;
        /**
         * Zwraca kategorie o podanym id
         * jeśli kategoria nie istnieje zwraca pusty string
         */
        static getGenre(id: number): string;
        static getGenreId: (genre: string) => number;
        static getFilmData(filmId: number): Promise<Film>;
        static getFilmLiveData: (query: string) => Promise<LivePreviewData>;
        static getFilmShortData: (query: string) => Promise<LiveSearchData>;
        static getLiveSearchData: (query: string) => Promise<LiveSearchData[]>;
        private static prepareQuery;
    }
}
declare module "models/Film" {
    import { ItemType } from "interfaces/Item";
    export default class Film {
        private _duration;
        duration: number;
        private _forumLink;
        forumLink: string;
        private _genres;
        genres: number[];
        private _id;
        id: number;
        private _images;
        images: string[];
        private _isReleasedInPoland;
        isReleasedInPoland: boolean;
        private _isReleasedWorldly;
        isReleasedWorldly: boolean;
        private _plot;
        plot: string;
        private _polishTitle;
        polishTitle: string;
        private _poster;
        poster: string;
        private _production;
        production: number[];
        private _rate;
        rate: number;
        private _releasePolandData;
        releasePolandData: string;
        private _releaseWorldDate;
        releaseWorldDate: string;
        private _title;
        title: string;
        private _trailerPosterLink;
        trailerPosterLink: string;
        private _trailerVideoLink;
        trailerVideoLink: string;
        private _type;
        type: ItemType;
        private _url;
        url: string;
        private _votes;
        votes: number;
        private _year;
        year: number;
    }
}
declare module "tests/Filmweb.test" { }
declare module "tests/Helper.test" { }
declare module "tests/LiveSearch.test" { }

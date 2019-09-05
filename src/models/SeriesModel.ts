import FilmModel from "./FilmModel";
import Series from "../interfaces/Series";
import {ItemType} from "../interfaces/Item";

export default class SeriesModel extends FilmModel implements Series {
    constructor(
        genres: number[],
        id: number,
        plot: string,
        polishTitle: string,
        poster: string,
        images: string[],
        production: string[],
        rate: number,
        title: string,
        type: ItemType,
        url: string,
        votes: number,
        year: number,
        duration: number,
        forumLink: string,
        isReleasedInPoland: boolean,
        isReleasedWorldly: boolean,
        releasePolandData: string,
        releaseWorldDate: string,
        trailerPosterLink: string,
        trailerVideoLink: string,
        episodesCount: number,
        seasonCount: number
    ) {
        super(genres, id, plot, polishTitle, poster, images, production, rate, title, type, url, votes, year, duration, forumLink,  isReleasedInPoland, isReleasedWorldly, releasePolandData, releaseWorldDate, trailerPosterLink, trailerVideoLink);

        this._episodesCount = episodesCount;
        this._seasonCount = seasonCount;
    }

    private _episodesCount: number;

    get episodesCount(): number {
        return this._episodesCount;
    }

    set episodesCount(value: number) {
        this._episodesCount = value;
    }

    private _seasonCount: number;

    get seasonCount(): number {
        return this._seasonCount;
    }

    set seasonCount(value: number) {
        this._seasonCount = value;
    }
}
import Film from "../interfaces/Film";
import ItemModel from "./ItemModel";
import {ItemType} from "../interfaces/Item";

export default class FilmModel extends ItemModel implements Film {
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
        trailerVideoLink: string
    ) {
        super(genres, id, plot, polishTitle, poster, images, production, rate, title, type, url, votes, year);

        this._duration = duration;
        this._forumLink = forumLink;
        this._isReleasedInPoland = isReleasedInPoland;
        this._isReleasedWorldly = isReleasedWorldly;
        this._releasePolandData = releasePolandData;
        this._releaseWorldDate = releaseWorldDate;
        this._trailerPosterLink = trailerPosterLink;
        this._trailerVideoLink = trailerVideoLink;
    }

    private _duration: number;

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    private _forumLink: string;

    get forumLink(): string {
        return this._forumLink;
    }

    set forumLink(value: string) {
        this._forumLink = value;
    }

    private _isReleasedInPoland: boolean;

    get isReleasedInPoland(): boolean {
        return this._isReleasedInPoland;
    }

    set isReleasedInPoland(value: boolean) {
        this._isReleasedInPoland = value;
    }

    private _isReleasedWorldly: boolean;

    get isReleasedWorldly(): boolean {
        return this._isReleasedWorldly;
    }

    set isReleasedWorldly(value: boolean) {
        this._isReleasedWorldly = value;
    }

    private _releasePolandData: string;

    get releasePolandData(): string {
        return this._releasePolandData;
    }

    set releasePolandData(value: string) {
        this._releasePolandData = value;
    }

    private _releaseWorldDate: string;

    get releaseWorldDate(): string {
        return this._releaseWorldDate;
    }

    set releaseWorldDate(value: string) {
        this._releaseWorldDate = value;
    }

    private _trailerPosterLink: string;

    get trailerPosterLink(): string {
        return this._trailerPosterLink;
    }

    set trailerPosterLink(value: string) {
        this._trailerPosterLink = value;
    }

    private _trailerVideoLink: string;

    get trailerVideoLink(): string {
        return this._trailerVideoLink;
    }

    set trailerVideoLink(value: string) {
        this._trailerVideoLink = value;
    }
}
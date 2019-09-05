import {Item, ItemType} from "../interfaces/Item";

export default class ItemModel implements Item {
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
        year: number
    ) {
        this._genres = genres;
        this._id = id;
        this._plot = plot;
        this._polishTitle = polishTitle;
        this._poster = poster;
        this._images = images;
        this._production = production;
        this._rate = rate;
        this._title = title;
        this._type = type;
        this._url = url;
        this._votes = votes;
        this._year = year;
    }

    private _genres: number[];

    get genres(): number[] {
        return this._genres;
    }

    set genres(value: number[]) {
        this._genres = value;
    }

    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _plot: string;

    get plot(): string {
        return this._plot;
    }

    set plot(value: string) {
        this._plot = value;
    }

    private _polishTitle: string;

    get polishTitle(): string {
        return this._polishTitle;
    }

    set polishTitle(value: string) {
        this._polishTitle = value;
    }

    private _poster: string;

    get poster(): string {
        return this._poster;
    }

    set poster(value: string) {
        this._poster = value;
    }

    private _production: string[];

    get production(): string[] {
        return this._production;
    }

    set production(value: string[]) {
        this._production = value;
    }

    private _rate: number;

    get rate(): number {
        return this._rate;
    }

    set rate(value: number) {
        this._rate = value;
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _type: ItemType;

    get type(): ItemType {
        return this._type;
    }

    set type(value: ItemType) {
        this._type = value;
    }

    private _url: string;

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    private _votes: number;

    get votes(): number {
        return this._votes;
    }

    set votes(value: number) {
        this._votes = value;
    }

    private _year: number;

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    private _images: string[];

    get images(): string[] {
        return this._images;
    }

    set images(value: string[]) {
        this._images = value;
    }
}
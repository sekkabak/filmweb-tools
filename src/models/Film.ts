
import {ItemType} from "../interfaces/Item";

export default class Film {
    private _duration!: number;

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    private _forumLink!: string;

    get forumLink(): string {
        return this._forumLink;
    }

    set forumLink(value: string) {
        this._forumLink = value;
    }

    private _genres!: number[];

    get genres(): number[] {
        return this._genres;
    }

    set genres(value: number[]) {
        this._genres = value;
    }

    private _id!: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _images!: string[];

    get images(): string[] {
        return this._images;
    }

    set images(value: string[]) {
        this._images = value;
    }

    private _isReleasedInPoland!: boolean;

    get isReleasedInPoland(): boolean {
        return this._isReleasedInPoland;
    }

    set isReleasedInPoland(value: boolean) {
        this._isReleasedInPoland = value;
    }

    private _isReleasedWorldly!: boolean;

    get isReleasedWorldly(): boolean {
        return this._isReleasedWorldly;
    }

    set isReleasedWorldly(value: boolean) {
        this._isReleasedWorldly = value;
    }

    private _plot!: string;

    get plot(): string {
        return this._plot;
    }

    set plot(value: string) {
        this._plot = value;
    }

    private _polishTitle!: string;

    get polishTitle(): string {
        return this._polishTitle;
    }

    set polishTitle(value: string) {
        this._polishTitle = value;
    }

    private _poster!: string;

    get poster(): string {
        return this._poster;
    }

    set poster(value: string) {
        this._poster = value;
    }

    private _production!: number[];

    get production(): number[] {
        return this._production;
    }

    set production(value: number[]) {
        this._production = value;
    }

    private _rate!: number;

    get rate(): number {
        return this._rate;
    }

    set rate(value: number) {
        this._rate = value;
    }

    private _releasePolandData!: string;

    get releasePolandData(): string {
        return this._releasePolandData;
    }

    set releasePolandData(value: string) {
        this._releasePolandData = value;
    }

    private _releaseWorldDate!: string;

    get releaseWorldDate(): string {
        return this._releaseWorldDate;
    }

    set releaseWorldDate(value: string) {
        this._releaseWorldDate = value;
    }

    private _title!: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _trailerPosterLink!: string;

    get trailerPosterLink(): string {
        return this._trailerPosterLink;
    }

    set trailerPosterLink(value: string) {
        this._trailerPosterLink = value;
    }

    private _trailerVideoLink!: string;

    get trailerVideoLink(): string {
        return this._trailerVideoLink;
    }

    set trailerVideoLink(value: string) {
        this._trailerVideoLink = value;
    }

    private _type!: ItemType;

    get type(): ItemType {
        return this._type;
    }

    set type(value: ItemType) {
        this._type = value;
    }

    private _url!: string;

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    private _votes!: number;

    get votes(): number {
        return this._votes;
    }

    set votes(value: number) {
        this._votes = value;
    }

    private _year!: number;

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }
}
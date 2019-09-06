import {ItemType} from "../interfaces/Item";

export class LiveSearchData {
    type!: string;
    id!: number;
    poster!: string;

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
    title!: string;
    polishTitle!: string;
    otherTitle!: string;
    year!: number;
    stars!: string[];
}

export class LiveSearchDataSeries extends LiveSearchDataFilm {

}

export class LiveSearchDataGame extends LiveSearchDataFilm {

}

export class LiveSearchDataPerson extends LiveSearchData {
    name!: string;
    professionIndex!: number;
    profession!: number;
}

export class LiveSearchDataTVshow extends LiveSearchData {

}

export class LivePreviewData {
    id!: number;
    polishTitle!: string;
    title!: string;
    type!: ItemType;
    year!: number;
    poster!: string;
    url!: string;
    images!: string[];
    trailer!: string;
    duration!: number;
    rate!: number;
    rateCount!: number;
    description!: string;
    genres!: number[];
    countries!: number[];
    directors!: string[];
    cast!: string[];
}
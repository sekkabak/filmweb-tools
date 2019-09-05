import {ItemType} from "./Item";

export interface LiveSearchData {
    id: number;
    type: string;
    title: string;
    polishTitle: string;
    poster: string;
    year: number;
    stars: string[];
}

export interface LivePreviewData {
    id: number;
    polishTitle: string;
    title: string;
    type: ItemType;
    year: number;
    images: string[];
    trailer: string;
    poster: string;
    duration: number;
    rate: number;
    rateCount: number;
    description: string;
    genres: number[];
    countries: number[];
    directors: string[];
    cast: string[];
}
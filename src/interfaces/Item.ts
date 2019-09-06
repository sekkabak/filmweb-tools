export enum ItemType {
    Film = 'f',
    Series = 's',
    Game = 'g',
    TVshow = 'tv',
    Cinema = 'c',
    Person = 'p',
    TVchannel = 't'
}

export enum ItemTypeUrl {
    'f' = 'film',
    's' = 'serial',
    'g' = 'gra',
    'tv' = 'tvshow',
    'c' = 'showtimes',
    'p' = 'person',
    't' = 'program-tv',
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
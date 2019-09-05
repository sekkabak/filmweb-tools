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
    Sound = 18
}

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
    // todo: ?? fix that
    'c' = 'film',
    'p' = 'film',
    't' = 'film',
}

export interface Item {
    genres: number[];
    id: number;
    plot: string;
    polishTitle: string;
    poster: string;
    images: string[];
    production: string[];
    rate: number;
    title: string;
    type: ItemType;
    url: string;
    votes: number;
    year: number;
}
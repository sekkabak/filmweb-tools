export default class ResponseLiveSearch {
    public type: string;
    public id: number;
    public img: string;
    public title: string;
    public title2: string;
    public title3: string;
    public year: number;
    public stars: string[];
    public link: string;

    constructor(...args: any[]) {
        [this.type, this.id, this.img, this.title, this.title2, this.title3, this.year, this.stars] = args;
        this.link = 'https://www.filmweb.pl/film/' + encodeURI(this.title2) + '-' + this.year + '-' + this.id;
    }
}
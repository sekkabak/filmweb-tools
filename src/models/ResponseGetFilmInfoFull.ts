export default class ResponseLiveSearch {
    public title: string;
    public title2: string;
    public rating: number;
    public rateCount: number;
    public genres: string[];
    public year: number;
    public minutes: number;
    public forumLink: string;
    public isReleasedInPoland: boolean;
    public isReleasedWorldly: boolean;
    public posterLink: string;
    public trailerPosterLink: string;
    public trailerVideoLink: string;
    public releaseWorldDate: string;
    public releasePolandData: string;
    public isSeries: boolean;
    public seasonCount: number;
    public episodesCount: number;
    public productionCountry: string;
    public description: string;

    constructor(...args: any[]) {
        [
            this.title,
            this.title2,
            this.rating,
            this.rateCount,
            this.genres,
            this.year,
            this.minutes,
            this.forumLink,
            this.isReleasedInPoland,
            this.isReleasedWorldly,
            this.posterLink,
            this.trailerPosterLink,
            this.trailerVideoLink,
            this.releaseWorldDate,
            this.releasePolandData,
            this.isSeries,
            this.seasonCount,
            this.episodesCount,
            this.productionCountry,
            this.description
        ] = args;
    }
}
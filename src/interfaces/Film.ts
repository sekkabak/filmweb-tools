import {Item} from "./Item";

export default interface Film extends Item{
    duration: number;
    forumLink: string;
    isReleasedInPoland: boolean;
    isReleasedWorldly: boolean;
    images: string[];
    trailerPosterLink: string;
    trailerVideoLink: string;
    releaseWorldDate: string;
    releasePolandData: string;
}
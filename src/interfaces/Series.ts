import Film from "./Film";

export default interface Series extends Film {
    seasonCount: number;
    episodesCount: number;
}
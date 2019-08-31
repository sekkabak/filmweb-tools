export default class LiveSearch {
    static URL: string;
    static IMAGE_URL: string;
    static search(query: string, callback: Function): Promise<void>;
}

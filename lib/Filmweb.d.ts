export default class Filmweb {
    static KEY: string;
    static API_SERVER: string;
    static APPID: string;
    static APP_VERSION: string;
    static IMAGE_URL: string;
    getFilmInfoFull(itemId: number, callback: Function): Promise<void>;
}

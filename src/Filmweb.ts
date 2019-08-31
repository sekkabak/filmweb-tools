import MD5 from 'crypto-js/md5';
import axios, {AxiosResponse} from "axios";
import ResponseGetFilmInfoFull from "./models/ResponseGetFilmInfoFull";

export default class Filmweb {
    static KEY = 'qjcGhW2JnvGT9dfCt3uT_jozR3s';
    static API_SERVER = 'https://ssl.filmweb.pl/api?';

    static APPID = "android";
    static APP_VERSION = "1.0";

    static IMAGE_URL = 'https://1.fwcdn.pl/po';

    public async getFilmInfoFull(itemId: number, callback: Function) {
        let method = "getFilmInfoFull [" + itemId + "]";
        let signature = method + "\\n" + Filmweb.APPID + Filmweb.KEY;
        signature = Filmweb.APP_VERSION + "," + MD5(signature);

        method += "\\n";

        let qs = "methods=" + encodeURI(method);
        qs += "&signature=" + encodeURI(signature);
        qs += "&version=" + encodeURI(Filmweb.APP_VERSION);
        qs += "&appId=" + encodeURI(Filmweb.APPID);

        const request: AxiosResponse = await axios.get(Filmweb.API_SERVER + qs);
        const [status, data] = request.data.split('\n');

        // @TODO: ogarnąć jak jest błąd

        const json = JSON.parse(data.replace(/t:.*/, ''));
        const result = new ResponseGetFilmInfoFull(...[
            json[0] == null ? "" : json[0], // title1
            json[1] == null ? "" : json[1], // title2
            json[2],                        // rating
            json[3],                        // rateCount
            json[4].split(','),     // genres
            json[5],                        // year
            json[6],                        // minutes
            json[8],                        // forumLink
            json[9],                        // isReleasedInPoland
            json[10],                       // isReleasedWorldly
            Filmweb.IMAGE_URL + json[11],                       // posterLink
            json[12][0] == undefined ? "": json[12][0], // trailerPosterLink
            json[12][1] == undefined ? "": json[12][1], // trailerVideoLink
            json[13],   // releaseWorldDate
            json[14],   // releasePolandData
            json[15],   // isSeries
            json[16],   // seasonCount
            json[17],   // episodesCount
            json[18],   // productionCountry
            json[19]    //description
        ]);

        callback(result);
    }
}
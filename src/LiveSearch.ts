import axios, {AxiosResponse} from "axios";
import ResponseLiveSearch from "./models/ResponseLiveSearch";

export default class LiveSearch {
    static URL = 'http://www.filmweb.pl/search/live?q=';
    static IMAGE_URL = 'https://1.fwcdn.pl/po';

    public static async search(query: string, callback: Function) {
        const request: AxiosResponse = await axios.get(LiveSearch.URL + query);
        let data: ResponseLiveSearch[] = request.data.split('\\a').map((record: String) => {
            const data: any[] = record.split('\\c');
            data[1] = parseInt(data[1]);
            data[2] = LiveSearch.IMAGE_URL + data[2];
            data[6] = parseInt(data[6]);
            data[7] = data[7].split(', ');
            return new ResponseLiveSearch(...data);
        });
        callback(data);
    }
}


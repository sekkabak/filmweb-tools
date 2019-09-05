import axios from "axios";
import {LiveSearchData} from "./interfaces/LiveData";
import Helper from "./Helper";

// @TODO: standaryzacja errorów dla api filmwebu
export default class LiveSearch {
    static URL = 'http://www.filmweb.pl/search/live?q=';
    static PREVIEW_URL = 'https://www.filmweb.pl/ajax/film-preview/';

    /**
     * Zwraca tablice elementów z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    public static search(query: string): Promise<LiveSearchData[]> {
        return new Promise<LiveSearchData[]>((resolve, reject) => {
            axios.get(LiveSearch.URL + encodeURI(query)).then(result => {
                try {
                    resolve(Helper.mapLiveSearchResponse(result.data));
                } catch (err) {
                    reject(new Error(err))
                }
            }).catch(err => {
                throw err;
            });
        });
    }

    public static itemPreview(id: number) {
        return new Promise(resolve => {
            axios.get(LiveSearch.PREVIEW_URL + id).then(content => {
                resolve(Helper.mapLiveItemPreview(content.data))
            }).catch(err => {
                throw err;
            })
        })
    }

    /**
     * Zwraca pierwszy element z wyszukiwarki filmwebu o podanej frazie
     * @param query
     */
    public static searchFirst(query: string): Promise<LiveSearchData> {
        return new Promise<LiveSearchData>(resolve => {
            LiveSearch.search(query).then(result => {
                resolve(result[0]);
            })
        });
    }
}


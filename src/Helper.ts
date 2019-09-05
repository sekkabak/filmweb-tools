import jsdom from 'jsdom';
import {ItemType, ItemTypeUrl} from "./interfaces/Item";
import {LivePreviewData, LiveSearchData} from "./interfaces/LiveData";

export default class Helper {
    /**
     * Tworzy odnośniki do wszystkich wersji postera
     */
    static getAllPosters(poster: string): string[] {
        let data = [];
        const split = poster.split('.');
        for (let i = 0, tmp = split; i < 7; i++) {
            tmp[1] = i.toString();
            data[i] = tmp.join('.');
        }
        return data;
    }

    /**
     *  Zwraca ściężkę url do filmwebu
     */
    static generateFilmwebUrl = (id: number, title: string, year: number, type: ItemType = ItemType.Film): string => 'https://www.filmweb.pl/' + ItemTypeUrl[type] + '/' + encodeURI(title) + '-' + year + '-' + id;

    /**
     * Mapuje zwrócone dane do obiektów
     */
    static mapLiveSearchResponse(response: string): LiveSearchData[] {
        const result: LiveSearchData[] = [];
        response.split('\\a').forEach((record: string) => {
            const tmp: LiveSearchData = {} as LiveSearchData;
            const data: any[] = record.split('\\c');
            tmp.type = data[0];
            tmp.id = parseInt(data[1]);
            tmp.poster = data[2];
            tmp.polishTitle = data[3];
            tmp.title = data[4];
            // pomijam tytuł w różnych językach
            tmp.year = parseInt(data[6]);

            tmp.stars = [];
            if (data[7] != "") tmp.stars = data[7].split(', ');

            result.push(tmp);
        });
        return result;
    }

    static mapLiveItemPreview(content: string) {
        const el = new jsdom.JSDOM(content).window.document;
        let polishTitle = this.domQuerySelectorTextContent(el, '.filmPreview__title') as string;
        let title = polishTitle;
        let poster = this.domQuerySelectorAttr(el, 'img.filmPoster__image', 'data-src').split('/po')[1];
        let type = Helper.getTypeByString(this.domQuerySelectorAttr(el, '.filmPreview', 'data-type'));
        let id = parseInt(this.domQuerySelectorAttr(el, '.filmPreview', 'data-id'));
        let year = parseInt(this.domQuerySelectorTextContent(el, '.filmPreview__year'));
        try {
            title = this.domQuerySelectorTextContent(el, '.filmPreview__originalTitle')
        } catch (e) {
            title = polishTitle;
        }

        return {
            id: id,
            polishTitle: polishTitle,
            title: title,
            type: type,
            // url: this.domQuerySelectorAttr(el, '.filmPreview__link', 'href'),
            url: Helper.generateFilmwebUrl(id, polishTitle, year, type),
            year: year,
            trailer: this.domQuerySelectorAttr(el, 'a.filmPoster__videoLink', 'href'),
            poster: poster,
            images: Helper.getAllPosters(poster),
            duration: parseInt(this.domQuerySelectorAttr(el, '.filmPreview__filmTime', 'data-duration')),
            rate: parseFloat(this.domQuerySelectorAttr(el, '.filmPreview__rateBox', 'data-rate')),
            rateCount: parseInt(this.domQuerySelectorAttr(el, '.filmPreview__rateBox', 'data-count')),
            description: this.domQuerySelectorTextContent(el, '.filmPreview__description p'),
            genres: this.domQuerySelectorAllAttr(el, '.filmPreview__info--genres ul li a', 'href').map(str => {
                return parseInt(str.split('=')[1])
            }),
            countries: this.domQuerySelectorAllAttr(el, '.filmPreview__info--countries ul li a', 'href').map(str => {
                return parseInt(str.split('=')[1])
            }),
            directors: this.domQuerySelectorAllAttr(el, '.filmPreview__info--directors ul li a', 'title'),
            cast: this.domQuerySelectorAllAttr(el, '.filmPreview__info--cast ul li a', 'title'),
        } as LivePreviewData;
    }

    public static getTypeByString(str: string): ItemType {
        // todo reszta
        if (['film', 'movie', 'f'].indexOf(str.toLowerCase()) != -1) return ItemType.Film;
        if (['serial', 'series', 's'].indexOf(str.toLowerCase()) != -1) return ItemType.Series;
        if (['gra', 'game', 'videogame', 'g'].indexOf(str.toLowerCase()) != -1) return ItemType.Game;
        if (['film', 'movie', 'f'].indexOf(str.toLowerCase()) != -1) return ItemType.Film;
        if (['film', 'movie', 'f'].indexOf(str.toLowerCase()) != -1) return ItemType.Film;
        return ItemType.Film;
    }

    private static domQuerySelectorAttr(dom: Document, str: string, attr: string): string {
        return (dom.querySelector(str) as Element).getAttribute(attr) as string;
    }

    private static domQuerySelectorAllAttr(dom: Document, str: string, attr: string): string[] {
        const data: string[] = [];
        (dom.querySelectorAll(str) as NodeListOf<Element>).forEach(elem => {
            data.push(elem.getAttribute(attr) as string);
        });
        return data;
    }

    private static domQuerySelectorTextContent(dom: Document, str: string): string {
        return (dom.querySelector(str) as Element).textContent as string;
    }
}
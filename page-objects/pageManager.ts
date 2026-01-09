import {Page} from "@playwright/test";
import {Header} from './header';
import {SearchResultsPage} from "./searchResultsPage";
import {LotDetailsPage} from "./lotDetailsPage";
import {CookieBar} from "./cookieBar";

export class PageManager {
    private readonly page: Page;
    private readonly cookieBar: CookieBar;
    private readonly header: Header;
    private readonly searchResults: SearchResultsPage;
    private readonly lotDetailsPage: LotDetailsPage;

    constructor(page: Page) {
        this.page = page;
        this.cookieBar = new CookieBar(page);
        this.header = new Header(page);
        this.searchResults = new SearchResultsPage(page);
        this.lotDetailsPage = new LotDetailsPage(page);
    }

    onCookieBar() {
        return this.cookieBar;
    }

    onHeader() {
        return this.header;
    }

    onSearchResults() {
        return this.searchResults;
    }

    onLotDetailsPage() {
        return this.lotDetailsPage;
    }
}
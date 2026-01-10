import {Page} from "@playwright/test";
import {HeaderBar} from './headerBar';
import {SearchResultsPage} from "./searchResultsPage";
import {LotDetailsPage} from "./lotDetailsPage";
import {CookieBar} from "./cookieBar";
import {StickyFiltersComponent} from "./stickyFiltersComponent";

export class PageManager {
    private readonly page: Page;
    private readonly cookieBar: CookieBar;
    private readonly headerBar: HeaderBar;
    private readonly searchResults: SearchResultsPage;
    private readonly lotDetailsPage: LotDetailsPage;
    private readonly stickyFilters: StickyFiltersComponent;

    constructor(page: Page) {
        this.page = page;
        this.cookieBar = new CookieBar(page);
        this.headerBar = new HeaderBar(page);
        this.searchResults = new SearchResultsPage(page);
        this.lotDetailsPage = new LotDetailsPage(page);
        this.stickyFilters = new StickyFiltersComponent(page);
    }

    onCookieBar() {
        return this.cookieBar;
    }

    onHeader() {
        return this.headerBar;
    }

    onSearchResults() {
        return this.searchResults;
    }

    onLotDetailsPage() {
        return this.lotDetailsPage;
    }

    onStickyFilters() {
        return this.stickyFilters;
    }
}
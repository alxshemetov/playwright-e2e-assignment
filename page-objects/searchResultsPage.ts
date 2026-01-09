import {type Locator, type Page, expect} from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;
    private readonly searchResults: Locator;
    private readonly searchResultTitle: Locator;
    private readonly lotCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchResults = page.getByTestId('SearchResults');
        this.searchResultTitle = page.locator('main').locator('h1');
        this.lotCard = page.getByTestId(/lot-card-container-/);
    }

    async verifyPageIsOpen() {
        await expect(this.page).toHaveURL(/\/s\?q=/);
        await expect(this.searchResults).toBeVisible();
    }

    get searchResultTitleLocator() {
        return this.searchResultTitle;
    }

    async clickOnLotCardByIndex(index: number) {
        await this.lotCard.nth(index).click();
    }
}
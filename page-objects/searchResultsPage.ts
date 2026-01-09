import {type Locator, type Page, expect} from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;
    private readonly searchResults: Locator;
    public readonly resultsTitle: Locator;
    private readonly lotCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchResults = page.getByTestId('SearchResults');
        this.resultsTitle = page.locator('main').locator('h1');
        this.lotCard = page.getByTestId(/lot-card-container-/);
    }

    async verifyPageIsOpen() {
        await expect(this.page).toHaveURL(/\/s\?q=/);
        await expect(this.searchResults).toBeVisible();
    }

    async clickOnLotCardByIndex(index: number) {
        await this.lotCard.nth(index).click();
    }
}
import {type Locator, type Page, expect} from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;
    private readonly searchResults: Locator;
    public readonly resultsTitle: Locator;
    public readonly lotCards: Locator;
    public readonly objectAmount: Locator;
    public readonly emptyResults: Locator
    public readonly resetFiltersBtn: Locator
    public readonly noMatchesMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchResults = page.getByTestId('SearchResults');
        this.resultsTitle = page.locator('main').locator('h1');
        this.lotCards = page.getByTestId(/lot-card-container-/);
        this.emptyResults = page.getByTestId('EmptyResultsWithSelectedFilters');
        this.resetFiltersBtn = page.getByRole('button', {name: 'Reset filters'});
        this.noMatchesMessage = page.getByText(/No matches for/);
    }

    async verifyPageIsOpen() {
        await expect(this.page).toHaveURL(/\/s\?q=/);
        await expect(this.searchResults).toBeVisible();
    }

    async clickOnLotCardByIndex(index: number) {
        await this.lotCards.nth(index).click();
    }
}
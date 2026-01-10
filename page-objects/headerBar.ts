import {type Locator, type Page} from '@playwright/test';

export class HeaderBar {
    private readonly page: Page;
    private readonly searchField: Locator;
    private readonly searchBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByTestId('search-field').filter({visible: true});
        this.searchBtn = page.getByTestId('text-field-prefix').getByRole('button');
    }

    async searchFor(query: string) {
        await this.searchField.fill(query);
        await this.searchBtn.click();
    }
}
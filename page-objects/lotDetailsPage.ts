import {type Locator, type Page, expect} from '@playwright/test';

export class LotDetailsPage {
    private readonly page: Page;
    private readonly openObjectDetailsPage: Locator;
    public readonly title: Locator;
    public readonly favoritesCount: Locator;
    public readonly currentBid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.openObjectDetailsPage = page.locator('[data-sentry-component="OpenObjectDetailsPage"]');
        this.title = page.locator('main').locator('h1');
        this.favoritesCount = page.locator('button[data-sentry-component="FavoriteButton"]').first().locator('span');
        this.currentBid = page.locator('[data-sentry-component="Amount"]').first();
    }

    async verifyPageIsOpen() {
        await expect(this.page).toHaveURL(/\/l\/\d+/);
        await expect(this.openObjectDetailsPage).toBeVisible();
    }

    async getTitle() {
        return this.title.textContent();
    }

    async getFavoritesCount() {
        return this.favoritesCount.textContent();
    }

    async getCurrentBid() {
        return this.currentBid.textContent();
    }
}
import {type Locator, type Page, expect} from '@playwright/test';

export class LotDetailsPage {
    private readonly page: Page;
    private readonly openObjectDetailsPage: Locator;
    private readonly lotTitle: Locator;
    private readonly lotFavoritesCount: Locator;
    private readonly lotCurrentBidAmount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.openObjectDetailsPage = page.locator('[data-sentry-component="OpenObjectDetailsPage"]');
        this.lotTitle = page.locator('main').locator('h1');
        this.lotFavoritesCount = page.locator('button[data-sentry-component="FavoriteButton"]').first().locator('span');
        this.lotCurrentBidAmount = page.locator('[data-sentry-component="Amount"]').first();
    }

    async verifyPageIsOpen() {
        await expect(this.page).toHaveURL(/\/l\/\d+/);
        await expect(this.openObjectDetailsPage).toBeVisible();
    }

    get lotTitleLocator(): Locator {
        return this.lotTitle;
    }

    async getLotTitle() {
        return this.lotTitle.innerText();
    }

    get lotFavoritesCountLocator(): Locator {
        return this.lotFavoritesCount;
    }

    async getLotFavoriteCount() {
        return this.lotFavoritesCount.innerText();
    }

    get lotCurrentBidAmountLocator(): Locator {
        return this.lotCurrentBidAmount;
    }

    async getLotCurrentBidAmount() {
        return this.lotCurrentBidAmount.innerText();
    }
}
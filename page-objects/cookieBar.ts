import {Locator, Page} from '@playwright/test';

export class CookieBar {
    private readonly page: Page;
    private readonly agreeBtn: Locator;
    private readonly manageBtn: Locator;
    private readonly declineBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.agreeBtn = page.locator('.gtm-cookie-bar-agree');
        this.manageBtn = page.locator('.gtm-cookie-bar-manage');
        this.declineBtn = page.locator('.gtm-cookie-bar-decline');
    }

    async acceptCookies() {
        await this.agreeBtn.click();
    }

    async manageCookies() {
        await this.manageBtn.click();
    }

    async declineCookies() {
        await this.declineBtn.click();
    }
}
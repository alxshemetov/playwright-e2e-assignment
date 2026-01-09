import { test as setup } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

const authFile = 'playwright/.auth/user.json';

setup('accept cookies', async ({ page }) => {
    const pm = new PageManager(page);

    await page.goto('/');
    await pm.onCookieBar().acceptCookies();

    await page.context().storageState({ path: authFile });
});
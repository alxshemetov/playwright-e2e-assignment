import {test as base} from '@playwright/test';
import {PageManager} from '../page-objects/pageManager';

type TestFixtures = {
    pm: PageManager;
};

export const test = base.extend<TestFixtures>({
    pm: async ({page}, use) => {
        await page.goto('/');
        const pm = new PageManager(page);
        await use(pm);
    },
});

export {expect} from '@playwright/test';
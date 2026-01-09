import {test as setup} from './test-base';

const authFile = 'playwright/.auth/user.json';

setup('accept cookies', async ({page, pm}) => {
    await pm.onCookieBar().acceptCookies();
    await page.context().storageState({path: authFile});
});
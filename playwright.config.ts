import {defineConfig, devices} from '@playwright/test';

export const authFile = 'playwright/.auth/user.json';
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'https://www.catawiki.com/',
        locale: 'en-GB',
        timezoneId: 'Europe/London',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'setup',
            testMatch: /global\.setup\.ts/,
            use: {...devices['Desktop Chrome'], channel: 'chromium'}
        },
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome'], channel: 'chromium', storageState: authFile}, dependencies: ['setup']
        },
    ],
});
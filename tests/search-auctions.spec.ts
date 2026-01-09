import {test, expect} from '@playwright/test';
import {PageManager} from "../page-objects/pageManager";

test.describe('Search lots functionality', () => {
    let pm: PageManager;

    test.beforeEach(async ({page}) => {
        pm = new PageManager(page);

        await page.goto('/');
    });

    test('Search train lot. Extract name, favorites, current bid', async () => {
        const keyword = 'train';

        await pm.onHeader().searchFor(keyword);

        await pm.onSearchResults().verifyPageIsOpen();
        await expect.soft(pm.onSearchResults().searchResultTitleLocator).toBeVisible();
        await expect.soft(pm.onSearchResults().searchResultTitleLocator).toHaveText(keyword);

        await pm.onSearchResults().clickOnLotCardByIndex(1);

        await pm.onLotDetailsPage().verifyPageIsOpen();
        await expect(pm.onLotDetailsPage().lotTitleLocator).toBeVisible();
        await expect(pm.onLotDetailsPage().lotFavoritesCountLocator).toBeVisible();
        await expect(pm.onLotDetailsPage().lotCurrentBidAmountLocator).toBeVisible();

        const lotTitle = await pm.onLotDetailsPage().getLotTitle();
        console.log(`Lot title: ${lotTitle}`);

        const lotFavoriteButtonCount = await pm.onLotDetailsPage().getLotFavoriteCount();
        console.log(`Lot favorites count: ${lotFavoriteButtonCount}`);

        const lotCurrentBidAmount = await pm.onLotDetailsPage().getLotCurrentBidAmount();
        console.log(`Current bid: ${lotCurrentBidAmount}`);

    });
});
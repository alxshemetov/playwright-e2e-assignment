import {test, expect} from './test-base';

test.describe('Search lots functionality', () => {

    test('Search train lot. Extract name, favorites, current bid', async ({pm}) => {
        const keyword = 'train';

        await pm.onHeader().searchFor(keyword);

        await pm.onSearchResults().verifyPageIsOpen();
        await expect(pm.onSearchResults().resultsTitle).toHaveText(keyword);

        await pm.onSearchResults().clickOnLotCardByIndex(1);

        await pm.onLotDetailsPage().verifyPageIsOpen();
        await expect(pm.onLotDetailsPage().title).toBeVisible();
        await expect(pm.onLotDetailsPage().favoritesCount).toBeVisible();
        await expect(pm.onLotDetailsPage().currentBid).toBeVisible();

        const title = await pm.onLotDetailsPage().getTitle();
        const favoriteCount = await pm.onLotDetailsPage().getFavoritesCount();
        const currentBid = await pm.onLotDetailsPage().getCurrentBid();

        console.log(`Title: ${title}`);
        console.log(`Favorites count: ${favoriteCount}`);
        console.log(`Current bid: ${currentBid}`);
    });
});
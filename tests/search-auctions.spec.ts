import {test, expect} from '../fixtures/test-base';
import {faker} from "@faker-js/faker";

test.describe('Search lots functionality', () => {

    test('Search for second lot then extract and verify name, favorites count, current bid', async ({pm}) => {
        const keyword = 'train';

        await pm.onHeader().searchFor(keyword);

        await pm.onSearchResults().verifyPageIsOpen();
        await expect(pm.onSearchResults().resultsTitle).toHaveText(keyword);

        await pm.onSearchResults().clickOnLotCardByIndex(1);

        await pm.onLotDetailsPage().verifyPageIsOpen();
        await expect(pm.onLotDetailsPage().lotTitle).toBeVisible();
        await expect(pm.onLotDetailsPage().favoritesCount).toBeVisible();
        await expect(pm.onLotDetailsPage().currentBid).toBeVisible();

        const lotTitle = await pm.onLotDetailsPage().getLotTitle();
        const favoritesCount = await pm.onLotDetailsPage().getFavoritesCount();
        const currentBid = await pm.onLotDetailsPage().getCurrentBid();

        console.log(`Lot title: ${lotTitle}`);
        console.log(`Favorites count: ${favoritesCount}`);
        console.log(`Current bid: ${currentBid}`);

        expect(lotTitle, 'Title should not be empty').toBeTruthy();
        expect(lotTitle?.toLowerCase(), 'Title should contain the search keyword').toContain(keyword.toLowerCase());
        expect(favoritesCount, 'Favorites count should not be empty').toBeTruthy();
        expect(currentBid, 'Current bid should not be empty').toBeTruthy();
    });

    test('Search for lots then filter for empty results', async ({pm}) => {
        const keyword = faker.commerce.product().toLowerCase();

        await pm.onHeader().searchFor(keyword);

        await pm.onSearchResults().verifyPageIsOpen();
        await expect(pm.onSearchResults().lotCards.first()).toBeVisible();

        await pm.onStickyFilters().openBudgetFilterDrawer();
        await pm.onStickyFilters().filterByBudget(9999999999);

        await expect(pm.onSearchResults().emptyResults).toBeVisible();
        await expect(pm.onSearchResults().emptyResults).toContainText('No objects found');
        await expect(pm.onSearchResults().resetFiltersBtn).toBeVisible();

        await pm.onSearchResults().resetFiltersBtn.click();

        await expect(pm.onSearchResults().lotCards.first()).toBeVisible();
    });

    test('Search for single-character then verify "No matches" message', async ({pm}) => {
        const keyword = faker.string.alpha(1);
        await pm.onHeader().searchFor(keyword);

        await expect(pm.onSearchResults().noMatchesMessage).toBeVisible();
        await expect(pm.onSearchResults().noMatchesMessage).toContainText(`No matches for “${keyword}”`);
    })
});
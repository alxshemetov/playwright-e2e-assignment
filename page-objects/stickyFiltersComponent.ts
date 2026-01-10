import {type Locator, type Page} from '@playwright/test';

export class StickyFiltersComponent {
    private readonly page: Page;
    private readonly allFiltersButton: Locator;
    private readonly budgetFilterDrawer: Locator;
    private readonly budgetFilterMin: Locator;
    private readonly budgetFilterMax: Locator;
    private readonly showObjectsButton: Locator;
    public readonly chipsRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.allFiltersButton = page.getByTestId('sticky-filters_all_filters_button');
        this.budgetFilterDrawer = page.getByTestId('filters-main-drawer-content').getByText('Budget')
        this.budgetFilterMin = page.getByPlaceholder('Min');
        this.budgetFilterMax = page.getByPlaceholder('Max');
        this.showObjectsButton = page.getByRole('button', {name: 'Show objects'})
        this.chipsRow = page.getByTestId('chips-row');
    }

    async openBudgetFilterDrawer() {
        await this.allFiltersButton.click();
        await this.budgetFilterDrawer.click();
    }

    async filterByBudget(min?: number, max?: number) {
        if (min !== undefined) {
            await this.budgetFilterMin.fill(min.toString());
        }
        if (max !== undefined) {
            await this.budgetFilterMax.fill(max.toString());
        }
        await this.showObjectsButton.click();
    }
}

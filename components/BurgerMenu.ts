import { Page, Locator } from '@playwright/test';

export class BugerMenu {
    private page: Page;
    private burgerMenuButton: Locator;
    private burgerMenuClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenuButton = page.locator('#react-burger-menu-btn');
        this.burgerMenuClose = page.locator('#react-burger-cross-btn');
    }

    async openAndCloseBugerMenu() {
        await this.burgerMenuButton.click();

        await this.page.waitForTimeout(3000);

        await this.burgerMenuClose.click();
    }
}
import { Page, Locator } from '@playwright/test';

export class ProductListPage {
    private page: Page;
    private addTotCartButton: Locator;
    cartBadgeIcon: Locator;
    private cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addTotCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadgeIcon = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addToCart() {
        await this.addTotCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}
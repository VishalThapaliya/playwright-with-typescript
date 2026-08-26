import { Page, Locator } from '@playwright/test';
import { BugerMenu } from "../components/BurgerMenu";

export class ProductListPage {
    page: Page;
    addTotCartButton: Locator;
    cartBadgeIcon: Locator;
    cartIcon: Locator;
    burgerMenu: BugerMenu;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = new BugerMenu(page);
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
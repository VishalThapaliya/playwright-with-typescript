import { Page, Locator } from "@playwright/test";
import { BugerMenu } from "../components/BurgerMenu";

export class CartPage {
    page: Page;
    cartProduct: Locator;
    burgerMenu: BugerMenu;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = new BugerMenu(page);
        this.cartProduct = page.locator('.inventory_item_name');
    }
}
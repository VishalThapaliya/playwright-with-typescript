import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePgae";
// import { BugerMenu } from "../components/BurgerMenu";

export class CartPage extends BasePage {
    page: Page;
    cartProduct: Locator;
    // burgerMenu: BugerMenu;

    constructor(page: Page) {
        super(page);
        this.page = page;
        // this.burgerMenu = new BugerMenu(page);
        this.cartProduct = page.locator('.inventory_item_name');
    }
}
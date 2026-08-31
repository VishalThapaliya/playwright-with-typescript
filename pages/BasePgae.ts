import { Page } from "@playwright/test";
import { BugerMenu } from "../components/BurgerMenu";

export class BasePage {
    page: Page;
    burgerMenu: BugerMenu;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = new BugerMenu(page);
    }

    async waitForPageLoad() {
        this.page.waitForLoadState('networkidle');
    }

}
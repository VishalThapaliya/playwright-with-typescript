import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductListPage } from "../pages/ProductListPage";
import { CartPage } from "../pages/CartPage";

type myFixture = {
    loginPage: LoginPage;
    productListPage: ProductListPage;
    cartPage: CartPage;
}

export const test = base.extend<myFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productListPage: async ({ page }, use) => {
        await use(new ProductListPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});

export { expect } from "@playwright/test";
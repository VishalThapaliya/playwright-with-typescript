import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductListPage } from "../pages/ProductListPage";
import { CartPage } from "../pages/CartPage";

test('should login successfully', async({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    
    await page.waitForTimeout(2000);
});

test('should add product to cart correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const cartPage = new CartPage(page);

    // login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);

    // product page
    await productListPage.addToCart();
    await page.waitForTimeout(2000);
    expect(await productListPage.cartBadgeIcon).toHaveText('1');
    await productListPage.goToCart();
    await page.waitForTimeout(2000);
    
    expect(await page).toHaveURL(/cart/);

    // cart page
    expect(await cartPage.cartProduct).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(2000);
});
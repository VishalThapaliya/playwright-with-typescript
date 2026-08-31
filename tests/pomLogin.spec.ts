import { DATA } from "../data/data";
import {test, expect} from "../fixtures/pageObjectFixture";

test('should login successfully', async({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory/);
});

test('should add product to cart correctly', async ({ page, loginPage, productListPage, cartPage }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory/);

    // product page
    await productListPage.addToCart();
    // await page.waitForTimeout(2000);
    
    await productListPage.burgerMenu.openAndCloseBugerMenu();
    await productListPage.waitForPageLoad();
    
    expect(await productListPage.cartBadgeIcon).toHaveText('1');
    await productListPage.goToCart();
    // await page.waitForTimeout(2000);

    await cartPage.waitForPageLoad();
    expect(await page).toHaveURL(/cart/);

    // cart page
    expect(await cartPage.cartProduct).toHaveText('Sauce Labs Backpack');
    await cartPage.burgerMenu.openAndCloseBugerMenu();

    await page.waitForTimeout(2000);
});
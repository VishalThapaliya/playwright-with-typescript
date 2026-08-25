import { DATA } from "../data/data";
import {test, expect} from "../fixtures/pageObjectFixture";

test('should login successfully', async({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login(DATA.user.username, DATA.user.password);
    await expect(page).toHaveURL(/inventory/);
    
    await page.waitForTimeout(2000);
});

test('should add product to cart correctly', async ({ page, loginPage, productListPage, cartPage }) => {
    // login
    await loginPage.open();
    await loginPage.login(DATA.user.username, DATA.user.password);
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
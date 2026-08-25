import { test } from "../fixtures/loginFixture";
import { expect } from "@playwright/test";

// Think of a custom fixture as a function that returns a value. You can use this value in your tests. 
// Fixtures can be used to set up and tear down resources needed for your tests, such as database connections, 
// mock servers, or any other setup logic.

test('should show product details page', async ({ loggedinPage }) => {
    await loggedinPage.locator('#item_4_title_link').click();
    await expect(loggedinPage).toHaveURL(/inventory-item/);
});

test('should add item to the cart', async ({ loggedinPage}) => {
    await loggedinPage.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
    await expect(loggedinPage.locator('.shopping_cart_badge')).toBeVisible();
    await loggedinPage.locator('.shopping_cart_link').click();
});
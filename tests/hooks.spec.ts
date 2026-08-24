import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com');

    // login
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login'}).click();
});

test.afterEach(async ({ page }) => {
    // logout
    await page.getByRole('button', { name: 'Open Menu'}).click();
    await page.getByRole('link', { name: 'Logout'}).click();
    await expect(page).toHaveURL(/www.saucedemo.com/);
    await expect(page).not.toHaveURL(/inventory/);
});

test('should validate inventory correctly', async ({ page }) => {
    // validate successful login by checking current URL
    await expect(page).toHaveURL(/inventory/);

    await page.waitForTimeout(5000);
});

test('should add product to cart correctly', async ({ page }) => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    expect(await page.locator('.shopping_cart_badge')).toBeVisible();

    await page.waitForTimeout(5000);
});
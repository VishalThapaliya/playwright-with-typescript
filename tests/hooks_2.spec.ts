import { test, expect, Page } from '@playwright/test';
import { DATA } from "../data/data";

// The goal of this file is to show how to user beforAll() and afterAll() hooks

let page:Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://saucedemo.com');

    // login
    await page.getByPlaceholder('Username').fill(DATA.user.username);
    await page.getByPlaceholder('Password').fill(DATA.user.password);
    await page.getByRole('button', { name: 'Login'}).click();
});

test.afterAll(async () => {
    // logout
    await page.getByRole('button', { name: 'Open Menu'}).click();
    await page.getByRole('link', { name: 'Logout'}).click();
    await expect(page).toHaveURL(/www.saucedemo.com/);
    await expect(page).not.toHaveURL(/inventory/);
});

test('should validate inventory correctly', async () => {
    // validate successful login by checking current URL
    await expect(page).toHaveURL(/inventory/);

    await page.waitForTimeout(5000);
});

test('should add product to cart correctly', async () => {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    expect(await page.locator('.shopping_cart_badge')).toBeVisible();

    await page.waitForTimeout(5000);
});
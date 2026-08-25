import { test, expect } from '@playwright/test';

test('should validate product detail page with storage state', async ({ page }) => {
    await page.goto('https://saucedemo.com/inventory.html');

    await expect(page.locator('.title')).toHaveText('Products');
    await page.locator('.inventory_item').first().click();

    await page.waitForTimeout(3000);
});

test('should validate cart page with storage state', async ({ page }) => {
    await page.goto('https://saucedemo.com/inventory.html');

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    
    await page.waitForTimeout(3000);
});
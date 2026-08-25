import { test as setup, expect } from '@playwright/test';
import { DATA } from "../data/data";

setup('authenticate', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.locator('#user-name').fill(DATA.user.username);
    await page.locator('#password').fill(DATA.user.password);
    await page.getByRole('button', { name: 'Login' }).click();
    
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({ path: 'auth/user.json' });
})
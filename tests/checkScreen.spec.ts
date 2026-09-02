import { test, expect } from '@playwright/test';

test('should check the screen', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // await expect(page).toHaveScreenshot('fullPage.png', { fullPage: true });

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    
    await expect(page).toHaveScreenshot('LoginPage.png', { maxDiffPixelRatio: 0.02 });
});
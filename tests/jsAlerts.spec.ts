import { test, expect } from '@playwright/test';

test.describe("JavaScript Alerts", () => {
    const baseURL = 'https://testmuai.com/selenium-playground/javascript-alert-box-demo/';

    test('should handle JS alert dialog correctly', async ({ page }) => {
        // redirect to the location
        await page.goto(baseURL);
        await page.waitForTimeout(3000);
    
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
    
        await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[1]/p/button').click();
    
        await page.waitForTimeout(5000);
    });

    test('should handle JS confirm dialogs correctly', async ({ page }) => {
        await page.goto(baseURL);
        await page.waitForTimeout(3000);

        page.on('dialog', async dialog => {
            // await dialog.accept(); // for OK
            await dialog.dismiss(); // for Cancel
        });

        await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button').click();
        // expect(page.getByText('You pressed OK!')).toBeVisible(); // for OK
         await expect(page.getByText('You pressed Cancel!')).toBeVisible(); // for Cancel

        await page.waitForTimeout(3000);
    });

    test('should handle JS prompt dialog correctly', async ({ page }) => {
        await page.goto(baseURL);
        await page.waitForTimeout(3000);

        page.on('dialog', async dialog => {
            await dialog.accept('Bishal');
        });

        await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[3]/p[1]/button').click();
        await expect(page.getByText("You have entered 'Bishal' !")).toBeVisible();

        await page.waitForTimeout(3000);
    });

});
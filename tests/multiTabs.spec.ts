import { expect, test } from "@playwright/test";

test('should open multiple tabs correctly', async ({ page, context }) => {
    await page.goto('https://bishal-thapaliya.netlify.app/portfolio');
    
    // browser context: to wait for the page promise
    const pagePromise = context.waitForEvent('page');

    await page.getByRole('link', { name: 'Random Gradient Generator' }).click();
    const newPage = await pagePromise;

    // verify new page title
    expect(newPage).toHaveTitle(await newPage.title());
    await page.waitForTimeout(2000);

    // go back to the previous (original) page
    await page.bringToFront();
    expect(page).toHaveTitle(await page.title());

    await page.waitForTimeout(2000);
});
import { test } from '@playwright/test';

test('should increase the browser window', async ({ page }) => {
    await page.goto('https://www.playwright.dev/');

    const currentPageWidth = await page.viewportSize()?.width;
    const currentPageHeight = await page.viewportSize()?.height;

    console.log(currentPageHeight, currentPageWidth);

    await page.setViewportSize({ width: 1920, height: 1055});
});
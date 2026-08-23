import { test } from "@playwright/test";

test('should test an iframe correctly', async ({ page }) => {
    await page.goto('https://jqueryui.com/autocomplete');

    const demoFrameLocator = await page.frameLocator('.demo-frame');
    await demoFrameLocator.locator('#tags').fill('java');

    await page.waitForTimeout(5000);
});
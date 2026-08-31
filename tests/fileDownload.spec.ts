import { expect, test } from "@playwright/test";

test('should download a file successfully', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/');
    await page.waitForLoadState('networkidle');

    const generateButton = await page.locator('#create');
    await expect(generateButton).not.toBeEnabled();
    await page.locator('#textbox').pressSequentially('This is file download test.');
    await expect(generateButton).toBeEnabled();
    await generateButton.click();

    const downloadPromis = page.waitForEvent('download');
    await page.locator('#link-to-download').click();

    const downloadedObject = await downloadPromis;
    const fileName = downloadedObject.suggestedFilename();
    const filePath = `downloads/${fileName}`;

    await downloadedObject.saveAs(filePath);
});
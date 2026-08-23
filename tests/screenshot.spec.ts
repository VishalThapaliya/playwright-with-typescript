import { test } from '@playwright/test';

test("should take a screenshot successfully", async ({ page }) => {
    await page.goto('https://testmuai.com/selenium-playground/');

    // I explicitly want a timeout to wait for 3 seconds to make the screen easily visible to the users.
    await page.waitForTimeout(3000);

    // viewport screenshot
    await page.screenshot({ path: 'screenshots/ViewPort.png'});

    // full page screenshot
    await page.screenshot({ path: 'screenshots/Fullpage.png', fullPage: true });

    // element screenshot
    const getStartedButtonLocator = await page.getByText('Get Started Free')
    await getStartedButtonLocator.screenshot({ path: ' screenshots/getStartedButton.png' });
});
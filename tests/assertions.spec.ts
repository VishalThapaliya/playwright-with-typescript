import { test, expect } from "@playwright/test";

test('assertion tests', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // ------------------------
    // ASSERTIONS
    // ------------------------

    // locaters
    const usernameField = await page.getByLabel('Username');
    const passwordField = await page.getByLabel('Password');
    const submitButton = await page.getByRole('button', { name: 'Submit' });

    // check if the element is visible on the page
    expect(usernameField).toBeVisible();
    expect(passwordField).toBeVisible();
    expect(submitButton).toBeVisible();

    // check if the element is not disabled
    expect(usernameField).toBeEnabled();
    expect(passwordField).toBeEnabled();
    expect(submitButton).toBeEnabled();

    // check if the element has the exact text
    const pageHeader = await page.locator('h2');
    expect(pageHeader).toHaveText('Test login');

    // check if the element contains the partial text
    expect(pageHeader).toContainText('login');
    
    // check if the input field has a specific value
    await usernameField.fill('student');
    expect(usernameField).toHaveValue('student');
    
    await passwordField.fill('Password123');
    // expect(usernameField).toHaveValue('******');

    await submitButton.click();

    // check if the URL matches a string
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');

    await page.waitForTimeout(2000);
});
import { test, expect } from "@playwright/test";

test.describe("Login Flow", () => {
    test("should perform login and logout successfully", async ({ page }) => {
        // Note : page.waitForTimeout() is intentionally used to make the test steps clearly visible to the users in the UI 

        const loginPageURL = 'https://practicetestautomation.com/practice-test-login/';
        const successFullyPageURL = 'https://practicetestautomation.com/logged-in-successfully/';

        // go to login page
        await page.goto(loginPageURL);

        // verify login page
        await expect(page).toHaveTitle('Test Login | Practice Test Automation');
        const pageHeading = page.getByText('Test login');
        await expect(pageHeading).toBeVisible();

        // login steps
        await page.getByLabel('username').fill('student');
        await page.getByLabel('password').fill('Password123');
        await page.getByRole('button', { name: 'Submit' }).click();

        // verify successfully loggedin
        await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
        await expect(page).toHaveURL(successFullyPageURL);
        await expect(page.getByText('Logged In Successfully')).toBeVisible();
        
        // logout steps
        await page.getByRole('link', { name: 'Log out' }).click();
                
        // verify loggedout successfully
        expect(page).toHaveURL(loginPageURL);
        await expect(pageHeading).toBeVisible();
        await expect(page.getByText('Logged In Successfully')).not.toBeVisible();
    });
});
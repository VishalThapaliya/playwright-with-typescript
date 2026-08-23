import { test, expect } from '@playwright/test';

test.describe('Locators', () => {
  test('should locate elements by role', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    // get element by role
    await page.getByRole('button', { name: 'Submit'}).click();
    await page.getByRole('link', { name: 'Blog' }).click();
  });

  test("should get elements by text", async ({ page }) => {
    await page.goto('http://www.testmuai.com/selenium-playground/input-form-demo/');

    // get element by it's visible text
    await page.getByText('Get Started Free').click();

  });

    test("should locate elements by placeholder", async ({ page }) => {
        await page.goto('https://www.saucedemo.com');

        // get element by placeholder
        await page.getByPlaceholder('Username').fill('test_user');
        await page.getByPlaceholder('Password').fill('test_password');
        await page.getByRole('button', { name: 'Login'}).click();
    });

    test("should locate element by title", async ({ page }) => {
        await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

        // get element by title attribute (use to show the text on mouse hover)
        await page.getByTitle('Hello, have a question? Let’s chat.').click();
    });

    test('should locate elements by alt text', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

        // get element by alt attribute
        const logoImage = page.getByAltText('logo image');
        await logoImage.isVisible();
        await logoImage.click();
    });

    test("should locate elements by label text", async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        // get element by label
        await page.getByLabel('Username').fill('student');
        await page.getByLabel('Password').fill('password123');
        await page.getByRole('button', { name: 'Submit' }).click();
    });

    test("should locate elements by particular testing attribute", async ({ page }) => {
        await page.goto('https://saucedemo.com');

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        // get element by data-test (testing attribute)
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
    });
});
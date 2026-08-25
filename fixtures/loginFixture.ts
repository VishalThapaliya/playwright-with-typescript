import { test as base, Page } from '@playwright/test';

type loginFixture = {
    loggedinPage: Page;
}

export const test = base.extend<loginFixture>({
    loggedinPage: async({ page }, use) => {
        await page.goto('https://saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        use(page);
    }
});
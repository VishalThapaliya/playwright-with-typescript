import { test as base, Page } from '@playwright/test';
import { DATA } from "../data/data";

type loginFixture = {
    loggedinPage: Page;
}

export const test = base.extend<loginFixture>({
    loggedinPage: async({ page }, use) => {
        await page.goto('https://saucedemo.com/');
        await page.locator('#user-name').fill(DATA.user.username);
        await page.locator('#password').fill(DATA.user.password);
        await page.getByRole('button', { name: 'Login' }).click();

        use(page);
    }
});
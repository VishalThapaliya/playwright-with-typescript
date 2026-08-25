import { test, expect } from '../fixtures/pageObjectFixture';
import { DATA } from "../data/data";

test('authenticateUser', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login(DATA.user.username, DATA.user.password);
    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({ path: 'auth/user.json' });
})
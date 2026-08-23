import { test, expect } from '@playwright/test';

test("should select options from dropdown list", async ({ page }) => {
    // redirect to the page
    await page.goto('https://testmuai.com/selenium-playground/input-form-demo/');

    // dropdown locator
    const countryLocator = page.locator('[name="country"]');

    // select by name
    // await countryLocator.selectOption({ label: 'France' });

    // select by index
    // await countryLocator.selectOption({ index: 157 });
    
    // select by value
    await countryLocator.selectOption({ value: 'AU' });

});
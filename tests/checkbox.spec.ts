import { expect, test } from '@playwright/test';

test('should test checkbox methods', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');

    // --------------------------------------------------
    // Single Checkbox
    // --------------------------------------------------
    const singleCheckbox = await page.getByRole('checkbox', { name: 'Click on check box' });

    // isEnabled()
    expect(await singleCheckbox.isEnabled()).toBe(true);
    
    // initially unchecked
    expect(await singleCheckbox.isChecked()).toBe(false);

    // check()
    await singleCheckbox.check();
    expect(await singleCheckbox.isChecked()).toBe(true);

    // uncheck()
    await singleCheckbox.uncheck();

    // isChecked() - should now be unchecked
    expect(await singleCheckbox.isChecked()).toBe(false);

    // --------------------------------------------------
    // Disabled Checkboxes
    // --------------------------------------------------
    const option1 = page.getByRole('checkbox', { name: 'Option 1' });
    const option2 = page.getByRole('checkbox', { name: 'Option 2' });
    const option3 = page.getByRole('checkbox', { name: 'Option 3' });
    const option4 = page.getByRole('checkbox', { name: 'Option 4' });

    // Verify the default state of checkboxes
    expect(await option1.nth(0).isEnabled()).toBe(true);
    expect(await option2.nth(0).isEnabled()).toBe(true);
    expect(await option3.nth(0).isEnabled()).toBe(false);
    expect(await option4.nth(0).isEnabled()).toBe(false);

    // check enabled checkboxes
    await option1.nth(0).check();
    expect(await option1.nth(0).isChecked()).toBe(true);
    
    await option2.nth(0).check();
    expect(await option2.nth(0).isChecked()).toBe(true);

     // --------------------------------------------------
    // Multiple Checkboxes
    // --------------------------------------------------

    // verify all checkboxes are enabled
    expect(await option1.nth(1).isEnabled()).toBe(true);
    expect(await option2.nth(1).isEnabled()).toBe(true);
    expect(await option3.nth(1).isEnabled()).toBe(true);
    expect(await option4.nth(1).isEnabled()).toBe(true);

    // check()
    await option1.nth(1).check();
    expect(await option1.nth(1).isChecked()).toBe(true);
    
    await option2.nth(1).check();
    expect(await option2.nth(1).isChecked()).toBe(true);

    // verify remaining checkboxes are still unchecked
    expect(await option3.nth(1).isChecked()).toBe(false);
    expect(await option4.nth(1).isChecked()).toBe(false);

    // uncheck option1
    await option1.nth(1).uncheck();
    expect(await option1.nth(1).isChecked()).toBe(false);

    await page.waitForTimeout(2000);
});

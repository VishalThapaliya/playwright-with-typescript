import { expect, test } from '@playwright/test';

test('should test the auto suggestions correctly', async ({ page }) => {
    await page.goto('https://www.youtube.com/@learningsharing6980');
    
    const searchText = 'playwright';

    // search input on Youtube.com
    await page.getByPlaceholder('Search').fill(searchText);

    // auto suggestion item container
    await page.waitForSelector('.ytSuggestionComponentLeftContainer');
    const allSuggestions = await page.locator('.ytSuggestionComponentLeftContainer');
    const count = await allSuggestions.count();

    for(let i = 0; i < count; i++) {
        const suggestion = await allSuggestions.nth(i).textContent();
        console.log("Suggestion: ", suggestion);
        expect(suggestion).toContain(searchText);
    }
});
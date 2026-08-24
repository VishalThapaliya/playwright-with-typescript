import { expect, test } from "@playwright/test";

test("should verify the table correctly", async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');
    await page.waitForTimeout(3000);
    
    // columns
    const allColumns = await page.locator('thead tr th');
    const columnCount = await allColumns.count();
    expect(columnCount).toBe(4);

    // rows
    const allRows = await page.locator('tbody tr');
    const rowsCount = await allRows.count();
    expect(rowsCount).toBe(10);

    await page.waitForTimeout(3000);
});
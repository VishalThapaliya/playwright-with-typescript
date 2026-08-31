import { expect, test } from "@playwright/test";

test.describe("Table Pagination", () => {
    test("@smoky should navigate through all pages using Next button", async ({ page }) => {
        await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');

        const nextButton = await page.locator('#example_next');

        while(!(await nextButton.evaluate(el => el.classList.contains("disabled")))){
            await nextButton.click();
        }

        await expect(nextButton).toHaveClass(/disabled/);
    });

    test("@regression should navigate through all pages without using Next button", async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

        const paginationLinks = await page.locator('#pagination li a');
        const pageCount = await paginationLinks.count();

        for(let i = 0; i < pageCount; i++) {
            const pageLink = paginationLinks.nth(i);
            const pageNumber = await pageLink.innerText();

            await pageLink.click();
            await expect(pageLink).toHaveClass(/active/);

            console.log(`Verified page ${pageNumber}`);
        }
    });
});
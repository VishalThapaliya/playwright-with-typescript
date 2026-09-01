import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test('should fill form data using faker library', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

    await page.locator('#name').fill(faker.person.fullName());
    await page.locator('#inputEmail4').fill(faker.internet.email());
    await page.locator('#inputPassword4').fill(faker.internet.password());
    await page.locator('#company').fill(faker.company.name());
    await page.locator('#websitename').fill(faker.internet.url());
    await page.locator('#inputCity').fill(faker.location.city());
    await page.locator('#inputAddress1').fill(faker.location.streetAddress());
    await page.locator('#inputAddress2').fill(faker.location.streetAddress());
    await page.locator('#inputState').fill(faker.location.zipCode());
    await page.locator('#inputZip').fill(faker.location.zipCode());
});
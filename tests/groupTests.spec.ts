import { test } from '@playwright/test';

// grouping test case using test.describe
// test.describe.only = execute only particular group of tests
// test.describe.skip = skip particular group of tests

test.describe.skip('Home Page Tests', () => {
    test('should check homepage title', async ({ page }) => {
        console.log("This is Homa Page Title Test.");
    });

    test('should check homepage heading', async ({ page }) => {
        console.log("This is Homa Page Heading Test.");
    });
});

test.describe('Login Tests', () => {
    test('should validate login', async ({ page }) => {
        console.log("This is Valid Login Test.");
    });

    test('should check invalid login', async ({ page }) => {
        console.log("This is Invalid Login Test.");
    });
});
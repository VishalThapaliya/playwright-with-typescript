import { test } from '@playwright/test';
import { ConfigReader } from "../utils/readConfigUtils";

test('ENV Test', async ({ page }) => {
    // console.log(process.env.URL);
    // console.log(process.env.USERNAME);
    // console.log(process.env.PASSWORD);
    console.log(ConfigReader.url);
    console.log(ConfigReader.username);
    console.log(ConfigReader.password);
});
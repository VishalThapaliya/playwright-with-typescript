import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async open() {
        await this.page.goto('https://saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

}
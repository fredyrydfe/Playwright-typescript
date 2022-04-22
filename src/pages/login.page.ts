import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameField = page.locator('//div[@id="login-page"]//input[@placeholder="Username"]');
        this.passwordField = page.locator('//div[@id="login-page"]//input[@placeholder="Password"]');
        this.loginButton = page.locator('text="Login"');
    }
}
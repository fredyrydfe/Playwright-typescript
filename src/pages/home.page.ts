import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly title: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.title = page.locator('//div[@id="welcome-page"]');
        this.loginButton = page.locator('text="Login"');
    }
}
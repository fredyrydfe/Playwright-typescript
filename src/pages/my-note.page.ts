import { Locator, Page } from '@playwright/test';

export class MyNotesPage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;

        this.title = page.locator('//div[@id="my-notes-page"]');
    }
}
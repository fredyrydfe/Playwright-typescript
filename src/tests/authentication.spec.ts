import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'; 
import { LoginPage } from '../pages/login.page'; 
import { MyNotesPage } from '../pages/my-note.page';

test.describe('Authentication', async () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    let myNotesPage: MyNotesPage;
    
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myNotesPage = new MyNotesPage(page);
        await page.goto('http://testapp.galenframework.com/');
        await page.waitForLoadState();
        await expect(homePage.title).toContainText('Welcome to our test page!');
    });

    test('Should login successfully by entering valid credentials', async () => {
        await homePage.loginButton.click();
        await loginPage.usernameField.fill('testuser@example.com');
        await loginPage.passwordField.fill('test123');
        await loginPage.loginButton.last().click();

        await expect(myNotesPage.title).toContainText('My Notes', {
            useInnerText: true
        });
    });
});


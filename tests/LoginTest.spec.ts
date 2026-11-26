//import {test,expect} from '@playwright/test';
import {test,expect} from '../Fixtures/Fixtures';
// import {LoginPage} from '../Pages/LoginPage';
test ('Verify Login Functionality', async({loginPage})=>{
 /*await page.getByText("c").click();
    await page.getByLabel("email", { name: "Email" }).fill("your-email@example.com");
    await page.getByLabel("Password:").fill("your-password");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page.getByText("Log out")).toBeVisible();*/
//loginPage.goto('/');
//const loginPage = new LoginPage(page);
await loginPage.navigatetoLoginPage();
await loginPage.enterlogincredentials("111Test@test.com","111Test@test");
await loginPage.verifyLogoutButtonisVisible();
}); 
   
import { Locator,Page,expect } from "@playwright/test";

class LoginPage{

    private readonly loginLink:Locator;
    private readonly emailInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;
    private readonly logoutButton:Locator;
constructor(page:Page)
{
    this.loginLink=page.getByText("Log in");
    this.emailInput=page.getByLabel("email");
    this.passwordInput=page.getByLabel("Password");
    this.loginButton=page.getByRole("button",{ name: "Log in" });
    this.logoutButton=page.getByText("Log out");
}
async navigatetoLoginPage(){
    await this.loginLink.click();
}
async enterlogincredentials(email:string,password:string)
{
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}
async verifyLogoutButtonisVisible()
{
    await expect(this.logoutButton).toBeVisible(); 
}
 }
export {LoginPage}

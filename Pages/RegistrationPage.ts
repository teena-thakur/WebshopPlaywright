import { Locator,Page,Expect } from "@playwright/test";
class RegistrationPage{
    private readonly gender:Locator;
    private readonly fName:Locator;
    private readonly lName:Locator;
    private readonly email:Locator;
    private readonly password:Locator;
    private readonly confirmPassword:Locator;
    private readonly registerButton:Locator;
constructor (page:Page)
{
    this.gender=page.getByLabel("Female",{ exact: true });
    this.fName=page.getByLabel("First name:");
    this.lName=page.getByLabel("Last name:");
    this.email=page.getByLabel("Email:");
    this.password = page.getByLabel("Password:", { exact: true });
    this.confirmPassword = page.getByLabel("Confirm password:", { exact: true });
 this.registerButton = page.getByRole("button", {
            name: "Register",
            exact: true});
 }
async navigatetoRegisterPage() {
    await this.gender.click();

}
async basicDetail(Fname:string,Lname:string,email:string)
    { 
        await this.fName.fill(Fname);
        await this.lName.fill(Lname);
        await this.email.fill(email);
    }
    async ConfirmPassword(Password:string,confirmPassword:string){
        await this.password.fill(Password);
        await this.confirmPassword.fill(confirmPassword);
    }
    async submitRegistration(){
         await this.registerButton.click();
    }

}
export{RegistrationPage}

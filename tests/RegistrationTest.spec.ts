import {test , expect} from '@playwright/test';
import {RegistrationPage} from '../Pages/RegistrationPage';
test ('verify registration functionality',async ({page})=>
{
    page.goto('/');
    const registrationPage=new RegistrationPage(page);
    await registrationPage.navigatetoRegisterPage();
    await registrationPage.basicDetail("Teena","Chhetri","teenathakur2307@gmailcom");
    await registrationPage.ConfirmPassword("Teena@123","Teena@123");
    await registrationPage.submitRegistration();

});
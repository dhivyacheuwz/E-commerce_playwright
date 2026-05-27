
const { expect } = require('@playwright/test');
const { LoginLocators } = require('../locators/LoginLocators');
class LoginPage {

    constructor(page) {

        this.page = page;

        this.sign = page.getByText(LoginLocators.sign);

        this.username = page.locator(LoginLocators.email1);

        this.password = page.locator(LoginLocators.password2);

        this.loginButton = page.getByRole('button', { name: LoginLocators.loginButton });

        this.Home = page.getByText(LoginLocators.Homelogo);

        this.RegisterUser = page.getByText(LoginLocators.registeruser);

        this.firstname = page.locator(LoginLocators.firstName);

        this.lastname = page.locator(LoginLocators.lastName);

        this.email = page.locator(LoginLocators.email);

        // Radio Button
        this.gender = page.locator(LoginLocators.genderDropdown);

        // Password
        this.regpass = page.locator(LoginLocators.password2);

        this.confirm = page.locator(LoginLocators.confirmPassword);

        // Register Button
        this.regis = page.locator(LoginLocators.registerButton);

    }

    async Register_User(name1, name2, email, password, confirmpass) {
        await expect(this.RegisterUser).toBeVisible();
        await expect(this.RegisterUser).toBeEnabled();
        await this.RegisterUser.click();
        await this.gender.check();
        await this.firstname.fill(name1);
        await this.lastname.fill(name2);
        await this.email.fill(email);
        await this.regpass.fill(password);
        await this.confirm.fill(confirmpass);
        await this.regis.click();





    }
    async loginApplication(email, pass) {
        await expect(this.sign).toBeVisible();
        await expect(this.sign).toBeEnabled();
        await this.sign.click();
        await this.username.fill(email);
        await this.password.fill(pass);
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginButton).toBeEnabled();
        await this.loginButton.click();
        await expect(this.Home).toBeVisible();

    }


}

module.exports = { LoginPage };
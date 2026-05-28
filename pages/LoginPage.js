
const { expect } = require('@playwright/test');
const { LoginLocators } = require('../locators/LoginLocators');
const SafeActions = require('../utils/SafeActions');
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

        await SafeActions.safeClick(this.RegisterUser, 'REGISTERUSER');
        await this.gender.check();
        await SafeActions.safeFill(this.firstname, name1, 'firstname');
        await SafeActions.safeFill(this.lastname, name2, 'Lastname');
        await SafeActions.safeFill(this.email, email, 'Email');
        await SafeActions.safeFill(this.regpass, password, 'Password');
        await SafeActions.safeFill(this.confirm, confirmpass, 'Confirm password');
        await SafeActions.safeClick(this.regis, 'Register Button');


    }
    async loginApplication(email, pass) {

        await SafeActions.safeClick(this.sign, 'Sign in');
        await SafeActions.safeFill(this.username, email, 'Email');
        await SafeActions.safeFill(this.password, pass, 'Password');
        await SafeActions.safeClick(this.loginButton, 'LoginButton');


    }


}

module.exports = { LoginPage };
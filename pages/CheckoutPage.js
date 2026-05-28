const { expect } = require('@playwright/test');
const { checkoutLocators } = require('../locators/CheckoutPageLocators.js');
const { loginTestData } = require('../testdata/LoginTestData.js');
const SafeActions = require('../utils/SafeActions');

class Checkout {
    constructor(page) {
        this.page = page;
        this.company = page.locator(checkoutLocators.company);
        this.country = page.locator(checkoutLocators.country);
        this.state = page.locator(checkoutLocators.State);
        this.city = page.locator(checkoutLocators.city);
        this.add1 = page.locator(checkoutLocators.Address1);
        this.add2 = page.locator(checkoutLocators.Address2);
        this.zip = page.locator(checkoutLocators.Zip);
        this.phone = page.locator(checkoutLocators.Phone);
        this.continue_btn = page.getByRole('button', { 'name': checkoutLocators.Cont });
        this.shippingcont = page.getByRole('button', { 'name': checkoutLocators.ContinueSHip });
        this.ship_opt = page.locator(checkoutLocators.Ship_option);
        this.contshipmethod = page.getByRole('button', { 'name': checkoutLocators.contshipmethod });
        this.pay = page.locator(checkoutLocators.pay);
        this.Paycont = page.getByRole('button', { 'name': checkoutLocators.Paycont });
        this.Payinfo = page.getByRole('button', { 'name': checkoutLocators.Payinfo });
        this.confirm = page.getByRole('button', { 'name': checkoutLocators.confirm });
        this.shipavail = page.locator(checkoutLocators.ShipAddAva);


    }

    async checkout_fromcart(company, country, state, city, address1, address2, zip, Phone, Shipadd) {
        await this.shipavail.selectOption(Shipadd);
        await SafeActions.safeFill(this.company,company,'company name');
        await this.country.selectOption(country);
        await this.state.selectOption(state);
        await SafeActions.safeFill(this.city,city,'city');
        await SafeActions.safeFill(this.add1,address1,'Address1');
        await SafeActions.safeFill(this.add2,address2,'Address2');
        await SafeActions.safeFill(this.zip,String(zip),'Zip/Postal code');
        await SafeActions.safeFill(this.phone,String(Phone),'Phone number');
        await SafeActions.safeClick(this.continue_btn,'Continue');
        await SafeActions.safeClick(this.shippingcont,'Continue');
        await SafeActions.safeClick(this.ship_opt,'COD');
        await SafeActions.safeClick( this.contshipmethod,'Continue');
        await SafeActions.safeClick( this.pay,'Pay');
        await SafeActions.safeClick(this.Paycont,'contiune');
        await SafeActions.safeClick(this.Payinfo,'info');
        await SafeActions.safeClick(this.confirm,'confirm Button');
    }


}

module.exports = { Checkout };
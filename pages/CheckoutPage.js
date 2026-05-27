const { expect } = require('@playwright/test');
const { checkoutLocators } = require('../locators/CheckoutPageLocators.js');
const { loginTestData } = require('../testdata/LoginTestData.js');

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
        await this.company.fill(company);
        await this.country.selectOption(country);
        await this.state.selectOption(state);
        await this.city.fill(city);
        await this.add1.fill(address1);
        await this.add2.fill(address2);
        await this.zip.fill(String(zip));
        await this.phone.fill(String(Phone));

        await this.continue_btn.click();
        await expect(this.shippingcont).toBeEnabled();
        await this.shippingcont.click();
        await expect(this.ship_opt).toBeEnabled();
        await this.ship_opt.click();
        await this.contshipmethod.click();
        await this.pay.click();
        await expect(this.Paycont).toBeEnabled();
        await this.Paycont.click();
        await expect(this.Payinfo).toBeEnabled();
        await this.Payinfo.click();
        await expect(this.confirm).toBeVisible();
        await expect(this.confirm).toBeEnabled();
        await this.confirm.click();
    }


}

module.exports = { Checkout };
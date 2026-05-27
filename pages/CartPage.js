const { expect } = require('@playwright/test');
const { Cartlocators } = require('../locators/Cartlocators')

class CartPage {

    constructor(page) {
        this.page = page;
        this.shopcart = page.getByRole('link', { name: Cartlocators.shoppingcart, exact: true });
        this.checkout = page.getByRole('button', { name: Cartlocators.checkout, exact: true });
        this.terms = page.locator(Cartlocators.terms);

    }

    async Cart() {
        await this.shopcart.click();
        await this.terms.check();
        await this.checkout.click();
    }
}
module.exports = { CartPage };
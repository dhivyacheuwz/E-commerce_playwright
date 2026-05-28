const { expect } = require('@playwright/test');
const { Cartlocators } = require('../locators/Cartlocators')
const SafeActions = require('../utils/SafeActions');

class CartPage {

    constructor(page) {
        this.page = page;
        this.shopcart = page.getByRole('link', { name: Cartlocators.shoppingcart, exact: true });
        this.checkout = page.getByRole('button', { name: Cartlocators.checkout, exact: true });
        this.terms = page.locator(Cartlocators.terms);

    }

    async Cart() {
        await SafeActions.safeClick(this.shopcart,'shoping cart');
        await this.terms.check();
        await SafeActions.safeClick(this.checkout,'Checkout button');
    }
}
module.exports = { CartPage };
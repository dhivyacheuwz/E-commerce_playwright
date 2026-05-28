const { expect } = require('@playwright/test');
const { homepageLocators } = require('../locators/HomePageLocators');
const SafeActions = require('../utils/SafeActions');
class HomePage {
    constructor(page) {
        this.page = page;
        this.search = page.locator(homepageLocators.Search);
        this.sbutton = page.getByRole('button', { name: homepageLocators.sbutton });
        this.a2cart = page.getByRole('button', { name: homepageLocators.addtocart });
        this.cartqty = page.locator(homepageLocators.cartqty);


    }

    async addtocart(search) {

        await SafeActions.safeFill(this.search,search,'Search box');
        await SafeActions.safeClick(this.sbutton,'Search button');
        await SafeActions.safeClick(this.a2cart,'Add to cart button');
        await expect(this.cartqty).toHaveCount(1);

    }

}
module.exports = { HomePage }

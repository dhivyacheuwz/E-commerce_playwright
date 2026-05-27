const { expect } = require('@playwright/test');
const { homepageLocators } = require('../locators/HomePageLocators');

class HomePage {
    constructor(page) {
        this.page = page;
        this.search = page.locator(homepageLocators.Search);
        this.sbutton = page.getByRole('button', { name: homepageLocators.sbutton });
        this.a2cart = page.getByRole('button', { name: homepageLocators.addtocart });
        this.cartqty = page.locator(homepageLocators.cartqty);


    }

    async addtocart(search) {

        await this.search.fill(search);
        await expect(this.sbutton).toBeVisible();
        await expect(this.sbutton).toBeEnabled();
        await this.sbutton.click();
        await this.a2cart.click();
        await expect(this.cartqty).toHaveCount(1);

    }

}
module.exports = { HomePage }

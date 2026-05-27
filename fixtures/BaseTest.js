const base = require('@playwright/test');
const { qaConfig } = require('../config/Config');

exports.test = base.test.extend({

    mypage: async ({ page }, use) => {

        // Launch URL
        await page.goto(qaConfig.baseURL);
       

        console.log('Site opened');

        // Pass page to test
        await use(page);

        console.log('Test finished');

    }

});
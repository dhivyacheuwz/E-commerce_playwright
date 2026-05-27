
const { test } = require('../fixtures/BaseTest');


test.afterEach(async ({ page }, testInfo) => {

    // Check if test failed
    if (testInfo.status !== testInfo.expectedStatus) {

        // Generate unique timestamp
        const timeStamp = Date.now();

        // Capture screenshot
        await page.screenshot({

            // Save screenshot inside screenshots folder
            path:
                `screenshots/${testInfo.title}-${timeStamp}.png`,

            // Capture full page
            fullPage: true

        });

        console.log('Screenshot captured');

    }

});


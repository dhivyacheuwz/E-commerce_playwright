const logger = require('./logger');
const { expect } = require('@playwright/test');

class SafeActions {

    static async safeClick(locator, locatorName = 'Element') {

        try {

            await locator.waitFor({
                state: 'visible',
                timeout: 10000
            });

            await expect(locator).toBeEnabled({
                timeout: 10000
            });

            await locator.scrollIntoViewIfNeeded();

            await locator.click();

            logger.info(`Clicked on ${locatorName}`);

        } catch (error) {

            logger.error(`Failed to click on ${locatorName}`);
            logger.error(error.message);

            throw error;
        }
    }

    static async safeFill(locator, value, locatorName = 'Element') {

        try {

            await locator.waitFor({
                state: 'visible',
                timeout: 10000
            }); 

            await locator.fill(String(value));

            logger.info(`Entered value into ${locatorName}`);

        } catch (error) {

            logger.error(`Failed to fill ${locatorName}`);
            logger.error(error.message);

            throw error;
        }
    }

    static async safeType(locator, value, locatorName = 'Element') {

        try {

            await locator.waitFor({
                state: 'visible'
            });

            await locator.clear();

            await locator.type(String(value), {
                delay: 100
            });

            logger.info(`Typed into ${locatorName}`);

        } catch (error) {

            logger.error(`Failed typing into ${locatorName}`);
            throw error;
        }
    }

}

module.exports = SafeActions;
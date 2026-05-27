
const { test, expect } = require('../fixtures/baseTest');

const { HomePage } = require('../pages/HomePage');
const { loginTestData } = require('../testdata/LoginTestData');
require('../hooks/testhook');
const { ExcelUtils } = require('../utils/excelutils');

const testData = ExcelUtils.getTestData(

    './testdata/LoginData.xlsx',

    'Sheet1'

);

test('home', async ({ mypage }) => {

    const homePage = new HomePage(mypage);

    await homePage.addtocart(
        testData[0].Product
    );
});
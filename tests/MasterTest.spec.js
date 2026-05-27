const { test, expect } = require('../fixtures/baseTest');
const { LoginPage } = require('../pages/LoginPage');
const { loginTestData } = require('../testdata/LoginTestData');
require('../hooks/testhook');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');
const { Checkout } = require('../pages/CheckoutPage')
const { ExcelUtils } =require('../utils/excelutils');


const testData = ExcelUtils.getTestData(

    './testdata/LoginData.xlsx',

    'Sheet1'

);

test('Complete E2E Flow', async ({ mypage }) => {

    // Create page objects
    
    const loginPage = new LoginPage(mypage);


    const homePage = new HomePage(mypage);

    const cartpage = new CartPage(mypage);

    const checkout = new Checkout(mypage);

    // Launch application
    await loginPage.loginApplication(
        testData[0].name,
        testData[0].password1
    );


    // Add to cart flow
    await homePage.addtocart(
        testData[0].Product
    );

    await cartpage.Cart();

    await checkout.checkout_fromcart(loginTestData.company,
        testData[0].country,
        testData[0].state,
        testData[0].city,
        testData[0].address1,
        testData[0].address2,
        testData[0].zip,
        testData[0].Phone,
        testData[0].Shipadd,

    );
});

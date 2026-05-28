const { test, expect } = require('../fixtures/baseTest');
const { LoginPage } = require('../pages/LoginPage');
const { loginTestData } = require('../testdata/LoginTestData');
require('../hooks/testhook');
const { ExcelUtils } =require('../utils/ExcelUtils');

const testData = ExcelUtils.getTestData(

    './testdata/LoginData.xlsx',

    'Sheet1'

);



test('Login Test', async ({ mypage }) => {



    const loginPage = new LoginPage(mypage);

    await test.step(
        'Login to Application',
        async () => {
    await loginPage.loginApplication(
        testData[0].name,
        testData[0].password1
    );

            }
        );

    }
);
test('Register Test', async ({ mypage }) => {

    const loginPage =
    new LoginPage(mypage);

    await test.step(
        'Register User',

        async () => {

            await loginPage.Register_User(
                testData[0].firstName,
                testData[0].lastName,
                testData[0].email,
                testData[0].password,
                testData[0].confirmPass
            );

        }
    );

});
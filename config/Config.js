const { loginTestData } = require('../testdata/LoginTestData');
exports.qaConfig = {
    // Application URL
    baseURL:
        'https://demowebshop.tricentis.com/',

    // Login credentials
    username: loginTestData.name,
    password: loginTestData.password1,

    // Browser
    browser: 'chromium',

    // Timeout
    timeout: 30000
}
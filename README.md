# 🚀 Playwright E2E Automation Framework (JavaScript)

## 📌 Overview

This is a **scalable End-to-End Test Automation Framework** built using **Playwright with JavaScript**, following the **Page Object Model (POM)** design pattern.
It is designed for real-world QA/SDET usage with maintainable structure, reusable components, and CI-friendly execution.

---
## 🏗️ Key Features

- 🎭 Playwright Test Runner
- 🧱 Page Object Model (POM)
- 🔄 Data-Driven Testing
- ⚙️ Fixtures & Hooks
- 📊 HTML Test Reports
-   Allure reports
-   Logger Utis
- 🔁 Retry Mechanism for Flaky Tests
- 🌐 Cross-Browser Testing (Chromium, Firefox, WebKit)
- 🚀 CI/CD Ready (Jenkins/GitHub Actions)
  
---
## 📂 Project Structure
```
playwright-framework/
│
├── tests/                          # All test specifications
│   ├── login.spec.js
│   ├── checkout.spec.js   
│
├── pages/                          # Page Object Model (POM) classes
│   ├── LoginPage.js
│   ├── HomePage.js
│   └── CheckoutPage.js
│
├── fixtures/                       # Reusable test setup & custom fixtures
│   └── baseTest.js
│
├── utils/                          # Utility functions & helpers
│   ├── ExcelUtils
│   ├──  helpers.js
│
├── locators/                       # Centralized element locators
│   └── loginLocators.js
│
├── config/                         # Environment configuration files
│   └── env.js
│
├── test-data/                      # External test data (JSON, CSV, etc.)
│   └── users.json
    ├── Data.excel
│
├── reports/                        # Generated test reports (HTML/Allure, etc.)
│
├── screenshots/                    # Screenshots on test failures
│
├── playwright.config.js            # Playwright configuration file
├── package.json                    # Dependencies & scripts
└── README.md                       # Project documentation
```
-----------------
## ⚙️ Installation

1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2️⃣ Install Dependencies
```bash
npm install
```
3️⃣ Install Playwright Browsers
```
npx playwright install
```
------------------
▶️ Running Tests
```bash
*Run all tests
*npx playwright test
*Run tests in headed mode
*npx playwright test --headed
*Run specific file
*npx playwright test tests/login.spec.js
*Run with UI mode
*npx playwright test --ui
```
------------------
📊 Test Reports
```
Generate HTML report:npx playwright show-report
```
--------------------
🧪 Example Test Flow
```
Login → Search Product → Add to Cart → Checkout → Logout
```
-----------------
📌 Best Practices Followed
```
*POM Design Pattern
*Reusable utilities
*Proper folder structure
*Clean test separation
*Stable locators strategy
```
--------------
🚀 Future Enhancements
```
1. Cucumber BDD Integration
2. API Testing Layer 
3. Docker Execution
```
---------------
## 👩‍💻 Author
**Dhivya Bharathi.M**

QA Automation Engineer | Selenium |Playwright| API Testing
-----------------
## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

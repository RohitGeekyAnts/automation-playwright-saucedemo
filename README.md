# Playwright Sauce Demo Automation

Automated end-to-end testing of the Sauce Demo e-commerce application using **Playwright** and **TypeScript**.

This project demonstrates UI automation testing, validation of user workflows, and Playwright fundamentals including locators, assertions, test execution, and reporting.

## 🚀 Application Under Test

https://www.saucedemo.com/

Sauce Demo is a sample e-commerce application widely used for automation testing practice.

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub

---

## 📂 Project Structure

```text
playwright-saucedemo/
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ✅ Automated Test Scenarios

### Login Functionality

- Verify successful login with valid credentials
- Verify error message for invalid credentials

### Product Functionality

- Verify inventory page loads successfully
- Verify products are displayed after login

### Cart Functionality

- Add product to cart
- Remove product from cart
- Verify cart updates correctly

### Checkout Functionality

- Complete end-to-end checkout process
- Verify order confirmation message

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd playwright-saucedemo
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open Playwright UI Mode:

```bash
npx playwright test --ui
```

---

## 📊 Test Reports

Generate and view the Playwright HTML report:

```bash
npx playwright show-report
```

---

## 📌 Key Learnings

- Playwright test structure
- Locators and selectors
- Assertions
- Browser automation
- Test execution and reporting
- End-to-end workflow validation

---

## 🔮 Future Enhancements

- Implement Page Object Model (POM)
- Data-driven testing
- Cross-browser execution
- GitHub Actions CI/CD integration
- Screenshot and video capture on failure

---

## 👨‍💻 Author

**Rohit Kumar**

QA Engineer with experience in Manual Testing, Frontend Development, React, React Native, Next.js, and Test Automation.

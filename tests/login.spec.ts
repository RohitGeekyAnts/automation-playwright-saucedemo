import { test, expect } from "@playwright/test";
import { users } from "../data/users";
import { LoginPage } from "../pages/login.page";

// BASIC APPROACH
// test("Successful Login", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");

//   await page.locator("#user-name").fill("error_user");
//   await page.locator("#password").fill("secret_sauce");

//   await page.locator("#login-button").click();

//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// });
// test("Successful sign in", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");

//   await page.locator("#user-name").fill("error_user");
//   await page.locator("#password").fill("secret_sauce");

//   await page.locator("#login-button").click();

//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
// });

// test("Invalid Login", async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/");

//   await page.locator("#user-name").fill("wrong_user");
//   await page.locator("#password").fill("wrong_password");

//   await page.locator("#login-button").click();

//   await expect(page.locator('[data-test="error"]')).toBeVisible();
// });

//GROUPED APPROACH
// test.describe("Authentication Flows", () => {
//   test("should successfully log in with valid credentials", async ({
//     page,
//   }) => {
//     // 1. Arrange: Navigate to the target application homepage
//     await page.goto("https://www.saucedemo.com/");

//     // 2. Act: Interact with the UI elements exactly like a human user
//     await page.locator('[data-test="username"]').fill("standard_user");
//     await page.locator('[data-test="password"]').fill("secret_sauce");
//     await page.locator('[data-test="login-button"]').click();

//     // 3. Assert: Verify the End-to-End result (Successful routing & state change)
//     // Validate that the URL changed to the internal inventory dashboard
//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

//     // Validate that an inner element unique to logged-in users is visible
//     const productsHeader = page.locator(".title");
//     await expect(productsHeader).toBeVisible();
//     await expect(productsHeader).toHaveText("Products");
//   });

//   test("should display an error message with invalid credentials", async ({
//     page,
//   }) => {
//     await page.goto("https://www.saucedemo.com/");

//     // Attempt login with incorrect details
//     await page.locator('[data-test="username"]').fill("wrong_user");
//     await page.locator('[data-test="password"]').fill("wrong_password");
//     await page.locator('[data-test="login-button"]').click();

//     // Assert: The backend rejected it, and frontend displayed the correct error container
//     const errorContainer = page.locator('[data-test="error"]');
//     await expect(errorContainer).toBeVisible();
//     await expect(errorContainer).toContainText(
//       "Username and password do not match any user in this service",
//     );
//   });
// });

//SCRIPT CREATED WITH RECORDING USING CODEGEN AND ADDED EXPECTATIONS
// test("test", async ({ page }) => {
//   await page.goto("/");
//   await page.locator('[data-test="username"]').fill("problem_user");
//   await page.locator('[data-test="password"]').fill("secret_sauce");
//   await page.locator('[data-test="login-button"]').click();

//   await expect(page).toHaveURL(/inventory/);

//   await expect(page.locator('[data-test="title"]')).toHaveText("Products");
// });

//SPEC FILE WITH POM

test("Successful Login with Valid creds", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.problem.username, users.problem.password);
  await loginPage.expectInventoryPage();
});

test("should show error for invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.expectLoginError();
});

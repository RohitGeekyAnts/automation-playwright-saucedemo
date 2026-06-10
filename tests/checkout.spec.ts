import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test("User can complete checkout successfully", async ({ page }) => {
  // Add product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Checkout
  await page.locator('[data-test="checkout"]').click();

  // Fill information
  await page.locator('[data-test="firstName"]').fill("Rohit");
  await page.locator('[data-test="lastName"]').fill("Kumar");
  await page.locator('[data-test="postalCode"]').fill("560001");

  await page.locator('[data-test="continue"]').click();

  // Verify overview page
  await expect(page).toHaveURL(/checkout-step-two/);

  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(
    "Sauce Labs Backpack",
  );

  // Finish checkout
  await page.locator('[data-test="finish"]').click();

  // Verify order completion
  await expect(page).toHaveURL(/checkout-complete/);

  await expect(page.locator('[data-test="complete-header"]')).toHaveText(
    "Thank you for your order!",
  );
});

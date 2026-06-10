import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

//ADD PRODUCT TO CART
test("User can add a product to cart", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );
});

//REMOVE PRODUCT FROM CART
test("User can remove a product from cart", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(
    0,
  );
});

//VIEW PRODUCT IN CART
test("User can view items in cart", async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL(/cart/);

  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(
    "Sauce Labs Backpack",
  );
});

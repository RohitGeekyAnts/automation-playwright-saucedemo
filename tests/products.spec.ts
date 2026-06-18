import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");

  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});

//PRODUCTS DISPLAY
test("Verify products page displays items", async ({ page }) => {
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);

  await expect(
    page.locator('[data-test="inventory-item-name"]').first(),
  ).toBeVisible();
});

//SORTING
test("User can sort products by price low to high", async ({ page }) => {
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("lohi");

  await expect(
    page.locator('[data-test="inventory-item-price"]').first(),
  ).toHaveText("$7.99");
});

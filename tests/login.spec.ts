import { test, expect } from "@playwright/test";

test("Successful Login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("error_user");
  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
test("Successful sign in", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("error_user");
  await page.locator("#password").fill("secret_sauce");

  await page.locator("#login-button").click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Invalid Login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("wrong_user");
  await page.locator("#password").fill("wrong_password");

  await page.locator("#login-button").click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

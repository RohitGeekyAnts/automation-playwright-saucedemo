import { test, expect } from "@playwright/test";
import { users } from "../data/users";
import { LoginPage } from "../pages/login.page";
import { ProductsPage } from "../pages/products.page";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/inventory/);
});

test("Verify products page displays items", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.expectProductCount(6);
  await productsPage.expectFirstProductNameVisible();
});

test("User can sort products by price low to high", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.sortByPriceLowToHigh();
  await productsPage.expectFirstProductPrice("$7.99");
});

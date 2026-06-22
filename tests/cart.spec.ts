import { test } from "@playwright/test";
import { productNames } from "../data/checkout";
import { users } from "../data/users";
import { CartPage } from "../pages/cart.page";
import { LoginPage } from "../pages/login.page";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
});

test("User can add a product to cart", async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.addBackpack();
  await cartPage.expectCartBadgeCount("1");
});

test("User can remove a product from cart", async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.addBackpack();
  await cartPage.removeBackpack();
  await cartPage.expectCartBadgeHidden();
});

test("User can view items in cart", async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.addBackpack();
  await cartPage.openCart();
  await cartPage.expectCartContains(productNames.backpack);
});

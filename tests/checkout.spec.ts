import { test } from "@playwright/test";
import { checkoutInfo, productNames } from "../data/checkout";
import { users } from "../data/users";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { LoginPage } from "../pages/login.page";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
});

test("User can complete checkout successfully", async ({ page }) => {
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await cartPage.addBackpack();
  await cartPage.openCart();
  await checkoutPage.startCheckout();
  await checkoutPage.fillShippingInfo(checkoutInfo.valid);
  await checkoutPage.continueCheckout();
  await checkoutPage.expectOverviewWithProduct(productNames.backpack);
  await checkoutPage.finishOrder();
  await checkoutPage.expectOrderComplete();
});

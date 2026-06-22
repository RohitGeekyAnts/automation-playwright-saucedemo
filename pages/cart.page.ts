import { expect, type Page } from "@playwright/test";

export class CartPage {
  constructor(private readonly page: Page) {}

  async addBackpack() {
    await this.page.getByTestId("add-to-cart-sauce-labs-backpack").click();
  }

  async removeBackpack() {
    await this.page.getByTestId("remove-sauce-labs-backpack").click();
  }

  async openCart() {
    await this.page.getByTestId("shopping-cart-link").click();
  }

  async expectCartBadgeCount(count: string) {
    await expect(this.page.getByTestId("shopping-cart-badge")).toHaveText(count);
  }

  async expectCartBadgeHidden() {
    await expect(this.page.getByTestId("shopping-cart-badge")).toHaveCount(0);
  }

  async expectCartContains(productName: string) {
    await expect(this.page).toHaveURL(/cart/);
    await expect(this.page.getByTestId("inventory-item-name")).toHaveText(
      productName,
    );
  }
}

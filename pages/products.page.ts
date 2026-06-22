import { expect, type Page } from "@playwright/test";

export class ProductsPage {
  constructor(private readonly page: Page) {}

  async expectProductCount(count: number) {
    await expect(this.page.getByTestId("inventory-item")).toHaveCount(count);
  }

  async expectFirstProductNameVisible() {
    await expect(
      this.page.getByTestId("inventory-item-name").first(),
    ).toBeVisible();
  }

  async sortByPriceLowToHigh() {
    await this.page.getByTestId("product-sort-container").selectOption("lohi");
  }

  async expectFirstProductPrice(price: string) {
    await expect(
      this.page.getByTestId("inventory-item-price").first(),
    ).toHaveText(price);
  }
}

import { expect, type Page } from "@playwright/test";

type ShippingInfo = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async startCheckout() {
    await this.page.getByTestId("checkout").click();
  }

  async fillShippingInfo({ firstName, lastName, postalCode }: ShippingInfo) {
    await this.page.getByTestId("firstName").fill(firstName);
    await this.page.getByTestId("lastName").fill(lastName);
    await this.page.getByTestId("postalCode").fill(postalCode);
  }

  async continueCheckout() {
    await this.page.getByTestId("continue").click();
  }

  async finishOrder() {
    await this.page.getByTestId("finish").click();
  }

  async expectOverviewWithProduct(productName: string) {
    await expect(this.page).toHaveURL(/checkout-step-two/);
    await expect(this.page.getByTestId("inventory-item-name")).toHaveText(
      productName,
    );
  }

  async expectOrderComplete() {
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.page.getByTestId("complete-header")).toHaveText(
      "Thank you for your order!",
    );
  }
}

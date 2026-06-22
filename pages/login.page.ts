import { expect, type Page } from "@playwright/test";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.getByTestId("username").fill(username);
    await this.page.getByTestId("password").fill(password);
    await this.page.getByTestId("login-button").click();
  }

  async expectInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.getByTestId("title")).toHaveText("Products");
  }

  async expectLoginError(
    message = "Username and password do not match any user in this service",
  ) {
    await expect(this.page.getByTestId("error")).toBeVisible();
    await expect(this.page.getByTestId("error")).toContainText(message);
  }
}

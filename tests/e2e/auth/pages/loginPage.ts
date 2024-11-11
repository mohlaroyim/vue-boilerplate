import type {Locator, Page} from "@playwright/test";
export class LoginPage{
  private page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page
    this.usernameInput = this.page.getByTestId('user_name');
    this.passwordInput = this.page.getByTestId('user_password');
    this.submitButton = this.page.locator('button[type="submit"]');
  }

  async login(email: string, password: string) {
    await this.usernameInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

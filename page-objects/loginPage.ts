import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";

export class LoginPage {
  readonly page: Page;
  readonly h: Helper;

  textFieldUsername: Locator;
  textFieldPassword: Locator;
  buttonLogin: Locator;
  buttonVerify: Locator;
  textFieldGlobalSearchBar: Locator;
  buttonAppLauncher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.h = new Helper(this.page);

    this.textFieldUsername = this.page.locator("#username");
    this.textFieldPassword = this.page.locator("#password");
    this.buttonLogin = this.page.locator("#Login");
    this.buttonVerify = this.page.locator("#Verify");
    this.textFieldGlobalSearchBar = this.page.getByRole('button', { name: 'Search' })
    this.buttonAppLauncher = this.page.getByRole("button", {name: "App Launcher"});
  }

  async goToSalesforceLoginPage() {
    await this.page.goto("https://login.salesforce.com/");
    await expect(this.textFieldUsername).toBeVisible();
    await expect(this.textFieldPassword).toBeVisible();
    await expect(this.buttonLogin).toBeVisible();
  }

  async loginToSalesforce(username: string, password: string) {
    await this.textFieldUsername.fill(username);
    await this.textFieldPassword.fill(password);
    await this.buttonLogin.click();
  }

  async verifyDashboardPage() {
    // await this.buttonVerify.click();
    await expect(this.textFieldGlobalSearchBar).toBeVisible();
    await expect(this.buttonAppLauncher).toBeVisible();
  }

  async goToSalesforceDashboardPage() {
    await this.page.goto(
      "https://orgfarm-b21abd5166-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome",
    );
    await this.page.waitForLoadState("domcontentloaded");
  }
}

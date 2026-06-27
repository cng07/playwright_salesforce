import { Locator, Page, expect } from "@playwright/test";

export class Helper {
  readonly page: Page;

  buttonAppLauncher: Locator;
  textFieldAppLauncher: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.textFieldAppLauncher = this.page.locator('input[type="search"]#global-search-01');
  }

  async pause(ms: number) {
    await this.page.waitForTimeout(ms); // wait for x milliseconds
  }

  async searchAppLauncher(appName: string) {
    await this.buttonAppLauncher.click();
    await this.pause(500);
    await this.textFieldAppLauncher.pressSequentially(appName, { delay: 300 });
    await this.page.getByRole("option", { name: appName, exact: true }).click();
  }

  async clickTab(tabName: string) {
    await this.page.getByRole("link", { name: tabName }).click();
    await this.pause(2000);
  }
}

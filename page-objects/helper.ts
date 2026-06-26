import { Locator, Page, expect } from "@playwright/test";

export class Helper {
  readonly page: Page;

  buttonAppLauncher: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
  }

  async pause(ms: number) {
    await this.page.waitForTimeout(ms); // wait for x milliseconds
  }
}

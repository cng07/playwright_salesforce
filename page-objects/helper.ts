import { Locator, Page, expect } from "@playwright/test";

export class Helper {
  readonly page: Page;

  buttonAppLauncher: Locator;
  textFieldAppLauncher: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.textFieldAppLauncher = this.page.getByRole("combobox", {
      name: "Search apps and items...",
    });
  }

  async pause(ms: number) {
    await this.page.waitForTimeout(ms); // wait for x milliseconds
  }

  // async searchAppLauncher(appName: string) {
  //   await this.buttonAppLauncher.click();
  //   await this.pause(500);
  //   await this.textFieldAppLauncher.pressSequentially(appName, { delay: 300 });
  //   await this.page.getByRole("option", { name: appName, exact: true }).click();
  // }

  async searchAppLauncher(appName: string) {
    await expect(this.buttonAppLauncher).toBeVisible({ timeout: 10000 });
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForTimeout(1000);
    let isOpen = false;
    for (let attempt = 0; attempt < 3; attempt++) {
      const expanded = await this.buttonAppLauncher.getAttribute("aria-expanded");
      if (expanded === "true") {
        isOpen = true;
      } else {
        await this.buttonAppLauncher.click();
        await this.page.waitForTimeout(1000); // Wait 1 second for menu animation
      }
      if (await this.textFieldAppLauncher.isVisible()) {
        isOpen = true;
        break;
      }
    }
    if (!isOpen) {
      await expect(this.textFieldAppLauncher).toBeVisible({ timeout: 5000 });
    }
    await this.textFieldAppLauncher.click({ timeout: 5000 });
    await this.textFieldAppLauncher.fill(appName);
    const appOption = this.page.getByRole("option", { name: appName, exact: true });
    await expect(appOption).toBeVisible({ timeout: 20000 });
    await appOption.click();
    await expect(this.page.getByRole("heading", { name: appName, exact: true })).toBeVisible({
      timeout: 10000,
    });
    await this.pause(2000);
  }

  async clickTab(tabName: string) {
    await this.page.getByRole("link", { name: tabName }).click();
    await this.pause(2000);
  }
}

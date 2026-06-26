import { Page } from "@playwright/test";

export class Helper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async pause(ms: number) {
    await this.page.waitForTimeout(ms); // wait for x milliseconds
  }
}

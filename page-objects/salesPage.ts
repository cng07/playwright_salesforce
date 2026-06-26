    import { Locator, Page, expect } from "@playwright/test";
    import { Helper } from "./helper";
    
    export class SalesPage {
      readonly page: Page;
      readonly h: Helper;
    
      textFieldGlobalSearchBar: Locator;
      buttonAppLauncher: Locator;
    
      constructor(page: Page) {
        this.page = page;
        this.h = new Helper(this.page);
    
        this.textFieldGlobalSearchBar = this.page.getByRole('button', { name: 'Search' })
        this.buttonAppLauncher = this.page.getByRole("button", {name: "App Launcher"});
      }
    
      async verifyDashboardPage() {
        await expect(this.textFieldGlobalSearchBar).toBeVisible();
        await expect(this.buttonAppLauncher).toBeVisible();
      }
    
      async goToSalesPage() {
        await this.page.goto(
          "https://orgfarm-b21abd5166-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome",
        );
        await this.page.waitForLoadState("domcontentloaded");
      }
    }
    
import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { Helper } from "../page-objects/helper";

test("Salesforce Login", async ({ page }) => {
  test.setTimeout(120000);
  const _page = new LoginPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceLoginPage();

  await _page.loginToSalesforce(
    process.env.SALESFORCE_EMAIL!,
    process.env.SALESFORCE_PASSWORD!,
  );

  // Input OTP manually then manually click Verify button
  await h.pause(50000);

  await page.context().storageState({
    path: "playwright/.auth/salesforce.json",
  });

  // Validate successful login by checking for the global search bar or App Launcher icon.
  await _page.verifyDashboardPage();
});

test("Salesforce Dashboard page", async ({ page }) => {
  test.setTimeout(120000);
  const _page = new LoginPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceDashboardPage();

  // Validate successful login by checking for the global search bar or App Launcher icon.
  await _page.verifyDashboardPage();

  await h.pause(15000);
});
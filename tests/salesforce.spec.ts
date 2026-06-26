import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/loginPage";
import { Helper } from "../page-objects/helper";
import { SalesPage } from "../page-objects/salesPage";

test("Salesforce Login", async ({ page }) => {
  test.setTimeout(120000);
  const _page = new LoginPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceLoginPage();

  await _page.loginToSalesforce(process.env.SALESFORCE_EMAIL!, process.env.SALESFORCE_PASSWORD!);

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
});

test("Lead Creation & Management", async ({ page }) => {
  test.setTimeout(120000);
  const _pageLogin = new LoginPage(page);
  const _page = new SalesPage(page);
  const h = new Helper(page);

  await _pageLogin.goToSalesforceDashboardPage();

  // Validate successful login by checking for the global search bar or App Launcher icon.
  await _pageLogin.verifyDashboardPage();

  // Search for "Sales" App via App Launcher
  await h.searchAppLauncher("Sales");
  await expect(page.getByText("Seller Home")).toBeVisible();

  // Open Leads tab
  await h.clickTab("Leads");

  // Create a new Lead with randomly generated details:
  await _page.clickNewButton();
  await _page.fillLeadForm();
  await _page.saveLead();

  // Validate lead has a unique Lead ID
  await _page.verifyUniqueLeadId();
});

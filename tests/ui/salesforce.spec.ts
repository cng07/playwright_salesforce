import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { Helper } from "../../page-objects/helper";
import { SalesPage } from "../../page-objects/salesPage";
import { generateLeadData, leadStatus, randomDifferentValue } from "../../utils/salesLeadsData";

test("Salesforce Login with OTP @runFirstLogin", async ({ page }) => {
  test.setTimeout(120000);
  const _page = new LoginPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceLoginPage();

  await _page.loginToSalesforce(process.env.SALESFORCE_EMAIL!, process.env.SALESFORCE_PASSWORD!);

  // Input OTP manually then manually click Verify button
  // Validate successful login by checking for the global search bar or App Launcher icon
  await _page.verifyDashboardPage();

  await page.context().storageState({
    path: "playwright/.auth/storageState.json",
  });
});

test("Salesforce Dashboard page @smoke", async ({ page }) => {
  const _page = new LoginPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceDashboardPage();

  // Validate successful login by checking for the global search bar or App Launcher icon.
  await _page.verifyDashboardPage();
});

for (let i = 1; i <= 2; i++) {
  test(`Lead Creation & Management (${i})`, async ({ page }) => {
    test.setTimeout(150000);
    const _pageLogin = new LoginPage(page);
    const _page = new SalesPage(page);
    const h = new Helper(page);
    const lead = generateLeadData();

    await _pageLogin.goToSalesforceDashboardPage();

    // Validate successful login by checking for the global search bar or App Launcher icon.
    await _pageLogin.verifyDashboardPage();

    await h.searchAppLauncher("DevOps Center");
    await expect(page.getByRole("heading", { name: "DevOps Center", exact: true })).toBeVisible({
      timeout: 15000,
    });

    // Search for "Sales" App via App Launcher
    await h.searchAppLauncher("Sales");
    await expect(page.getByRole("heading", { name: "Sales", exact: true })).toBeVisible({
      timeout: 15000,
    });

    // Open Leads tab
    await h.clickTab("Leads");

    // Create a new Lead with generated details:
    await _page.clickNewButton();
    await _page.fillLeadForm(lead);
    await _page.saveLead();

    // Validate lead has a unique Lead ID
    await _page.verifyUniqueLeadId();

    // Validate that correct data is shown in the details view
    await _page.clickDetailsTab();
    await _page.verifyDetailsView(lead);

    // Edit Lead Status
    lead.leadStatus = randomDifferentValue(lead.leadStatus, leadStatus);
    await _page.editLeadStatus(lead.leadStatus);

    // Validate the updated Lead Status
    await _page.clickDetailsTab();
    await _page.verifyDetailsView(lead);

    // Delete the created lead
    await _page.deleteLead();
  });
}

test(`Lead > Opportunity Conversion @smoke`, async ({ page }) => {
  test.setTimeout(180000);
  const _pageLogin = new LoginPage(page);
  const _page = new SalesPage(page);
  const h = new Helper(page);
  const lead = generateLeadData();

  await _pageLogin.goToSalesforceDashboardPage();
  await _pageLogin.verifyDashboardPage();

  await h.searchAppLauncher("DevOps Center");
  await expect(page.getByRole("heading", { name: "DevOps Center", exact: true })).toBeVisible({
    timeout: 15000,
  });
  await h.searchAppLauncher("Sales");
  await expect(page.getByRole("heading", { name: "Sales", exact: true })).toBeVisible({
    timeout: 15000,
  });

  await h.clickTab("Leads");
  await _page.clickNewButton();
  await _page.fillLeadForm(lead);
  await _page.saveLead();

  await _page.verifyUniqueLeadId();
  await _page.clickDetailsTab();
  await _page.verifyDetailsView(lead);

  // Lead > Opportunity Conversion
  await _page.clickConvertButton();
  await _page.convertLeadRadio("Create New Account");
  await _page.convertLeadRadio("Create New Opportunity");
  const opportunityName = await _page.getConvertLeadTextInputValue("Opportunity Name");
  await _page.clickConvertButtonOnConvertLeadModule();

  // Validate Opportunity created successfully
  // Navigate to the newly created Opportunity page
  await h.clickTab("Opportunities");
  await _page.clickOpportunityName(opportunityName);

  // Validate values
  await _page.verifyOpportunityDetailsHaveValues();
  await _page.verifyOpportunityAndAccountName(opportunityName);

  // Delete the created opportunity
  await _page.deleteLead();
});

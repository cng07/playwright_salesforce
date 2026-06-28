import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { Helper } from "../../page-objects/helper";
import { SalesPage } from "../../page-objects/salesPage";
import { generateLeadData } from "../../utils/salesLeadsData";

test(`Lead Creation with missing mandatory fields`, async ({ page }) => {
  test.setTimeout(60000);
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
  await _page.clickSaveButton();

  // Last name and Company are both blank
  await _page.verifyRequiredFieldErrors(lead);
  await _page.clickCloseButton();

  // Only Last name is blank
  await _page.clickNewButton();
  await _page.fillLeadTextField(_page.textFieldLastName, lead.lastName);
  await _page.clickSaveButton();
  await _page.verifyRequiredFieldErrors(lead);
  await _page.clickCloseButton();

  // Only Company is blank
  await _page.clickNewButton();
  await _page.fillLeadTextField(_page.textFieldCompany, lead.company);
  await _page.clickSaveButton();
  await _page.verifyRequiredFieldErrors(lead);
});

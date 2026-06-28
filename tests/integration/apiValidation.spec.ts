import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/loginPage";
import { Helper } from "../../page-objects/helper";
import { SalesPage } from "../../page-objects/salesPage";
import { generateLeadData } from "../../utils/salesLeadsData";

type ConvertLeadAuraResponse = {
  actions: Array<{
    state: string;
    returnValue: {
      hasError: boolean;
      opportunityId: string;
      accountId: string;
    };
  }>;
};

test(`API / Response Validation`, async ({ page }) => {
  test.setTimeout(90000);
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

  const convertLeadResponsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("lightning.force.com/aura") &&
      response.url().includes("convertLeadServer")
  );
  await _page.clickConvertButtonOnConvertLeadModule();
  const convertLeadResponse = await convertLeadResponsePromise;

  expect(convertLeadResponse.status()).toBe(200);
  const convertLeadBody = (await convertLeadResponse.json()) as ConvertLeadAuraResponse;
  const { state, returnValue } = convertLeadBody.actions[0];

  expect(state).toBe("SUCCESS");
  expect(returnValue.hasError).toBe(false);
  expect(returnValue.opportunityId).toBeDefined();
  expect(returnValue.opportunityId).not.toBe("");
  expect(returnValue.accountId).toBeDefined();
  expect(returnValue.accountId).not.toBe("");

  const opportunityId = returnValue.opportunityId;

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

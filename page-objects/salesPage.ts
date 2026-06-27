import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import type { LeadData } from "../utils/salesLeadsData";

export class SalesPage {
  readonly page: Page;
  readonly h: Helper;

  textFieldGlobalSearchBar: Locator;
  buttonAppLauncher: Locator;
  buttonNew: Locator;
  dropdownSalutation: Locator;
  textFieldFirstName: Locator;
  textFieldLastName: Locator;
  textFieldCompany: Locator;
  textFieldTitle: Locator;
  dropdownLeadSource: Locator;
  dropdownIndustry: Locator;
  textFieldAnnualRevenue: Locator;
  textFieldPhone: Locator;
  textFieldMobile: Locator;
  textFieldFax: Locator;
  textFieldEmail: Locator;
  textFieldWebsite: Locator;
  dropdownLeadStatus: Locator;
  dropdownRating: Locator;
  textFieldNoOfEmployees: Locator;
  buttonSave: Locator;
  buttonShowMoreActions: Locator;
  buttonDelete: Locator;
  buttonDelete2: Locator;
  tabDetails: Locator;
  buttonEdit: Locator;
  buttonSaveAndNew: Locator;
  buttonConvertMenuItem: Locator;
  buttonConvert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.h = new Helper(this.page);

    this.textFieldGlobalSearchBar = this.page.getByRole("button", { name: "Search" });
    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.buttonNew = this.page.getByRole("button", { name: "New", exact: true });
    this.dropdownSalutation = this.page.getByRole("combobox", { name: "Salutation" });
    this.textFieldFirstName = this.page.getByRole("textbox", { name: "First Name" });
    this.textFieldLastName = this.page.getByRole("textbox", { name: "Last Name" });
    this.textFieldCompany = this.page.getByRole("textbox", { name: "Company" });
    this.textFieldTitle = this.page.getByRole("textbox", { name: "Title" });
    this.dropdownLeadSource = this.page.getByRole("combobox", { name: "Lead Source" });
    this.dropdownIndustry = this.page.getByRole("combobox", { name: "Industry" });
    this.textFieldAnnualRevenue = this.page.getByRole("spinbutton", { name: "Annual Revenue" });
    this.textFieldPhone = this.page.getByRole("textbox", { name: "Phone" });
    this.textFieldMobile = this.page.getByRole("textbox", { name: "Mobile" });
    this.textFieldFax = this.page.getByRole("textbox", { name: "Fax" });
    this.textFieldEmail = this.page.getByRole("textbox", { name: "Email" });
    this.textFieldWebsite = this.page.getByRole("textbox", { name: "Website" });
    this.dropdownLeadStatus = this.page.getByRole("combobox", { name: "Lead Status" });
    this.dropdownRating = this.page.getByRole("combobox", { name: "Rating" });
    this.textFieldNoOfEmployees = this.page.getByRole("spinbutton", { name: "No. of Employees" });
    this.buttonSave = this.page.getByRole("button", { name: "Save", exact: true });
    this.buttonShowMoreActions = this.page.getByRole("button", { name: "Show more actions" });
    this.buttonDelete = this.page.getByRole("menuitem", { name: "Delete" });
    this.buttonDelete2 = this.page.locator(
      "//span[@dir='ltr' and contains(@class, 'label') and normalize-space(.)='Delete']"
    );
    this.tabDetails = this.page.getByRole("tab", { name: "Details" });
    this.buttonEdit = this.page.getByRole("menuitem", { name: "Edit" });
    this.buttonSaveAndNew = this.page.getByRole("button", { name: "Save & New" });
    this.buttonConvertMenuItem = this.page.getByRole("menuitem", { name: "Convert" });
    this.buttonConvert = this.page.getByRole("button", { name: "Convert" });
  }

  async verifyDashboardPage() {
    await expect(this.textFieldGlobalSearchBar).toBeVisible();
    await expect(this.buttonAppLauncher).toBeVisible();
  }

  async goToSalesPage() {
    await this.page.goto(
      "https://orgfarm-b21abd5166-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome"
    );
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickNewButton() {
    await this.buttonNew.click({ timeout: 10000 });
    await expect(this.page.getByText("New Lead")).toBeVisible();
  }

  async fillLeadForm(lead: LeadData) {
    await this.textFieldFirstName.fill(lead.firstName);
    await this.textFieldLastName.fill(lead.lastName);
    await this.textFieldCompany.fill(lead.company);
    await this.textFieldTitle.fill(lead.title);
    await this.textFieldAnnualRevenue.fill(lead.annualRevenue);
    await this.textFieldPhone.fill(lead.phone);
    await this.textFieldMobile.fill(lead.mobile);
    await this.textFieldFax.fill(lead.fax);
    await this.textFieldEmail.fill(lead.email);
    await this.textFieldWebsite.fill(lead.website);
    await this.textFieldNoOfEmployees.fill(lead.numberOfEmployees);

    await this.fillLeadFormDropdownV2(lead);
  }

  async fillLeadFormDropdown(lead: LeadData) {
    await this.dropdownSalutation.click();
    await this.page.getByRole("option", { name: lead.salutation }).click();

    await this.dropdownLeadSource.click();
    await this.page.getByRole("option", { name: lead.leadSource }).click();

    await this.dropdownIndustry.click();
    await this.page.getByRole("option", { name: lead.industry, exact: true }).click();

    await this.dropdownLeadStatus.click();
    await this.page.getByRole("option", { name: lead.leadStatus }).click();

    await this.dropdownRating.click();
    await this.page.getByRole("option", { name: lead.rating }).click();
  }

  private async selectOption(dropdown: Locator, value: string, exact = false) {
    await dropdown.click();
    await this.page.getByRole("option", { name: value, exact }).click();
  }

  async fillLeadFormDropdownV2(lead: LeadData) {
    const dropdowns = [
      { locator: this.dropdownSalutation, value: lead.salutation },
      { locator: this.dropdownLeadSource, value: lead.leadSource },
      { locator: this.dropdownIndustry, value: lead.industry, exact: true },
      { locator: this.dropdownLeadStatus, value: lead.leadStatus },
      { locator: this.dropdownRating, value: lead.rating },
    ];

    for (const dropdown of dropdowns) {
      await this.selectOption(dropdown.locator, dropdown.value, dropdown.exact);
    }
  }

  async saveLead() {
    await this.buttonSave.click();
    await expect(this.page.getByText("was created.")).toBeVisible();
    // await this.h.pause(1000);
    await expect(this.page).toHaveURL(/\/lightning\/r\/Lead\/[A-Za-z0-9]{18}\/view$/, {
      timeout: 5000,
    });
  }

  async verifyUniqueLeadId() {
    const leadId = this.page.url().match(/\/Lead\/([A-Za-z0-9]{18})\/view/)![1]; // Get the current page URL and extract the 18-digit Lead ID
    // console.log(leadId);
    expect(leadId).toMatch(/^[A-Za-z0-9]{18}$/); // Verify the extracted Lead ID is exactly 18 alphanumeric characters

    const match = this.page.url().match(/\/Lead\/([A-Za-z0-9]{18})\/view/); // Match the URL and capture the 18-character Lead ID
    expect(match).not.toBeNull();
    expect(match![1]).toHaveLength(18);
  }

  async deleteLead() {
    await this.buttonShowMoreActions.click();
    await this.buttonDelete.click();
    await expect(this.page.getByText("Are you sure you want to delete this lead?")).toBeVisible();
    await this.buttonDelete2.click();
    await expect(this.page.getByText("was deleted.")).toBeVisible();
  }

  async editLead() {
    await this.buttonShowMoreActions.click();
    await this.buttonEdit.click();
    await expect(this.buttonSaveAndNew).toBeVisible();
    await expect(this.buttonSave).toBeVisible();
  }

  async clickConvertButton() {
    await this.buttonShowMoreActions.click();
    await this.buttonConvertMenuItem.click();
    await expect(this.page.getByText("Convert Lead", { exact: true })).toBeVisible();
  }

  async editLeadStatus(newStatus: string) {
    await this.buttonShowMoreActions.click();
    await this.buttonEdit.click();
    await expect(this.dropdownLeadStatus).toBeVisible({ timeout: 10000 });
    await this.selectOption(this.dropdownLeadStatus, newStatus);
    await this.buttonSave.click();
    await expect(this.page.getByText("was saved.")).toBeVisible();
    await expect(this.page).toHaveURL(/\/lightning\/r\/Lead\/[A-Za-z0-9]{18}\/view$/, {
      timeout: 10000,
    });
  }

  async clickDetailsTab() {
    await this.tabDetails.click();
    await expect(this.page.getByText("Lead Owner", { exact: true })).toBeVisible();
  }

  /**
   * Verifies the displayed value of a Salesforce record field based on its label.
   * Optionally normalizes numeric values (e.g. Phone, Mobile, Fax) to ignore
   * formatting differences such as spaces, parentheses, or dashes.
   */
  async verifyField(label: string, expected: string, normalizeDigits = false) {
    const field = this.page
      .locator(`.test-id__field-label:text-is("${label}")`)
      .locator(
        "xpath=ancestor::*[contains(concat(' ', normalize-space(@class), ' '), ' slds-form-element ')][1]"
      );

    // Retrieve the displayed field value
    const value = field.locator(".test-id__field-value").first();

    // Compare only numeric characters for phone-related fields
    if (normalizeDigits) {
      await expect
        .poll(async () => (await value.innerText()).replace(/\D/g, ""), { timeout: 5000 })
        .toContain(expected.replace(/\D/g, ""));
      return;
    }

    // Verify the displayed text matches the expected value
    await expect(value).toContainText(expected);
  }

  async verifyDetailsView(lead: LeadData) {
    const fullName = `${lead.salutation} ${lead.firstName} ${lead.lastName}`;
    await this.verifyField("Name", fullName);
    await this.verifyField("Title", lead.title);
    await this.verifyField("Company", lead.company);
    await this.verifyField("Annual Revenue", lead.annualRevenue);
    await this.verifyField("Phone", lead.phone, true);
    await this.verifyField("Mobile", lead.mobile, true);
    await this.verifyField("Fax", lead.fax, true);
    await this.verifyField("Email", lead.email);
    await this.verifyField("Website", lead.website);
    await this.verifyField("No. of Employees", lead.numberOfEmployees);
    await this.verifyField("Lead Source", lead.leadSource);
    await this.verifyField("Industry", lead.industry);
    await this.verifyField("Lead Status", lead.leadStatus);
    await this.verifyField("Rating", lead.rating);
  }

  async convertLeadRadio(radio: string) {
    const convertLeadRadio = this.page.locator("label", { hasText: radio }).first();

    await expect(convertLeadRadio).toBeVisible({ timeout: 10000 });
    await convertLeadRadio.click();
    await expect(convertLeadRadio).toBeChecked();
  }

  async clickConvertButtonOnConvertLeadModule() {
    await this.buttonConvert.click();
    await expect(
      this.page.getByText("Your lead has been converted", { exact: true })
    ).toBeVisible();
    await this.page.getByRole("button", { name: "Go to Leads" }).click();
    await expect(this.page.getByText("My Leads", { exact: true })).toBeVisible();
  }

  async getConvertLeadTextInputValue(fieldLabel: string): Promise<string> {
    const convertLeadDialog = this.page.locator('div[role="dialog"]', { hasText: "Convert Lead" });
    const convertLeadInput = convertLeadDialog.getByLabel(fieldLabel).first();

    await expect(convertLeadDialog).toBeVisible({ timeout: 10000 });
    await expect(convertLeadInput).toHaveCount(1);
    return await convertLeadInput.inputValue();
  }

  async clickOpportunityName(opportunityName: string) {
    const opportunityLink = this.page.getByText(opportunityName, { exact: true });
    await expect(opportunityLink).toBeVisible({ timeout: 10000 });
    await opportunityLink.click();
    await expect(this.page.getByRole("button", { name: "Mark Stage as Complete" })).toBeVisible({
      timeout: 3000,
    });
  }
}

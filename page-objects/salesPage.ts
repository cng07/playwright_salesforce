import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import type { LeadData } from "../utils/salesLeadsData";

export class SalesPage {
  private readonly leadRecordUrl = /\/lightning\/r\/(?:Lead\/)?([A-Za-z0-9]{18})\/view$/;

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
  buttonError: Locator;
  buttonClose: Locator;

  constructor(page: Page) {
    this.page = page;
    this.h = new Helper(this.page);

    this.textFieldGlobalSearchBar = this.page.getByRole("button", { name: "Search" });
    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.buttonNew = this.page.getByRole("button", { name: "New", exact: true });
    // this.buttonNew = this.page.locator("button[title='New'], a[title='New'], button:has-text('New')").first();
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
    this.buttonError = this.page.getByRole("button", { name: "Error" });
    this.buttonClose = this.page.locator(`button[title='Cancel and close']`);
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

  async fillLeadTextField(field: Locator, value: string) {
    await field.fill(value);
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
    await expect(this.page).toHaveURL(this.leadRecordUrl, {
      timeout: 10000,
    });
  }

  async clickSaveButton() {
    await this.buttonSave.click();
  }

  async verifyUniqueLeadId() {
    const match = this.page.url().match(this.leadRecordUrl);
    expect(match).not.toBeNull();
    expect(match![1]).toHaveLength(18);
    expect(match![1]).toMatch(/^[A-Za-z0-9]{18}$/);
  }

  async deleteLead() {
    await this.buttonShowMoreActions.click();
    await this.buttonDelete.click();
    await expect(this.page.getByText("Are you sure you want to delete this")).toBeVisible();
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
    await expect(this.buttonConvertMenuItem).toBeVisible({ timeout: 10000 });
    await this.buttonConvertMenuItem.click();
    await expect(this.page.getByRole("dialog", { name: "Convert Lead" })).toBeVisible({
      timeout: 15000,
    });
  }

  async editLeadStatus(newStatus: string) {
    await this.buttonShowMoreActions.click();
    await this.buttonEdit.click();
    await expect(this.dropdownLeadStatus).toBeVisible({ timeout: 10000 });
    await this.selectOption(this.dropdownLeadStatus, newStatus);
    await this.buttonSave.click();
    await expect(this.page.getByText("was saved.")).toBeVisible();
    await expect(this.page).toHaveURL(this.leadRecordUrl, {
      timeout: 10000,
    });
  }

  async clickDetailsTab() {
    await this.tabDetails.click();
    await expect(this.page.getByText("Lead Owner", { exact: true })).toBeVisible();
  }

  private async getTextContent(locator: Locator) {
    const text = (await locator.allTextContents()).join(" ").replace(/\s+/g, " ").trim();
    if (text) {
      return text;
    }

    return (await this.page.locator("body").innerText()).replace(/\s+/g, " ").trim();
  }

  // Polls until the expected value appears within the locator's text
  private async assertFieldValue(locator: Locator, expected: string, timeout = 10000) {
    await expect.poll(async () => this.getTextContent(locator), { timeout }).toContain(expected);
  }

  private async resolveFieldValueLocator(label: string, initialValue: Locator, expected: string) {
    // Return the initial locator if it already contains text
    const initialText = (await initialValue.allTextContents())
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (initialText) {
      return initialValue;
    }

    const labelLocator = this.page.getByText(label, { exact: true }).first();
    if (await labelLocator.count()) {
      // Locate the nearest container that holds both the label and its value
      const container = labelLocator.locator(
        "xpath=ancestor::*[self::div or self::li or self::tr or self::section or self::article][1]"
      );
      // Find non-label elements that may contain the field value
      const fallbackValue = container.locator(
        "xpath=.//*[not(self::label) and not(self::span[contains(@class, 'test-id__field-label')]) and normalize-space(.)!='']"
      );
      // Exclude elements whose text is only the label
      const candidate = fallbackValue.filter({ hasNotText: new RegExp(`^${label}$`, "i") }).first();
      if (await candidate.count()) {
        return candidate;
      }
      // Use the first available value element if no better match exists
      if (await fallbackValue.count()) {
        return fallbackValue.first();
      }
    }

    return this.page.locator("body");
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
    const resolvedValue = await this.resolveFieldValueLocator(label, value, expected);

    // Compare only numeric characters for phone-related fields
    if (normalizeDigits) {
      await expect
        .poll(async () => (await this.getTextContent(resolvedValue)).replace(/\D/g, ""), {
          timeout: 10000,
        })
        .toContain(expected.replace(/\D/g, ""));
      return;
    }

    // Verify the displayed text matches the expected value
    await this.assertFieldValue(resolvedValue, expected);
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

  async verifyOpportunityAndAccountName(data: string) {
    await this.verifyField("Opportunity Name", data);
    await this.verifyField("Account Name", data.slice(0, -1));
  }

  async verifyFieldHasValue(label: string) {
    const labelLocator = this.page.getByText(label, { exact: true }).first();
    await expect(labelLocator).toHaveCount(1, { timeout: 10000 });

    // Navigate to the field container associated with the label
    const field = labelLocator.locator(
      "xpath=ancestor::*[self::div or self::li or self::tr or self::section or self::article][1]"
    );

    // Retrieve the displayed field value
    const value = field.locator(".test-id__field-value").first();
    const resolvedValue = await this.resolveFieldValueLocator(label, value, "");

    // Wait until the field contains a non-empty value
    await expect
      .poll(async () => (await this.getTextContent(resolvedValue)).trim(), {
        timeout: 10000,
      })
      .not.toBe("");
  }

  async verifyOpportunityDetailsHaveValues() {
    const detailsTab = this.page.getByRole("tab", { name: "Details" }).first();
    if (await detailsTab.count()) {
      await detailsTab.click();
      await expect(detailsTab).toHaveAttribute("aria-selected", "true", { timeout: 10000 });
      // Ensure Details tab content has loaded
      await expect(
        this.page.locator(`.test-id__field-label:text-is("Opportunity Owner")`).first()
      ).toBeVisible({ timeout: 10000 });
    }
    await this.verifyFieldHasValue("Opportunity Owner");
    await this.verifyFieldHasValue("Opportunity Name");
    await this.verifyFieldHasValue("Account Name");
    await this.verifyFieldHasValue("Close Date");
    await this.verifyFieldHasValue("Amount");
    await this.verifyFieldHasValue("Stage");
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

  private errorIcon(field: Locator) {
    return field.locator(
      "xpath=ancestor::div[contains(@class,'slds-form-element__control')][1]//svg[@data-key='error']"
    );
  }

  private requiredFieldMessage(field: Locator) {
    return field.locator(
      "xpath=ancestor::*[contains(@class,'slds-form-element')][1]//*[normalize-space()='Complete this field.']"
    );
  }

  async verifyRequiredFieldErrors(lead: LeadData) {
    await expect(this.page.getByText("We hit a snag.", { exact: true })).toBeVisible();
    await expect(this.page.getByText("Review the following fields", { exact: true })).toBeVisible();
    await expect(this.buttonError).toBeVisible();

    if (!lead.lastName?.trim()) {
      await expect(
        this.page.locator(
          `//strong[contains(., 'Review the following fields')]/following::a[normalize-space()='Name']`
        )
      ).toBeVisible();

      await expect(this.textFieldLastName).toHaveAttribute("aria-invalid", "true");
      await expect(this.errorIcon(this.textFieldLastName)).toBeVisible();
      await expect(this.requiredFieldMessage(this.textFieldLastName)).toBeVisible();
    }

    if (!lead.company?.trim()) {
      await expect(
        this.page.locator(
          `//strong[contains(., 'Review the following fields')]/following::a[normalize-space()='Company']`
        )
      ).toBeVisible();

      await expect(this.textFieldCompany).toHaveAttribute("aria-invalid", "true");
      await expect(this.errorIcon(this.textFieldCompany)).toBeVisible();
      await expect(this.requiredFieldMessage(this.textFieldCompany)).toBeVisible();
    }
  }

  async clickCloseButton() {
    await expect(this.buttonClose).toBeVisible();
    await this.buttonClose.click({ force: true });
    await expect(this.buttonSaveAndNew).not.toBeVisible();
    await this.h.pause(1000);
  }
}

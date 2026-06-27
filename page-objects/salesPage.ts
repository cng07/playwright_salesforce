import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import { faker } from "@faker-js/faker";
import {
  salutation,
  leadSource,
  industry,
  leadStatus,
  rating,
} from "../utils/salesLeadsDropdownData";

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

  async fillLeadForm() {
    await this.textFieldFirstName.fill(faker.person.firstName());
    await this.textFieldLastName.fill(faker.person.lastName());
    await this.textFieldCompany.fill(faker.company.name());
    await this.textFieldTitle.fill(faker.person.jobTitle());
    await this.textFieldAnnualRevenue.fill(
      faker.number.int({ min: 100000, max: 10000000 }).toString()
    );
    await this.textFieldPhone.fill(`02${faker.string.numeric(8)}`);
    await this.textFieldMobile.fill(`09${faker.string.numeric(9)}`);
    await this.textFieldFax.fill(faker.phone.number());
    await this.textFieldEmail.fill(faker.internet.email());
    await this.textFieldWebsite.fill(faker.internet.url());

    await this.textFieldNoOfEmployees.fill(faker.string.numeric(4));
  }

  async fillLeadFormDropdown() {
    // await this.dropdownSalutation.selectOption({ label: faker.helpers.arrayElement(salutation) });
    await this.dropdownSalutation.click();
    await this.page.getByRole("option", { name: faker.helpers.arrayElement(salutation) }).click();

    // await this.dropdownLeadSource.selectOption({ label: faker.helpers.arrayElement(leadSource) });
    await this.dropdownLeadSource.click();
    await this.page.getByRole("option", { name: faker.helpers.arrayElement(leadSource) }).click();

    // await this.dropdownIndustry.selectOption({ label: faker.helpers.arrayElement(industry) });
    await this.dropdownIndustry.click();
    await this.page
      .getByRole("option", { name: faker.helpers.arrayElement(industry), exact: true })
      .click();

    // await this.dropdownLeadStatus.selectOption({ label: faker.helpers.arrayElement(leadStatus) });
    await this.dropdownLeadStatus.click();
    await this.page.getByRole("option", { name: faker.helpers.arrayElement(leadStatus) }).click();

    // await this.dropdownRating.selectOption({ label: faker.helpers.arrayElement(rating) });
    await this.dropdownRating.click();
    await this.page.getByRole("option", { name: faker.helpers.arrayElement(rating) }).click();
  }

  private async selectRandomOption(dropdown: Locator, options: string[], exact = false) {
    const value = faker.helpers.arrayElement(options);

    await dropdown.click();
    await this.page.getByRole("option", { name: value, exact }).click();
  }

  async fillLeadFormDropdownV2() {
    const dropdowns = [
      { locator: this.dropdownSalutation, options: salutation },
      { locator: this.dropdownLeadSource, options: leadSource },
      { locator: this.dropdownIndustry, options: industry, exact: true },
      { locator: this.dropdownLeadStatus, options: leadStatus },
      { locator: this.dropdownRating, options: rating },
    ];

    for (const dropdown of dropdowns) {
      await this.selectRandomOption(dropdown.locator, dropdown.options, dropdown.exact);
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

  async verifyDetailsView() {}
}

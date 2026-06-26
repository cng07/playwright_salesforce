import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";

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

  constructor(page: Page) {
    this.page = page;
    this.h = new Helper(this.page);

    this.textFieldGlobalSearchBar = this.page.getByRole("button", { name: "Search" });
    this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
    this.buttonNew = this.page.getByRole("button", { name: "New" });
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
    this.buttonSave = this.page.getByRole("button", { name: "Save" , exact: true });
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
    await this.buttonNew.click();
    await expect(this.page.getByText("New Lead")).toBeVisible();
  }

  async fillLeadForm() {
    // await this.dropdownSalutation.selectOption(leadData.salutation);
    await this.textFieldFirstName.fill("Alex");
    await this.textFieldLastName.fill("Chan");
    await this.textFieldCompany.fill("ACN");
    // await this.textFieldTitle.fill(leadData.title);
  }

  async saveLead() {
    await this.buttonSave.click();
  }
}

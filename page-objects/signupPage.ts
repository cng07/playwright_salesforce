import { Locator, Page, expect } from "@playwright/test";
import { Helper } from "./helper";
import { faker } from "@faker-js/faker";

export class SignupPage {
  readonly page: Page;
  readonly h: Helper;

  randomNumber = faker.string.numeric(6);
  email = `cn0798+${this.randomNumber}@web-library.net`;

  buttonAcceptAllCookies: Locator;
  textFieldFirstName: Locator;
  textFieldLastName: Locator;
  textFieldJobTitle: Locator;
  textFieldCompany: Locator;
  dropdownCountryRegion: Locator;
  textFieldWorkEmail: Locator;
  buttonSignMeUp: Locator;
  checkBoxIAgree: Locator;

  constructor(page: Page) {
    this.page = page;
    this.h = new Helper(this.page);

    this.buttonAcceptAllCookies = this.page.getByRole("button", { name: "Accept All Cookies" });
    this.textFieldFirstName = this.page.locator('input[name="firstName"]');
    this.textFieldLastName = this.page.locator('input[name="lastName"]');
    this.textFieldJobTitle = this.page.locator('input[name="jobTitle"]');
    this.textFieldCompany = this.page.locator('input[name="company"]');
    this.dropdownCountryRegion = this.page.locator('select[name="country"]');
    this.textFieldWorkEmail = this.page.locator('input[name="workEmail"]');
    this.buttonSignMeUp = this.page.getByRole("button", { name: "Sign me up" });
    this.checkBoxIAgree = this.page.locator("label:has(.checkbox--faux)");
  }

  async goToSalesforceSignupPage() {
    await this.page.goto("https://developer.salesforce.com/signup", {
      waitUntil: "domcontentloaded",
    });
    await expect(this.buttonAcceptAllCookies).toBeVisible({ timeout: 10000 });
    await this.buttonAcceptAllCookies.click();
  }

  async fillSignupWithRandomData() {
    await this.textFieldFirstName.type(faker.person.firstName(), { delay: 200 });
    await this.textFieldLastName.type(faker.person.lastName(), { delay: 200 });
    await this.textFieldJobTitle.type(faker.person.jobTitle(), { delay: 200 });
    await this.textFieldCompany.type(faker.company.name(), { delay: 200 });
    // await this.dropdownCountryRegion.selectOption({ label: "Philippines" });
    await this.textFieldWorkEmail.type(this.email, { delay: 200 });
  }

  async clickIAgreeCheckbox() {
    await this.checkBoxIAgree.click();
    await expect(this.checkBoxIAgree).toBeChecked();
  }

  async clickSignMeUpButton() {
    await this.buttonSignMeUp.click();
  }
}

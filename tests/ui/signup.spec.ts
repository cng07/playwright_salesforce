import { test } from "@playwright/test";
import { Helper } from "../../page-objects/helper";
import { SignupPage } from "../../page-objects/signupPage";

test.skip("Salesforce Signup @runSignup", async ({ page }) => {
  test.setTimeout(90000);
  const _page = new SignupPage(page);
  const h = new Helper(page);

  await _page.goToSalesforceSignupPage();

  await _page.fillSignupWithRandomData();
  await _page.clickIAgreeCheckbox();
  await h.pause(5000);
  await _page.clickSignMeUpButton();
});

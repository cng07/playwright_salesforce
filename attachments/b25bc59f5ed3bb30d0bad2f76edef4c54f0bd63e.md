# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/salesforce.spec.ts >> Lead Creation & Management (1)
- Location: tests/ui/salesforce.spec.ts:36:7

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('was created.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('was created.')

```

```yaml
- dialog "New Lead":
  - button "Cancel and close"
  - heading "New Lead" [level=2]
  - text: "* = Required Information"
  - heading "Lead Information" [level=3]
  - list:
    - listitem: Lead Owner Carlos Ng
    - listitem:
      - button "Undo Phone"
      - text: Phone
      - textbox "Phone": "0281725928"
    - listitem:
      - button "Undo Name"
      - group "Name required":
        - text: Name Salutation
        - combobox "Salutation": Dr.
        - status
        - text: First Name
        - textbox "First Name": Deborah
        - text: Last Name
        - textbox "Last Name": Yundt
    - listitem:
      - button "Undo Mobile"
      - text: Mobile
      - textbox "Mobile": "09674172708"
    - listitem:
      - button "Undo Company"
      - text: Company
      - textbox "Company": Runolfsson and Sons
    - listitem:
      - button "Undo Fax"
      - text: Fax
      - textbox "Fax": "8719942441"
    - listitem:
      - button "Undo Title"
      - text: Title
      - textbox "Title": Future Quality Manager
    - listitem:
      - button "Undo Email"
      - text: Email
      - textbox "Email": deborah_yundt@yahoo.com
    - listitem:
      - button "Undo Lead Source"
      - text: Lead Source
      - combobox "Lead Source": Purchased List
      - status
    - listitem:
      - button "Undo Website"
      - text: Website
      - textbox "Website": https://hollow-petticoat.net/
    - listitem:
      - button "Undo Industry"
      - text: Industry
      - combobox "Industry": Agriculture
      - status
    - listitem:
      - button "Undo Lead Status"
      - text: "*Lead Status"
      - combobox "Lead Status": Working - Contacted
      - status
    - listitem:
      - button "Undo Annual Revenue"
      - text: Annual Revenue
      - spinbutton "Annual Revenue": $578
    - listitem:
      - button "Undo Rating"
      - text: Rating
      - combobox "Rating": Hot
      - status
    - listitem:
      - button "Undo No. of Employees"
      - text: No. of Employees
      - spinbutton "No. of Employees": "838"
  - heading "Address Information" [level=3]
  - list:
    - listitem:
      - group "Address":
        - text: Address Country
        - combobox "Country": "--None--"
        - status
        - text: Street
        - textbox "Street"
        - status
        - text: City
        - textbox "City"
        - text: State/Province
        - combobox "State/Province": "--None--"
        - status
        - text: Zip/Postal Code
        - textbox "Zip/Postal Code"
  - heading "Additional Information" [level=3]
  - list:
    - listitem:
      - text: Product Interest
      - combobox "Product Interest": "--None--"
      - status
    - listitem:
      - text: Current Generator(s)
      - textbox "Current Generator(s)"
    - listitem:
      - text: SIC Code
      - textbox "SIC Code"
    - listitem:
      - text: Primary
      - combobox "Primary": "--None--"
      - status
    - listitem:
      - text: Number of Locations
      - spinbutton "Number of Locations"
  - heading "Description Information" [level=3]
  - list:
    - listitem:
      - text: Description
      - textbox "Description"
      - status
  - button "Cancel" [disabled]
  - button "Save & New" [disabled]
  - button "Save" [disabled]
  - status
- alert:
  - status: Loading...
- status
```

# Test source

```ts
  57  |     this.textFieldAnnualRevenue = this.page.getByRole("spinbutton", { name: "Annual Revenue" });
  58  |     this.textFieldPhone = this.page.getByRole("textbox", { name: "Phone" });
  59  |     this.textFieldMobile = this.page.getByRole("textbox", { name: "Mobile" });
  60  |     this.textFieldFax = this.page.getByRole("textbox", { name: "Fax" });
  61  |     this.textFieldEmail = this.page.getByRole("textbox", { name: "Email" });
  62  |     this.textFieldWebsite = this.page.getByRole("textbox", { name: "Website" });
  63  |     this.dropdownLeadStatus = this.page.getByRole("combobox", { name: "Lead Status" });
  64  |     this.dropdownRating = this.page.getByRole("combobox", { name: "Rating" });
  65  |     this.textFieldNoOfEmployees = this.page.getByRole("spinbutton", { name: "No. of Employees" });
  66  |     this.buttonSave = this.page.getByRole("button", { name: "Save", exact: true });
  67  |     this.buttonShowMoreActions = this.page.getByRole("button", { name: "Show more actions" });
  68  |     this.buttonDelete = this.page.getByRole("menuitem", { name: "Delete" });
  69  |     this.buttonDelete2 = this.page.locator(
  70  |       "//span[@dir='ltr' and contains(@class, 'label') and normalize-space(.)='Delete']"
  71  |     );
  72  |     this.tabDetails = this.page.getByRole("tab", { name: "Details" });
  73  |     this.buttonEdit = this.page.getByRole("menuitem", { name: "Edit" });
  74  |     this.buttonSaveAndNew = this.page.getByRole("button", { name: "Save & New" });
  75  |     this.buttonConvertMenuItem = this.page.getByRole("menuitem", { name: "Convert" });
  76  |     this.buttonConvert = this.page.getByRole("button", { name: "Convert" });
  77  |     this.buttonError = this.page.getByRole("button", { name: "Error" });
  78  |     this.buttonClose = this.page.locator(`button[title='Cancel and close']`);
  79  |   }
  80  | 
  81  |   async verifyDashboardPage() {
  82  |     await expect(this.textFieldGlobalSearchBar).toBeVisible();
  83  |     await expect(this.buttonAppLauncher).toBeVisible();
  84  |   }
  85  | 
  86  |   async goToSalesPage() {
  87  |     await this.page.goto(
  88  |       "https://orgfarm-b21abd5166-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome"
  89  |     );
  90  |     await this.page.waitForLoadState("domcontentloaded");
  91  |   }
  92  | 
  93  |   async clickNewButton() {
  94  |     await this.buttonNew.click({ timeout: 10000 });
  95  |     await expect(this.page.getByText("New Lead", { exact: true })).toBeVisible({ timeout: 10000 });
  96  |     await this.h.pause(1000);
  97  |   }
  98  | 
  99  |   async fillLeadForm(lead: LeadData) {
  100 |     await this.textFieldFirstName.fill(lead.firstName);
  101 |     await this.textFieldLastName.fill(lead.lastName);
  102 |     await this.textFieldCompany.fill(lead.company);
  103 |     await this.textFieldTitle.fill(lead.title);
  104 |     await this.textFieldAnnualRevenue.fill(lead.annualRevenue);
  105 |     await this.textFieldPhone.fill(lead.phone);
  106 |     await this.textFieldMobile.fill(lead.mobile);
  107 |     await this.textFieldFax.fill(lead.fax);
  108 |     await this.textFieldEmail.fill(lead.email);
  109 |     await this.textFieldWebsite.fill(lead.website);
  110 |     await this.textFieldNoOfEmployees.fill(lead.numberOfEmployees);
  111 | 
  112 |     await this.fillLeadFormDropdownV2(lead);
  113 |   }
  114 | 
  115 |   async fillLeadTextField(field: Locator, value: string) {
  116 |     await field.fill(value);
  117 |   }
  118 | 
  119 |   async fillLeadFormDropdown(lead: LeadData) {
  120 |     await this.dropdownSalutation.click();
  121 |     await this.page.getByRole("option", { name: lead.salutation }).click();
  122 | 
  123 |     await this.dropdownLeadSource.click();
  124 |     await this.page.getByRole("option", { name: lead.leadSource }).click();
  125 | 
  126 |     await this.dropdownIndustry.click();
  127 |     await this.page.getByRole("option", { name: lead.industry, exact: true }).click();
  128 | 
  129 |     await this.dropdownLeadStatus.click();
  130 |     await this.page.getByRole("option", { name: lead.leadStatus }).click();
  131 | 
  132 |     await this.dropdownRating.click();
  133 |     await this.page.getByRole("option", { name: lead.rating }).click();
  134 |   }
  135 | 
  136 |   private async selectOption(dropdown: Locator, value: string, exact = false) {
  137 |     await dropdown.click();
  138 |     await this.page.getByRole("option", { name: value, exact }).click();
  139 |   }
  140 | 
  141 |   async fillLeadFormDropdownV2(lead: LeadData) {
  142 |     const dropdowns = [
  143 |       { locator: this.dropdownSalutation, value: lead.salutation },
  144 |       { locator: this.dropdownLeadSource, value: lead.leadSource },
  145 |       { locator: this.dropdownIndustry, value: lead.industry, exact: true },
  146 |       { locator: this.dropdownLeadStatus, value: lead.leadStatus },
  147 |       { locator: this.dropdownRating, value: lead.rating },
  148 |     ];
  149 | 
  150 |     for (const dropdown of dropdowns) {
  151 |       await this.selectOption(dropdown.locator, dropdown.value, dropdown.exact);
  152 |     }
  153 |   }
  154 | 
  155 |   async saveLead() {
  156 |     await this.buttonSave.click();
> 157 |     await expect(this.page.getByText("was created.")).toBeVisible();
      |                                                       ^ Error: expect(locator).toBeVisible() failed
  158 |     await expect(this.page).toHaveURL(this.leadRecordUrl, {
  159 |       timeout: 10000,
  160 |     });
  161 |   }
  162 | 
  163 |   async clickSaveButton() {
  164 |     await this.buttonSave.click();
  165 |   }
  166 | 
  167 |   async verifyUniqueLeadId() {
  168 |     const match = this.page.url().match(this.leadRecordUrl);
  169 |     expect(match).not.toBeNull();
  170 |     expect(match![1]).toHaveLength(18);
  171 |     expect(match![1]).toMatch(/^[A-Za-z0-9]{18}$/);
  172 |   }
  173 | 
  174 |   async deleteLead() {
  175 |     await this.buttonShowMoreActions.click();
  176 |     await this.buttonDelete.click();
  177 |     await expect(this.page.getByText("Are you sure you want to delete this")).toBeVisible();
  178 |     await this.buttonDelete2.click();
  179 |     await expect(this.page.getByText("was deleted.")).toBeVisible();
  180 |   }
  181 | 
  182 |   async editLead() {
  183 |     await this.buttonShowMoreActions.click();
  184 |     await this.buttonEdit.click();
  185 |     await expect(this.buttonSaveAndNew).toBeVisible();
  186 |     await expect(this.buttonSave).toBeVisible();
  187 |   }
  188 | 
  189 |   async clickConvertButton() {
  190 |     await this.buttonShowMoreActions.click();
  191 |     await expect(this.buttonConvertMenuItem).toBeVisible({ timeout: 10000 });
  192 |     await this.buttonConvertMenuItem.click();
  193 |     await expect(this.page.getByRole("dialog", { name: "Convert Lead" })).toBeVisible({
  194 |       timeout: 15000,
  195 |     });
  196 |   }
  197 | 
  198 |   async editLeadStatus(newStatus: string) {
  199 |     await this.buttonShowMoreActions.click();
  200 |     await this.buttonEdit.click();
  201 |     await expect(this.dropdownLeadStatus).toBeVisible({ timeout: 10000 });
  202 |     await this.selectOption(this.dropdownLeadStatus, newStatus);
  203 |     await this.buttonSave.click();
  204 |     await expect(this.page.getByText("was saved.")).toBeVisible();
  205 |     await expect(this.page).toHaveURL(this.leadRecordUrl, {
  206 |       timeout: 10000,
  207 |     });
  208 |   }
  209 | 
  210 |   async clickDetailsTab() {
  211 |     await this.tabDetails.click();
  212 |     await expect(this.page.getByText("Lead Owner", { exact: true })).toBeVisible();
  213 |   }
  214 | 
  215 |   private async getTextContent(locator: Locator) {
  216 |     const text = (await locator.allTextContents()).join(" ").replace(/\s+/g, " ").trim();
  217 |     if (text) {
  218 |       return text;
  219 |     }
  220 | 
  221 |     return (await this.page.locator("body").innerText()).replace(/\s+/g, " ").trim();
  222 |   }
  223 | 
  224 |   // Polls until the expected value appears within the locator's text
  225 |   private async assertFieldValue(locator: Locator, expected: string, timeout = 10000) {
  226 |     await expect.poll(async () => this.getTextContent(locator), { timeout }).toContain(expected);
  227 |   }
  228 | 
  229 |   private async resolveFieldValueLocator(label: string, initialValue: Locator, expected: string) {
  230 |     // Return the initial locator if it already contains text
  231 |     const initialText = (await initialValue.allTextContents())
  232 |       .join(" ")
  233 |       .replace(/\s+/g, " ")
  234 |       .trim();
  235 |     if (initialText) {
  236 |       return initialValue;
  237 |     }
  238 | 
  239 |     const labelLocator = this.page.getByText(label, { exact: true }).first();
  240 |     if (await labelLocator.count()) {
  241 |       // Locate the nearest container that holds both the label and its value
  242 |       const container = labelLocator.locator(
  243 |         "xpath=ancestor::*[self::div or self::li or self::tr or self::section or self::article][1]"
  244 |       );
  245 |       // Find non-label elements that may contain the field value
  246 |       const fallbackValue = container.locator(
  247 |         "xpath=.//*[not(self::label) and not(self::span[contains(@class, 'test-id__field-label')]) and normalize-space(.)!='']"
  248 |       );
  249 |       // Exclude elements whose text is only the label
  250 |       const candidate = fallbackValue.filter({ hasNotText: new RegExp(`^${label}$`, "i") }).first();
  251 |       if (await candidate.count()) {
  252 |         return candidate;
  253 |       }
  254 |       // Use the first available value element if no better match exists
  255 |       if (await fallbackValue.count()) {
  256 |         return fallbackValue.first();
  257 |       }
```
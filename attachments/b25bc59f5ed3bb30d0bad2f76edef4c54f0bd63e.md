# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/salesforce.spec.ts >> Lead Creation & Management (1)
- Location: tests/ui/salesforce.spec.ts:36:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  getByText('was saved.')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('was saved.')
    2 × locator resolved to <span data-aura-rendered-by="2270:0" data-aura-class="forceActionsText" class="toastMessage slds-text-heading--small forceActionsText">Lead "Ms. Roderick Ullrich" was saved.</span>
      - unexpected value "hidden"

```

```yaml
- link "Skip to Navigation":
  - /url: javascript:void(0);
- link "Skip to Main Content":
  - /url: javascript:void(0);
- button "Toggle Panel": Menu
- text: Developer Edition
- button "Show menu"
- button "Search": Search...
- navigation "Global Header":
  - list:
    - listitem:
      - group:
        - button "Add favorite":
          - tooltip "Add favorite"
        - button "Favorites list":
          - tooltip "Favorites list"
    - listitem:
      - button "Global Actions":
        - tooltip "Global Actions"
    - listitem:
      - button "Guidance Center":
        - tooltip "Guidance Center"
    - listitem:
      - button "Salesforce Help":
        - tooltip "Salesforce Help"
    - listitem:
      - button "Setup":
        - tooltip "Setup"
    - listitem:
      - button "Notifications":
        - tooltip "Notifications"
    - listitem:
      - button "View profile":
        - tooltip "View profile"
- navigation "App":
  - button "App Launcher"
- heading "Sales" [level=1]
- navigation "Global":
  - list:
    - listitem:
      - link "Home":
        - /url: /lightning/page/home
    - listitem:
      - link "Opportunities":
        - /url: /lightning/o/Opportunity/home
      - button "Opportunities List"
    - listitem:
      - link "Leads":
        - /url: /lightning/o/Lead/home
      - button "Leads List"
    - listitem:
      - link "Tasks":
        - /url: /lightning/o/Task/home
      - button "Tasks List"
    - listitem:
      - link "Files":
        - /url: /lightning/o/ContentDocument/home
      - button "Files List"
    - listitem:
      - link "Accounts":
        - /url: /lightning/o/Account/home
      - button "Accounts List"
    - listitem:
      - link "Contacts":
        - /url: /lightning/o/Contact/home
      - button "Contacts List"
    - listitem:
      - link "Campaigns":
        - /url: /lightning/o/Campaign/home
      - button "Campaigns List"
    - listitem:
      - link "Dashboards":
        - /url: /lightning/o/Dashboard/home
      - button "Dashboards List"
    - listitem:
      - button "Show more navigation items"
    - listitem:
      - button "Edit nav items"
- main:
  - heading "Lead Ms. Roderick Ullrich" [level=1]
  - button "Follow"
  - button "New Case"
  - button "New Note"
  - button "Submit for Approval"
  - button "Show more actions"
  - paragraph: Title
  - paragraph: Lead Operations Agent
  - paragraph: Company
  - paragraph: Blick - Luettgen
  - button "Phone (2)":
    - paragraph: Phone (2)
  - list:
    - paragraph:
      - link "(025) 833-2165":
        - /url: tel:0258332165
  - paragraph: Email
  - paragraph:
    - link "roderick.ullrich78@hotmail.com":
      - /url: mailto:roderick.ullrich78@hotmail.com
  - article:
    - heading "Path" [level=2]
    - listbox "Path Options":
      - option "stage complete Open - Not Contacted"
      - option "stage complete Working - Contacted"
      - option "stage complete Closed - Not Converted"
      - option "Closed - Converted" [selected]
    - button "Change Converted Status"
  - heading "Tabs" [level=2]
  - heading "Tabs" [level=2]
  - tablist "Tabs":
    - tab "Activity"
    - tab "Details" [selected]
    - tab "Chatter"
  - tabpanel "Details":
    - list:
      - listitem:
        - text: Lead Owner
        - link "Carlos Ng":
          - /url: /lightning/r/Name/005g5000008nNjdAAE/view
        - button "Preview"
        - button "Change Owner"
      - listitem:
        - text: Phone
        - link "(025) 833-2165":
          - /url: tel:0258332165
        - button "Edit Phone"
      - listitem:
        - text: Name Ms. Roderick Ullrich
        - button "Edit Name"
      - listitem:
        - text: Mobile
        - link "09279758540":
          - /url: tel:09279758540
        - button "Edit Mobile"
      - listitem:
        - text: Company Blick - Luettgen
        - button "Edit Company"
      - listitem:
        - text: Fax
        - link "(811) 167-3874":
          - /url: tel:8111673874
        - button "Edit Fax"
      - listitem:
        - text: Title Lead Operations Agent
        - button "Edit Title"
      - listitem:
        - text: Email
        - link "roderick.ullrich78@hotmail.com":
          - /url: mailto:roderick.ullrich78@hotmail.com
        - button "Edit Email"
      - listitem:
        - text: Lead Source Partner Referral
        - button "Edit Lead Source"
      - listitem:
        - text: Website
        - link "https://infinite-louse.org/":
          - /url: https://infinite-louse.org/
        - button "Edit Website"
      - listitem:
        - text: Industry Retail
        - button "Edit Industry"
      - listitem:
        - text: Lead Status Closed - Converted
        - button "Edit Lead Status"
      - listitem:
        - text: Annual Revenue $959
        - button "Edit Annual Revenue"
      - listitem:
        - text: Rating Hot
        - button "Edit Rating"
      - listitem:
        - text: No. of Employees 688
        - button "Edit No. of Employees"
    - list:
      - listitem:
        - text: Address
        - button "Edit Address"
    - list:
      - listitem:
        - text: Product Interest
        - button "Edit Product Interest"
      - listitem:
        - text: Current Generator(s)
        - button "Edit Current Generator(s)"
      - listitem:
        - text: SIC Code
        - button "Edit SIC Code"
      - listitem:
        - text: Primary
        - button "Edit Primary"
      - listitem:
        - text: Number of Locations
        - button "Edit Number of Locations"
    - list:
      - listitem:
        - text: Created By
        - link "Carlos Ng":
          - /url: /lightning/r/User/005g5000008nNjdAAE/view
        - button "Preview"
        - text: ", 6/28/2026, 7:57 AM"
      - listitem:
        - text: Last Modified By
        - link "Carlos Ng":
          - /url: /lightning/r/User/005g5000008nNjdAAE/view
        - button "Preview"
        - text: ", 6/28/2026, 7:57 AM"
    - list:
      - listitem:
        - text: Description
        - button "Edit Description"
  - heading "Tabs" [level=2]
  - heading "Tabs" [level=2]
  - tablist "Tabs":
    - tab "Related" [selected]
  - tabpanel "Related":
    - article: We found no potential duplicates of this Lead.
    - article "Campaign History":
      - heading "Campaign History (0)" [level=2]:
        - link "Campaign History (0)":
          - /url: /lightning/r/Lead/00Qg5000005MOqPEAW/related/CampaignMembers/view
      - button "Show actions for Campaign History"
- contentinfo "Utility Bar":
  - list:
    - listitem:
      - button "To Do List"
- text: Success notification. Lead "Ms. Roderick Ullrich" was saved. Press Control + F6 to navigate to the next toast notification or focusable region.
- button "Close"
- status
```

# Test source

```ts
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
  157 |     await expect(this.page.getByText("was created.")).toBeVisible();
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
> 204 |     await expect(this.page.getByText("was saved.")).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
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
  258 |     }
  259 | 
  260 |     return this.page.locator("body");
  261 |   }
  262 | 
  263 |   /**
  264 |    * Verifies the displayed value of a Salesforce record field based on its label.
  265 |    * Optionally normalizes numeric values (e.g. Phone, Mobile, Fax) to ignore
  266 |    * formatting differences such as spaces, parentheses, or dashes.
  267 |    */
  268 |   async verifyField(label: string, expected: string, normalizeDigits = false) {
  269 |     const field = this.page
  270 |       .locator(`.test-id__field-label:text-is("${label}")`)
  271 |       .locator(
  272 |         "xpath=ancestor::*[contains(concat(' ', normalize-space(@class), ' '), ' slds-form-element ')][1]"
  273 |       );
  274 | 
  275 |     // Retrieve the displayed field value
  276 |     const value = field.locator(".test-id__field-value").first();
  277 |     const resolvedValue = await this.resolveFieldValueLocator(label, value, expected);
  278 | 
  279 |     // Compare only numeric characters for phone-related fields
  280 |     if (normalizeDigits) {
  281 |       await expect
  282 |         .poll(async () => (await this.getTextContent(resolvedValue)).replace(/\D/g, ""), {
  283 |           timeout: 10000,
  284 |         })
  285 |         .toContain(expected.replace(/\D/g, ""));
  286 |       return;
  287 |     }
  288 | 
  289 |     // Verify the displayed text matches the expected value
  290 |     await this.assertFieldValue(resolvedValue, expected);
  291 |   }
  292 | 
  293 |   async verifyDetailsView(lead: LeadData) {
  294 |     const fullName = `${lead.salutation} ${lead.firstName} ${lead.lastName}`;
  295 |     await this.verifyField("Name", fullName);
  296 |     await this.verifyField("Title", lead.title);
  297 |     await this.verifyField("Company", lead.company);
  298 |     await this.verifyField("Annual Revenue", lead.annualRevenue);
  299 |     await this.verifyField("Phone", lead.phone, true);
  300 |     await this.verifyField("Mobile", lead.mobile, true);
  301 |     await this.verifyField("Fax", lead.fax, true);
  302 |     await this.verifyField("Email", lead.email);
  303 |     await this.verifyField("Website", lead.website);
  304 |     await this.verifyField("No. of Employees", lead.numberOfEmployees);
```
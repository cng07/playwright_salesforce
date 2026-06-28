# Playwright Salesforce Automation

## Prerequisites

- Node.js installed
- Access to the Salesforce test environment
- Access to the Outlook inbox used for OTP verification

## Install dependencies

```bash
npm install
```

## Running the tests locally

### First time setup (required)

Run the login setup first.

> **Note:** The authenticated session expires periodically. If the tests start failing due to authentication, rerun `npm run test:setupLogin` locally to generate a new `storageState.json`.

```bash
npm run test:setupLogin
```

During the login:

- Enter the OTP sent to the Outlook email.
- Click the **Verify** button manually.
- Wait for the test to finish successfully.

This will generate the authenticated `storageState.json` file that will be used by the rest of the tests.

### Run smoke tests

```bash
npm run test:smoke
```

### Run all tests

```bash
npm test
```

### Run a specific test using a custom tag

If you only want to run a specific test while developing or debugging, you can temporarily add a custom tag (for example, `@runSolo`) to the test.

Example:

```ts
test("Create Lead @runSolo", async ({ page }) => {
  // test steps
});
```

Run only that tagged test with specific browser(s):

```bash
npx playwright test --grep "@runSolo" --project=chromium
```

## Viewing the report

After the test run finishes:

```bash
npx playwright show-report
```

If Monocart Reporter is enabled, open the generated `index.html` file inside the `monocart-report` folder.

---

# Running tests in GitHub Actions

Before running any workflow, make sure a valid `storageState.json` has been generated locally.

1. Run:

   ```bash
   npm run test:setupLogin
   ```

2. Complete the OTP verification manually.

3. Commit and push the updated `playwright/.auth/storageState.json`.

4. If GitHub blocks the push because it contains authentication data, manually approve the push in GitHub.

5. After the file has been pushed successfully, run the GitHub Actions workflow.

> **Note:** You cannot run `test:setupLogin` in GitHub Actions because it requires manual OTP verification. Run only the remaining test suites after the storage state has been updated.

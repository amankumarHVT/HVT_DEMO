1.Create a new project in your IDE(ex: VSCode, IntellIJ).

a.Run the install command "npm init playwright@latest" in the terminal. 
::select the following to get started:
->Choose between TypeScript or JavaScript (default is TypeScript).
->Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project). 
->Add a GitHub Actions workflow to easily run tests on CI. ->Install Playwright browsers (default is true).

2.RUNNING TESTS 
-> BY default tests run in headless mode by using "npx playwright test" and automatically shows the report.
-> To run the tests in UI mode/headed mode use "npx playwright test --ui" or "npx playwright test --headed"

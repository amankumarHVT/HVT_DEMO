const { test, expect } = require("@playwright/test");

test("First Page", async function ({ page }) {
  await page.goto("https://stage.acmebank.org/");
  await page.waitForTimeout(1000);

  await page.getByText("Settings").first().click();
  await page.locator("//input[@value='v390156100000']").fill("v1742447865212668");
  await page.waitForTimeout(1000);
  await page.locator("//button[normalize-space()='Close']").click();
  await page.waitForTimeout(1000);

  await expect(page).toHaveURL(/acmebank/);
  await page.getByText("Get Started").click();

  // Define the name to be entered
  const firstName = "Kevinsdkfhaisdgiaiuhrsiugfher";

  // Validation logic
/*  const isValidName = firstName.length <= 12 && /^[A-Za-z]+$/.test(firstName);

  if (!isValidName) {
    console.error('Invalid name: Must be <= 12 characters and contain only letters.');
  } else {
    await page.getByPlaceholder("First Name").type(firstName, { delay: 100 });
    await page.getByPlaceholder("Last Name").type("Harris", { delay: 100 });
    await page.getByText("Next").click();
  }*/
});




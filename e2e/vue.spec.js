const { test, expect } = require("@playwright/test");

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the app root url", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.locator(
      " div > main > div.px-6.bottom-6.absolute.w-full > form > button"
    )
  ).toHaveText("Search");
});

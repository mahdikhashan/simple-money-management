// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8080/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Simple Money Management");
});

test("sidebar toggles correctly", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const sidebarToggleButton = page.getByTestId("sidebar-toggle-button");
  await sidebarToggleButton.click();

  const aside = page.locator("aside");
  const asideWidth = await aside.evaluate((element) =>
    window.getComputedStyle(element).getPropertyValue("width")
  );
  expect(asideWidth).toEqual("120px");

  await sidebarToggleButton.click();

  expect(asideWidth).toEqual("80px");
});

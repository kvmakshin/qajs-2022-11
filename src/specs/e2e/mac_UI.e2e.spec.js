/* eslint-disable no-unused-vars */
const { test, expect } = require("@playwright/test");
const { MacPage } = require("./page objects/MacPage");

test.describe("Apple Mac Page tests", () => {
  let macPage;

  test.beforeEach(async ({ page }) => {
    macPage = new MacPage(page);
    await macPage.goto();
  });

  test("should navigate to macbook air buy page", async ({ page }) => {
    await macPage.clickBuyMacbookAir();
    await expect(page).toHaveURL(
      "https://www.apple.com/shop/buy-mac/macbook-air",
    );
  });

  test("should navigate to macbook pro buy page", async ({ page }) => {
    await macPage.clickBuyMacbookPro();
    await expect(page).toHaveURL(
      "https://www.apple.com/shop/buy-mac/macbook-pro",
    );
  });

  test("should navigate to imac buy page", async ({ page }) => {
    await macPage.clickBuyIMac();
    await expect(page).toHaveURL("https://www.apple.com/shop/buy-mac/imac");
  });

  test("should navigate to mac mini buy page", async ({ page }) => {
    await macPage.clickBuyMacMini();
    await expect(page).toHaveURL("https://www.apple.com/shop/buy-mac/mac-mini");
  });

  test("should navigate to mac studio buy page", async ({ page }) => {
    await macPage.clickBuyMacStudio();
    await expect(page).toHaveURL(
      "https://www.apple.com/shop/buy-mac/mac-studio",
    );
  });

  test("should navigate to mac pro buy page", async ({ page }) => {
    await macPage.clickBuyMacPro();
    await expect(page).toHaveURL("https://www.apple.com/shop/buy-mac/mac-pro");
  });

  test("should navigate to latest macOS overview page", async ({ page }) => {
    await macPage.clickMacOs();
    await expect(page).toHaveURL("https://www.apple.com/macos/sonoma/");
  });
});

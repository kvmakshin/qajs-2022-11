/* eslint-disable no-unused-vars */
import bookstoreConfig from "../../framework/config";
const { test, expect } = require("@playwright/test");
const { timeout } = require("../../../playwright.config");

test("Should login to Bookstore", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  await page.waitForTimeout(5000);
  await page.fill(
    'input[placeholder="UserName"]',
    bookstoreConfig.credentials.username,
  );
  await page.fill(
    'input[placeholder="Password"]',
    bookstoreConfig.credentials.password,
  );
  await page.locator("#login").click();
  await expect(page.locator("#userName-value")).toBeVisible();
});
test("Should load books list", async ({ page }) => {
  await page.goto("https://demoqa.com/books");
  await page.waitForTimeout(5000);
  await expect(page.locator("[class*=ReactTable]")).waitFor({
    state: "visible",
  });
});

test("Should search for a book", async ({ page }) => {
  await page.goto("https://demoqa.com/books");
  await page.waitForTimeout(5000);
  await page.fill('input[type="search"]', "JS");
  await expect(page.locator("#see-book-You Don't Know JS")).toHaveCount(1);
});

test("Should open detailed info about a book", async ({ page }) => {
  await page.goto("https://demoqa.com/books");
  await page.waitForTimeout(5000);
  await page.click("#see-book-Git Pocket Guide");
  await expect(
    page.locator('//*[@id="userName-value" and text()="Git Pocket Guide"]'),
  ).toBeVisible();
});

test("Should logout from Bookstore", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  await page.waitForTimeout(5000);
  await page.fill(
    'input[placeholder="UserName"]',
    bookstoreConfig.credentials.username,
  );
  await page.fill(
    'input[placeholder="Password"]',
    bookstoreConfig.credentials.password,
  );
  await page.locator("#login").click();
  await expect(page).toHaveURL("https://demoqa.com/login");
});

/* eslint-disable no-unused-vars */
const { Page } = require("@playwright/test");

class MacPage {
  constructor(page) {
    this.page = page;

    this.openMacbookAir = page.locator(
      "li.chapternav-item.chapternav-item-macbook-air .chapternav-label",
    );
    this.buyMacbookAir = page.locator("li.hero-cta a.button").first();

    this.openMacbookPro = page.locator(
      "li.chapternav-item.chapternav-item-macbook-pro .chapternav-label",
    );
    this.buyMacbookPro = page.locator(
      "div.welcome__lockup > a.welcome__lockup-cta",
    );

    this.openIMac = page.locator(
      "li.chapternav-item.chapternav-item-imac .chapternav-label",
    );
    this.buyIMac = page.locator("a.ac-ln-button");

    this.openMacMini = page.locator(
      "li.chapternav-item.chapternav-item-mac-mini .chapternav-label",
    );
    this.buyMacMini = page.locator("a.ac-ln-button");

    this.openMacStudio = page.locator(
      "li.chapternav-item.chapternav-item-mac-studio .chapternav-label",
    );
    this.buyMacStudio = page.locator("a.ac-ln-button");

    this.openMacPro = page.locator(
      "li.chapternav-item.chapternav-item-mac-pro .chapternav-label",
    );
    this.buyMacPro = page.locator("a.ac-ln-button");

    this.openCompare = page.locator(
      "li.chapternav-item.chapternav-item-compare .chapternav-label",
    );

    this.openDisplays = page.locator(
      "li.chapternav-item.chapternav-item-displays .chapternav-label",
    );

    this.openAccessories = page.locator(
      "li.chapternav-item.chapternav-item-accessories .chapternav-label",
    );

    this.openMacOs = page.locator(
      "li.chapternav-item.chapternav-item-macos .chapternav-label",
    );

    this.openShopMac = page.locator(
      "li.chapternav-item.chapternav-item-shop .chapternav-label",
    );
  }

  async goto() {
    await this.page.goto("https://www.apple.com/mac/");
  }

  async clickBuyMacbookAir() {
    await this.openMacbookAir.click();
    await this.buyMacbookAir.click();
  }

  async clickBuyMacbookPro() {
    await this.openMacbookPro.click();
    await this.buyMacbookPro.click();
  }

  async clickBuyIMac() {
    await this.openIMac.click();
    await this.buyIMac.click();
  }

  async clickBuyMacMini() {
    await this.openMacMini.click();
    await this.buyMacMini.click();
  }

  async clickBuyMacStudio() {
    await this.openMacStudio.click();
    await this.buyMacStudio.click();
  }

  async clickBuyMacPro() {
    await this.openMacPro.click();
    await this.buyMacPro.click();
  }

  async clickCompareMacModels() {
    await this.openCompare.click();
  }

  async clickDisplays() {
    await this.openDisplays.click();
  }

  async clickAccessories() {
    await this.openAccessories.click();
  }

  async clickMacOs() {
    await this.openMacOs.click();
  }

  async clickShopMac() {
    await this.openShopMac.click();
  }
}

module.exports = { MacPage };

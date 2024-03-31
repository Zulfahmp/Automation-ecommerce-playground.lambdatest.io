import { Page, test, chromium } from "@playwright/test";
import { Validate } from "../helper/customKeyword";
const dotenv = require("dotenv");

test("Login", async ({ browser }) => {
  //redirect to url and url on config
  // await page.goto("/");
  //to hover dropdown
  // const browser = await chromium.launch();
  // const context = await browser.newContext();
  // const page = await context.newPage();

  const context = await browser.newContext({ storageState: "user.json" });
  const page = await context.newPage();

  await page.goto("/");
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  //get text
  const txtLogin = await page.textContent(
    "//span[text()[normalize-space()='Login']]"
  );
  new Validate(txtLogin, txtLogin);
  //click register in dropdown
  await page.click("//span[text()[normalize-space()='Login']]");

  await page.isVisible("//h2[text()='Returning Customer']", { timeout: 5000 });

  const txtReturningCustomer = await page.textContent(
    "//h2[text()='Returning Customer']"
  );

  new Validate(txtReturningCustomer, "Returning Customer");

  await page.fill("#input-email", process.env.Email as string);
  await page.fill("#input-password", process.env.Password as string);
  await page.click("//input[@class='btn btn-primary']");

  await page.pause();
});

import { Page, test, chromium } from "@playwright/test";
import { Validate } from "../helper/customKeyword.test";
import { login } from "../object-repositories/login";
const dotenv = require("dotenv");

const loginObject = new login();

test("Login", async ({ browser }) => {
  //load session after register
  const context = await browser.newContext({
    storageState: "session/user.json",
  });
  const page = await context.newPage();

  await page.goto("/");
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  //get text
  const txtLogin = await page.textContent(loginObject.menuLogin);
  new Validate(txtLogin, txtLogin);
  //click register in dropdown
  await page.click(loginObject.menuLogin);

  await page.isVisible(loginObject.textReturningCustomer, { timeout: 5000 });

  const txtReturningCustomer = await page.textContent(
    loginObject.textReturningCustomer
  );

  new Validate(txtReturningCustomer, "Returning Customer");

  await page.fill(loginObject.fieldEmail, process.env.Email as string);
  await page.fill(loginObject.fieldPassword, process.env.Password as string);
  await page.click(loginObject.btnLogin);
  await page.context().storageState({ path: "session/login.json" });
});

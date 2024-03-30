import { chromium, test } from "@playwright/test";
import { Validate, randomPhoneNumb } from "../helper/customKeyword";
import {
  uniqueNamesGenerator,
  Config,
  animals,
  colors,
  adjectives,
} from "unique-names-generator";
import { SlowBuffer } from "buffer";

const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: "",
  length: 2,
};

//generate random name
const name: string = uniqueNamesGenerator(customConfig);
console.log("Ini firstname " + name);
const lastName: string = uniqueNamesGenerator(customConfig);
console.log("Ini firstname " + lastName);

//generate random email
const email: string = uniqueNamesGenerator(customConfig); // big-donkey
console.log("Ini email " + email);
process.env.Email = email + "@yopmail.com";

test("Register", async ({ page }) => {
  //   const browser = await chromium.launch();
  //   const context = await browser.newContext();
  //   const page = await context.newPage();

  //redirect to url and url on config
  await page.goto("/");
  //to hover dropdown
  await page.hover("(//li[contains(@class,'nav-item dropdown')])[3]");
  //get text
  const txtRegist = await page.textContent(
    "//span[text()[normalize-space()='Register']]"
  );
  new Validate(txtRegist, "Register");
  //click register in dropdown
  await page.click("//span[text()[normalize-space()='Register']]");
  //get text Register Account
  const txtRegisterAccount = await page.textContent(
    "//h1[@class='page-title h3']"
  );
  //verify with custom keyword reuseable
  new Validate(txtRegisterAccount, "Register Account");
  await page.fill("#input-firstname", name);
  await page.fill("#input-lastname", lastName);
  await page.fill("#input-email", email + "@yopmail.com");
  await page.fill("#input-telephone", randomPhoneNumb(12));
  await page.fill("#input-password", "11223344");
  await page.fill("#input-confirm", "11223344");
  await page.click("(//label[@class='custom-control-label'])[1]");
  await page.click("(//label[@class='custom-control-label'])[3]");
  await page.click("//input[@class='btn btn-primary']");
  //verify text success register is present
  await page.isVisible("//h1[@class='page-title my-3']");
  //Verify success register
  const txtSccssRegist = await page.textContent(
    "//h1[@class='page-title my-3']"
  );
  console.log(txtSccssRegist);
  new Validate(txtSccssRegist, "Your Account Has Been Created!");
  await page.click("//a[contains(text(),'Continue')]");
});

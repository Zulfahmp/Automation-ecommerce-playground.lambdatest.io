import { chromium, test } from "@playwright/test";
import {
  Validate,
  randomPhoneNumb,
  fristNameRender,
  lastNameRender,
  emailRender,
} from "../helper/customKeyword.test";
import { register } from "../object-repositories/register";

const registerObject = new register();

test("Register", async ({ page }) => {
  //redirect to url and url on config
  await page.goto("/");
  //to hover dropdown
  await page.hover(registerObject.myAccountHover);
  //get text
  const txtRegist = await page.textContent(registerObject.menuRegister);
  new Validate(txtRegist, "Register");
  //click register in dropdown
  await page.click(registerObject.menuRegister);
  //get text Register Account
  const txtRegisterAccount = await page.textContent(
    registerObject.textRegisterAccount
  );
  //verify with custom keyword reuseable
  new Validate(txtRegisterAccount, "Register Account");
  await page.fill(registerObject.fieldFirstName, fristNameRender);
  await page.fill(registerObject.fieldLastName, lastNameRender);
  await page.fill(registerObject.fieldEmail, emailRender);
  await page.fill(registerObject.fieldTelephone, randomPhoneNumb(12));
  await page.fill(registerObject.fieldPassword, process.env.Password as string);
  await page.fill(
    registerObject.fieldConfirmPassword,
    process.env.Password as string
  );
  await page.click(registerObject.radioBtnSubscribeY);
  await page.click(registerObject.checkboxPrivacyPolice);
  await page.click(registerObject.btnRegister);
  //verify text success register is present
  await page.isVisible(registerObject.textSuccessRegister);
  //Verify success register
  const txtSccssRegist = await page.textContent(
    registerObject.textSuccessRegister
  );
  console.log(txtSccssRegist);
  new Validate(txtSccssRegist, "Your Account Has Been Created!");
  await page.click(registerObject.btnContinue);
  //to hover dropdown
  await page.hover(registerObject.myAccountHover);
  //verify logout is visible
  await page.isVisible(registerObject.menuLogout);
  //click logout
  await page.click(registerObject.menuLogout);
  //verify logout success
  await page.isVisible(registerObject.textAccountLogout);
  const txtAccountLogout = await page.textContent(
    registerObject.textAccountLogout
  );
  new Validate(txtAccountLogout, " Account Logout");
  await page.click(registerObject.btnContinue);
  //make session
  await page.context().storageState({ path: "session/user.json" });
});

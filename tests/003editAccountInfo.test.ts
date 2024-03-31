import { Page, test, Browser } from "@playwright/test";
import {
  Validate,
  fristNameRender,
  lastNameRender,
  emailRender,
  randomPhoneNumb,
} from "../helper/customKeyword.test";
import { EditAccountInfo } from "../object-repositories/editAccountInfo";

const eaiObject = new EditAccountInfo();

test("Edit Account Information", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "session/login.json",
  });
  const page = await context.newPage();

  await page.goto(eaiObject.urlEAI);
  await page.isVisible(eaiObject.menuEditYourAccountInformation);
  await page.click(eaiObject.menuEditYourAccountInformation);
  await page.isVisible(eaiObject.textMAI);
  const txtMyAccInfo = await page.textContent(eaiObject.textMAI);
  new Validate(txtMyAccInfo, "My Account Information");
  //get value form field after register
  const fristName = await page.getAttribute(eaiObject.fieldFristName, "value");
  const lastName = await page.getAttribute(eaiObject.fieldLastName, "value");
  const email = await page.getAttribute(eaiObject.fieldEmail, "value");
  const telephone = await page.getAttribute(eaiObject.fieldTelephone, "value");
  //validate value in field and value from register
  new Validate(fristName, process.env.FirstName);
  new Validate(lastName, process.env.LastName);
  new Validate(email, process.env.Email);
  new Validate(telephone, process.env.PhoneNumber);
  //edit with new value
  await page.fill(eaiObject.fieldFristName, fristNameRender);
  await page.fill(eaiObject.fieldLastName, lastNameRender);
  await page.fill(eaiObject.fieldEmail, emailRender);
  await page.fill(eaiObject.fieldTelephone, randomPhoneNumb(12));
  await page.click(eaiObject.btnContinue);
  await page.isVisible(eaiObject.textAlertSuccessEdit);
  const txtAlertSuccessEdit = await page.textContent(
    eaiObject.textAlertSuccessEdit
  );
  new Validate(
    txtAlertSuccessEdit,
    " Success: Your account has been successfully updated."
  );
  await page
    .context()
    .storageState({ path: "session/editAccountInformation.json" });
});

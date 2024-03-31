export class EditAccountInfo {
  urlEAI: string =
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account";
  menuEditYourAccountInformation: string =
    "//a[contains(.,'Edit your account information')]";
  textMAI: string = "//h1[text()='My Account Information']";
  fieldFristName: string = "#input-firstname";
  fieldLastName: string = "#input-lastname";
  fieldEmail: string = "#input-email";
  fieldTelephone: string = "#input-telephone";
  btnContinue: string = "//input[@class='btn btn-primary']";
  textAlertSuccessEdit: string =
    "//div[contains(@class,'alert alert-success')]";
}

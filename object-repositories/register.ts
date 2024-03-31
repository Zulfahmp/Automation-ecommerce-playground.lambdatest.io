export class register {
  myAccountHover: string = "(//li[contains(@class,'nav-item dropdown')])[3]";
  menuRegister: string = "//span[text()[normalize-space()='Register']]";
  textRegisterAccount: string = "//h1[@class='page-title h3']";
  fieldFirstName: string = "#input-firstname";
  fieldLastName: string = "#input-lastname";
  fieldEmail: string = "#input-email";
  fieldTelephone: string = "#input-telephone";
  fieldPassword: string = "#input-password";
  fieldConfirmPassword: string = "#input-confirm";
  radioBtnSubscribeY: string = "(//label[@class='custom-control-label'])[1]";
  checkboxPrivacyPolice: string = "(//label[@class='custom-control-label'])[3]";
  btnRegister: string = "//input[@class='btn btn-primary']";
  textSuccessRegister: string = "//h1[@class='page-title my-3']";
  btnContinue: string = "//a[contains(text(),'Continue')]";
  menuLogout: string = "//span[text()[normalize-space()='Logout']]";
  textAccountLogout: string = "//h1[@class='page-title my-3']";
}

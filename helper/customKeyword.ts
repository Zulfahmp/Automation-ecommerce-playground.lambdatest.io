export class Validate {
  constructor(txt1, txt2) {
    if (txt1 === txt2) {
      console.log(txt1 + " sama dengan " + txt2);
    } else {
      console.log(txt1 + " text tidak sama " + txt2);
    }
  }
}

//random email with randomize character
export function randomPhoneNumb(length) {
  let result = "";
  const character = "0123456789";
  const charactersLength = character.length;
  let counter = 0;
  while (counter < length) {
    result += character.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

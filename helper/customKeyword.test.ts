import {
  uniqueNamesGenerator,
  Config,
  animals,
  colors,
  adjectives,
} from "unique-names-generator";

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
  process.env.PhoneNumber = result;
  return result;
}

//config render random
const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: "",
  length: 2,
};

//generate random firstname
export const fristNameRender: string = uniqueNamesGenerator(customConfig);
console.log("Ini firstname " + fristNameRender);
process.env.FirstName = fristNameRender;

//generate random lastname
export const lastNameRender: string = uniqueNamesGenerator(customConfig);
console.log("Ini lastname " + lastNameRender);
process.env.LastName = lastNameRender;

//generate random email
export const emailRender: string =
  uniqueNamesGenerator(customConfig) + "@yopmail.com";
console.log("Ini email " + emailRender);
process.env.Email = emailRender;

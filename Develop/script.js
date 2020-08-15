// Assignment code here

//click button to generate password  ----- generateBtn.addEventListener("click", writePassword);

// prompts for password criteria
// set arrays for pw criteria
var lowerCaseAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var upperCaseAlpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var specialChars = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "'",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "?",
  "@",
  "[",
  "]",
  "{",
  "}",
  "|",
  "~"
];
var numbers = [
1,
2,
3,
4,
5,
6,
7,
8,
9,
0
];

// ---prompt for length of password at least 8 but no more than 128
// --- prompt character types
//----- uppercase letters
//----- lowecase letters
//----- numbers
//----- special characters

// after each character type, validate to ensure at least one character type has been chosen

// when all prompts answered
// -- generate password
// -- password displayed in alert or written to the page






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//click button to generate password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
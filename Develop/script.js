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
var definePasswordLength = function() {
  var pwLength = window.prompt("How many characters would you like your password to be?");
  parseInt(pwLength);
  console.log(pwLength);
  if (pwLength < 8 || pwLength > 128) {
    window.alert("You must choose a length of at least 8 and no more than 128. Please try again.");
    return definePasswordLength();
  } // end var length
}; // end definePassword Length funtion

var definePasswordCriteria = function() {

  // --- prompt character types - letters, numbers, special chars
  var includeLowerCase = window.confirm("Click OK to include lower case letters");
  console.log(includeLowerCase);
  
  var includeUpperCase = window.confirm("Click OK to include UPPER case letters");
  console.log(includeUpperCase);
  
  var includeNumbers = window.confirm("Click OK to include numbers");
  console.log(includeNumbers);
  
  var includeSpecialChars = window.confirm("Click OK to include special characters");
  console.log(includeSpecialChars);
 
// after each character type, validate to ensure at least one character type has been chosen
  if (includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSpecialChars === false ) {
    window.alert("You must choose at least one character type. Please try again.");
   return definePasswordCriteria();
  }

}; // end define password criteria
//make sure password is the length specified and has the criteria specified



definePasswordLength();
definePasswordCriteria();

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
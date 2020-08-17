// Assignment code here

//click button to generate password  ----- generateBtn.addEventListener("click", writePassword);

// prompts for password criteria
// set arrays for pw criteria
var pwArray = '';
var optionConfirm = '';
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
var generatePassword = function() {
  
  var definePasswordLength = function() {
    pwLength = window.prompt("How many characters would you like your password to be?");
    parseInt(pwLength);
    console.log(pwLength);
    if (pwLength < 8 || pwLength > 128) {
      window.alert("You must choose a length of at least 8 and no more than 128. Please try again.");
      return definePasswordLength();
    } // end var length
    if (isNaN(pwLength)) {
      window.alert("The length of your password must be a number. Please try again.");
      return definePasswordLength();
    }
  }; definePasswordLength();
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
   return generatePassword();
  }

  // three options chosen
  if (includeLowerCase === false && includeUpperCase === true && includeNumbers === true && includeSpecialChars === true ) {
   // password includes all but lowercase letters  
  optionConfirm = window.confirm("Your password will contain upper case letters, numbers and special characters. Click OK to generate password.");
  if(optionConfirm) {
    pwArray = upperCaseAlpha.concat(numbers, specialChars);
    console.log(pwArray);
    }
  } 

  else if (includeLowerCase === true && includeUpperCase === false && includeNumbers === true && includeSpecialChars === true  ) {
    // password includes all but uppercase letters 
    optionConfirm = window.confirm("Your password will contain lower case letters, numbers and special characters. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = lowerCaseAlpha.concat(numbers, specialChars);
      console.log(pwArray);
    }
  } 

  else if (includeLowerCase === true && includeUpperCase === true && includeNumbers === false && includeSpecialChars === true  ) {
    // password includes all but numbers 
    optionConfirm = window.confirm("Your password will contain lower case letters, upper case letters and special characters. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = lowerCaseAlpha.concat(upperCaseAlpha, specialChars);
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === true && includeUpperCase === true && includeNumbers === true && includeSpecialChars === false  ) {
    // password includes all but special characters
    optionConfirm = window.confirm("Your password will contain lower case letters, upper case letters and numbers. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = lowerCaseAlpha.concat(upperCaseAlpha, numbers);
      console.log(pwArray);
    }
  } 
  // two options chosen
  else if (includeLowerCase === false && includeUpperCase === false && includeNumbers === true && includeSpecialChars === true  ) {
    // password includes only numbers and special characters
    confirmOption = window.confirm("Your password will contain numbers and special characters. Click OK to generate password.");
    if(confirmOption) {
      pwArray = numbers.concat(specialChars);
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === true && includeUpperCase === true && includeNumbers === false && includeSpecialChars === false  ) {
    // password includes only upper and lower case letters
    confirmOption =  window.confirm("Your password will contain upper and lower case letters. Click OK to generate password.");
    if(confirmOption) {
      pwArray = lowerCaseAlpha.concat(upperCaseAlpha);
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === true && includeUpperCase === false && includeNumbers === true && includeSpecialChars === false  ) {
    // password includes only numbers and lowercase letters
    confirmOption = window.confirm("Your password will contain numbers and lower case letters. Click OK to generate password.");
    if (confirmOption) {
      pwArray = lowerCaseAlpha.concat(numbers);
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === false && includeUpperCase === true && includeNumbers === false && includeSpecialChars === true  ) {
    // password includes only upper and special characters
    confirmOption = window.confirm("Your password will contain special characters and upper case letters. Click OK to generate password.");
    if (confirmOption) {
      pwArray = upperCaseAlpha.concat(specialChars);
      console.log(pwArray);
    }
  }

  else if (includeLowerCase === true && includeUpperCase === false && includeNumbers === false && includeSpecialChars === true  ) {
    // password includes only special characters and lowercase letters
    optionConfirm = window.confirm("Your password will contain special characters and lower case letters. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = lowerCaseAlpha.concat(specialChars); 
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === false && includeUpperCase === true && includeNumbers === true && includeSpecialChars === false  ) {
    // password includes only upper and numbers
    confirmOption = window.confirm("Your password will contain numbers and upper case letters. Click OK to generate password.");
    if(confirmOption) {
      pwArray = upperCaseAlpha.concat(numbers);
      console.log(pwArray);
    }
  }
  
  // one option chosen
  else if (includeLowerCase === true && includeUpperCase === false && includeNumbers === false && includeSpecialChars === false  ) {
    // password includes only lower case letters
    optionConfirm = window.confirm("Your password will contain only lower case letters. Click OK to generate password.");
    if (optionConfirm) {
      pwArray = lowerCaseAlpha;
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === false && includeUpperCase === true && includeNumbers === false && includeSpecialChars === false  ) {
    // password includes only upper case letters
    optionConfirm = window.confirm("Your password will contain only upper case letters. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = upperCaseAlpha;
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === false && includeUpperCase === false && includeNumbers === true && includeSpecialChars === false  ) {
    // password includes only numbers
    optionConfirm = window.confirm("Your password will contain only numbers. Click OK to generate password.");
    if(optionConfirm) {
      pwArray = numbers;
      console.log(pwArray);
    }
  } 
  
  else if (includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSpecialChars === true  ) {
    // password includes only special characters
   optionConfirm =  window.confirm("Your password will contain only special characters. Click OK to generate password.");
   if(optionConfirm) {
     pwArray = specialChars;
     console.log(pwArray);
   }
  } 
  // all are true
  else if(includeLowerCase === true && includeUpperCase === true && includeNumbers === true && includeSpecialChars === true ) {
      // all are true
      optionConfirm = window.confirm("Your password will contain all lower and upper case letters, numbers and special characteres. Click OK to generate password.");
      if(optionConfirm) {
        pwArray = lowerCaseAlpha.concat(upperCaseAlpha, numbers, specialChars);
        console.log(pwArray);
      }
  } 
  // have not included correct options
  else {
    window.alert("Our bad! We have not included your selection yet!");
  }
  
  console.log(pwLength);
//  for (let pwArray = 0; pwArray = ; pwArray++) {
//   console.log(pwArray);
//  }

  var getPassword =[];
  for (var i = 0; i < pwLength; i++) {
  var randomValues = pwArray[Math.floor(Math.random() * pwArray.length)];
  getPassword = getPassword.concat(randomValues);
}



console.log(getPassword.join(''));
window.alert(getPassword);

}; // end define password criteria
//make sure password is the length specified and has the criteria specified

generatePassword();
// -- generate password
// -- password displayed in alert or written to the page

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword(getPassword);
  document.getElementById('password').value = writePassword(getPassword);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//click button to generate password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
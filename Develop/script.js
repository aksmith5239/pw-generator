// Assignment code here

// Create password criteria
// character types
//generate array of letters lower and uppercase

var lowerCaseAlpha = ["a", "b", "c", "d", "e", "f", "g" , "h"];
var upperCaseAlpha = ["A", "B", "C"];
var specialChars = ["!", "# ", "$"];
var numChar = [1,2,3,4,5,6,7,8,9,0];

//generate array of numbers
// random numbers to generate those number
//!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
//generate array of special chars
//specialChars = array['!', '@'];


// prompt length of password at min 8 max 128
// choose length of password
var pwGenLength = function() {
  var pwLength = window.prompt("Select the number of characters you want in your password. Starting with 8 and up to 128?");
  pwLength = parseInt(pwLength);
  console.log(pwLength);
  if(isNaN(pwLength) === true) {
    alert('Password length must be a number');
}
  if (pwLength => 8 && pwLegnth <= 128) {
    // valdidate the length of the password
  } else {
    window.alert("Password must be between 8 and 128 characters. Try again");
    return pwGenLenth();
} 


};


// var lowerCase = confirm("Click OK if you want lowercase letters");
// var upperCase = confirm("Click OK to have uppercase letters in your password");
// var isSpecial = confirm("Click OK to have special characters in your password");
// var isNumber = confirm("Click OK to include numbers in your password");

//window.alert("Select the number of characters you want in your password. Starting with 8 and up to 128?");

// var getPwOptions = function () {
// // Do you want to use lowercase letters? confirm
// var lower = window.confirm("do you want to use lowercase?");
// if (lower) {
//   //choose lower alpha
//   // lowerAlpha = true;
// } else {
//   // break out of lower
// };
// // Do you want to use uppercase letters? confirm
// if (upperAlpha) {
//   //choose lower alphe
// } else {
//   // no upper alpha
// };
// // Do you want to use numbers? confirm
// if (numbers) {

// } else {

// };
// // Do you want to use specialChars? confirm
//   if (specialChars) {

// } else {
  
// };
// }


// prompt for letters
// validate -  at least one character type selected
// prompt for numbers
// validate
//prompt for special chars
// validate

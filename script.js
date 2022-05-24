// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var numberOfCharacters = parseInt(prompt("Choose a length between 8 and 128"));
  var useLowercase = prompt("would you like yo use lowercase letters, y or n?");
  var useUppercase = prompt("Would you like to use uppercase letters, y or n?");
  var useSpecial = prompt("would you like to use special characters, y or n?");
  
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    init();
  } else {
    alert("total length must be between 8 and 128 characters");
  }

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
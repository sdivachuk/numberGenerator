// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var numberOfCharacters = parseInt(prompt("Choose a length between 8 and 128"));

  // if statement that makes sure user input is between 8 and 128 characters or it send warning
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("total length must be between 8 and 128 characters");
    return generatePassword();
  }

  // statements that allow user to select type of characters
  var characterPool = "";
  var useLowercase = confirm("would you like to use lowercase letters?");
  var useUppercase = confirm("Would you like to use uppercase letters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSpecial = confirm("would you like to use special characters?");

  // if statements that add character type based on user input 
  if(useLowercase === true){
    characterPool += lowercase;
  }
  if(useUppercase === true){
    characterPool += uppercase;
  }
  if(useSpecial === true){
    characterPool += special;
  }
  if(useNumbers === true){
    characterPool += numbers;
  }
  // if statement that is triggered if user declines all character types. Causes user to choose by redirecting back to begining 
  if(!useLowercase && !useUppercase && !useNumbers && !useSpecial){
    alert("You must select at least one type of character");
    return generatePassword();
  }
  var compiledPassword = "";
// for loop that compiles character types and multiplies by user defined length of password
  for (var i = 0; i < numberOfCharacters; i++){

    compiledPassword += characterPool.charAt(
      Math.floor(Math.random() * numberOfCharacters));
  }
  console.log(characterPool);
  console.log(numberOfCharacters);
  console.log(compiledPassword);
  return compiledPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
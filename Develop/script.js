// Assignment code here
// Query Selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
// Generate password function
function generatePassword() {
  // Prompt for password length
  var passwordLength = prompt("How many characters would you like your password to contain?");
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }
  // Prompt for character types
  var includeLowercase = confirm("Click OK to confirm including lowercase characters");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters");
  var includeNumbers = confirm("Click OK to confirm including numeric characters");
  var includeSpecialCharacters = confirm("Click OK to confirm including special characters");
  // Validate character types
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Must select at least one character type");
    return;
  }
  // Generate password
  var password = "";
  var possibleCharacters = "";
  if (includeLowercase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    possibleCharacters += "0123456789";
  }
  if (includeSpecialCharacters) {
    possibleCharacters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  for (var i = 0; i < passwordLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

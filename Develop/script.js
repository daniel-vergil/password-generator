// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute('placeholder', password);
  window.alert(password);
};

// function to return number of characters for the password
function passwordCharacters() {
  length = window.prompt("Enter the length of the password. Choose a length of at least 8 characters and no more than 128 characters");
  if (length < 8 || length > 128 || isNaN(length)) {
    window.alert("Choose a length of at least 8 characters and no more than 128 characters");
    passwordCharacters();
  }
  return length;
};

// function to generate password 
// create an object to receive the password requirements
function generatePassword() {
  passwordCharacters();
  var passwordCharRequirements = {
    lowerCase: confirm("Do you want to include lowercase?"),
    upperCase: confirm("Do you want to include uppercase?"),
    numbers: confirm("Do you want to include numbers?"),
    specialChars: confirm("Do you want to include special characters?")
  }
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = '0123456789';
  var specialChars = " !\"\#$%&\'\()*+,-./:;<=>?@[\]^_`{|}~/";

  var lowerCaseResult = "";
  var upperCaseResult = "";
  var numberResult = "";
  var specialCharsResult = "";

  if (passwordCharRequirements.lowerCase) {
    for (var i = 0; i < length; i++) {
      lowerCaseResult += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    }
  }

  if (passwordCharRequirements.upperCase) {
    for (var i = 0; i < length; i++) {
      upperCaseResult += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    }
  }
  if (passwordCharRequirements.numbers) {
    for (var i = 0; i < length; i++) {
      numberResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }
  if (passwordCharRequirements.specialChars) {
    for (var i = 0; i < length; i++) {
      specialCharsResult += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
  }
  var finalPasswordString = String(lowerCaseResult) + String(upperCaseResult) + String(numberResult) + String(specialCharsResult);
  var password = "";
  for (var i = 0; i < length; i++) {
    password += finalPasswordString.charAt(Math.floor(Math.random() * finalPasswordString.length));
  }
  if (password.length <=0) {
    password = "Invalid password requirement selection. Select at least one password criteria.";
  }
  return password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});
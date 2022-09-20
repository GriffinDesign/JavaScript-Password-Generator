// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersList = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numbersList);
var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerCaseList);
var upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(upperCaseList);
var specialCharactersList = ["!","@","#","$","%","^","&","*","(",")","_","+"];
console.log(specialCharactersList);
var passwordCharacterOptions = [];
console.log(passwordCharacterOptions);
//var promptInput = window.prompt("Please specify the length of your password (must be between 8 and 128 characters!)", "Enter length");
//
//

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min )
}

function generatePassword() {
  
  var promptInput = window.prompt("Please specify the length of your password (must be between 8 and 128 characters!)", "Enter length");
  var passwordLength = parseFloat(promptInput)

  if (isNaN(passwordLength)) {
    window.alert("ERROR: Please input only numbers.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must only be between 8 to 128 characters.")
    return
  }

  var selectedNumbers = window.confirm("Your password should contain numbers?")
  var selectedLowerCase = window.confirm("Your password should contain lowercase letters?")
  var selectedUpperCase = window.confirm("Your password should contain uppercase letters?")
  var selectedSpecialCharacters = window.confirm("Your password should contain special characters?")

  if(selectedNumbers === true) {
    passwordCharacterOptions.push(numbersList)
  } else {
    console.log(false);
  }

  if(selectedLowerCase === true) {
    passwordCharacterOptions.push(lowerCaseList)
  } else {
    console.log(false);
  }

  if(selectedUpperCase === true) {
    passwordCharacterOptions.push(upperCaseList)
  } else {
    console.log(false);
  }

  if(selectedSpecialCharacters === true) {
    passwordCharacterOptions.push(specialCharactersList)
  } else {
    console.log(false);
  }

 
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(passwordCharacterOptions);
    var randomChar = getRandomItem(randomList);
    generatePassword += randomChar
  }

  var generatePassword = ""
  console.log(generatePassword)
  return generatePassword
};

// Write password to the #password input

function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   


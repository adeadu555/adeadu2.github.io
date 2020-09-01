
var question = prompt("length of password?");
var question2 = prompt("What character types do you want?");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%*()_-+";
  var password = " ";

  for (var i = 0; i < values; i++) {

    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  return password 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//
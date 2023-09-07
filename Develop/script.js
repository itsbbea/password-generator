// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 8 > 128;

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var char = "!@#$%^&*()";

var allChars = upperCase + lowerCase + number + Symbol;

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

var password = "";
password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += number[Math.floor(Math.random() * number.length)];
password += char[Math.floor(Math.random() * char.length)];

while (length > password.length) {
  password += allChars[Math.floor(Math.random() * allChars.length)];

}

var passwordLength = prompt("Please enter the number of characters");
var numbers = confirm("Do you want numbers in your password?");
var lowerCases = confirm("Do you want lower cases in your password?");
var upperCases = confirm("Do you want upper cases in your password?");
var special = confirm("Do you want special characters in your password?");

var minimumCount = 0;

var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";

passwordText.value = password;

// //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


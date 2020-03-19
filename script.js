// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

    // var passwordLength = prompt("Please choose the desired length of your password.");
    // var passwordLowercase = confirm("Would you like to include lowercase letters?");
    // var passwordUppercase = confirm("Would you like to include uppercase letters?");
    // var passwordNumbers = confirm("Would you like to include numbers?");
    // var passwordSymbols = confirm("Would you like to include special characters?");
    
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~";
    
    var passwordLength;
    var passwordUppercase;
    var passwordLowercase;
    var passwordNumbers;
    var passwordSymbols;
    
    var passwordLength = prompt("Please choose the desired length of your password, between 8-128 characters.");
  
    if (passwordLength<8){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
    return passwordLength;
  
    passwordUppercase = confirm("Would you like to include uppercase letters?");
  
    if (passwordUppercase === "confirm"){
      passwordUppercase = true;
      return passwordUppercase;
  
    }else (passwordUppercase === "cancel"){
      passwordUppercase = false;
      return passwordUppercase;
    }
      
    passwordLowercase = confirm("Would you like to include lowercase letters?");
  
    if (passwordLowercase === "confirm"){
      passwordLowercase = true;
      return passwordLowercase;
  
    }else (passwordLowercase === "cancel"){
      passwordLowercase = false;
      return passwordLowercase;
    }
  
    passwordNumbers = prompt("Would you like to include numbers?");
  
    if (passwordNumbers === "confirm"){
      passwordNumbers = true;
      return passwordNumbers;
  
    }else if (passwordNumbers === "cancel"){
      passwordNumbers = false;
      return passwordNumbers;
    }
  
    passwordSymbols = prompt("Would you like to include special characters?");
  
    if (passwordSymbols === "confirm"){
      passwordSymbols = true;
      return passwordSymbols;
  
    }else if (passwordSymbols === "cancel"){
      passwordSymbols = false;
      return passwordSymbols;
      }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
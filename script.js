// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {

    // Originally tried the method below, realized the confirm's needed to be further down:
    // var passwordLength = prompt("Please choose the desired length of your password.");
    // var passwordLowercase = confirm("Would you like to include lowercase letters?");
    // var passwordUppercase = confirm("Would you like to include uppercase letters?");
    // var passwordNumbers = confirm("Would you like to include numbers?");
    // var passwordSymbols = confirm("Would you like to include special characters?");
    
    var password = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~";

    var passwordLength = prompt("Please choose the desired length of your password, between 8-128 characters.");

    if (passwordLength < 8) {
        alert("Password length must be between 8-128 characters");
        determineLength();
    } else if (passwordLength > 128) {
        alert("Password length must be between 8-128 characters");
        determineLength();
    } else if (isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    }
    console.log(passwordLength)

    var passwordUppercase = confirm("Would you like to include uppercase letters?");
    console.log(passwordUppercase)
    // Realized code below is redundant:
    // if (passwordUppercase === "confirm") {
    //     passwordUppercase = true;
    //     return passwordUppercase;

    // } else if (passwordUppercase === "cancel") {
    //     passwordUppercase = false;
    //     return passwordUppercase;
    // }

    var passwordLowercase = confirm("Would you like to include lowercase letters?");
    console.log(passwordLowercase)
    // Realized code below is redundant:
    // if (passwordLowercase === "confirm") {
    //     passwordLowercase = true;
    //     return passwordLowercase;

    // } else if (passwordLowercase === "cancel") {
    //     passwordLowercase = false;
    //     return passwordLowercase;
    // }

    var passwordNumbers = confirm("Would you like to include numbers?");
    console.log(passwordNumbers)
    // Realized code below is redundant:
    // if (passwordNumbers === "confirm") {
    //     passwordNumbers = true;
    //     return passwordNumbers;

    // } else if (passwordNumbers === "cancel") {
    //     passwordNumbers = false;
    //     return passwordNumbers;
    // }

    var passwordSymbols = confirm("Would you like to include special characters?");
    console.log(passwordSymbols)
    // Realized code below is redundant:
    // if (passwordSymbols === "confirm") {
    //     passwordSymbols = true;
    //     return passwordSymbols;

    // } else if (passwordSymbols === "cancel") {
    //     passwordSymbols = false;
    //     return passwordSymbols;
    // }

    var passwordList = ""
    if (passwordUppercase) {
        passwordList += uppercase
        console.log(passwordList)
    }
    if (passwordLowercase) {
        passwordList += lowercase
        console.log(passwordList)
    }
    if (passwordNumbers) {
        passwordList += numbers
        console.log(passwordList)
    }
    if (passwordSymbols) {
        passwordList += symbols
        console.log(passwordList)
    }
    console.log("passwordList ",passwordList)
    if (passwordList.length<1){
        alert ("You did not select any characters. Try again!")
        return ""
    }
    for (var i = 0; i < passwordLength; i++) {
        password += passwordList.charAt(Math.floor(Math.random() * passwordList.length));
    }
    console.log(password)
      return password;
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
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Initialize an OBJECT filled with ARRAYS corresponding to specific character types
var dataV1 = {
    upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0","1","2","3","4","5","6","7","8","9"],
    special: ["!","?","#","$","%","&"]
};

// Initialize the password length as 0
var passwordLength = 0;
// Ask the user for a password length.
// It repeats the prompt until they enter a value that is within of 8 to 128 characters.
// It also repeats the prompt if a user enters something that is not a number
while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)===true) {
    var passwordLength = prompt("How many characters would you like? \n Select between 8 and 128 characters.");
};

// Prompt the users regarding what type of characters they would like to include
var userWantUpperCase = confirm("Do you want upper case characters? \n A, B, C, etc. \n Okay for yes, cancel for no");
var userWantLowerCase = confirm("Do you want lower case characters? \n a, b, c, etc. \n Okay for yes, cancel for no");
var userWantNumbers = confirm("Do you want numeric characters? \n 1, 2, 3, etc. \n Okay for yes, cancel for no");
var userWantSpecial = confirm("Do you want special characters? \n !, ?, #, etc. \n Okay for yes, cancel for no");

// Initialize a blank array to store the random password characters
// The length of the array is set by the passwordLength variable, provided by the user
// The earlier prompt stored passwordLength as a string, so it needs to be converted to a number
var initialArray = new Array(Number(passwordLength))



// PUT ALL THE NUMBERS INTO AN ARRAY
// CONCATENATE THE ARRAY AT THE END








// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

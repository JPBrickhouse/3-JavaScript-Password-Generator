// REFINED AND SIMPLIFIED JAVASCRIPT FILE

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Putting EVERYTHING in a function that will return a random password!
function generatePassword () {
    // Initialize four strings with all the character requirements
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var special = "!?#$%&";

    // Initialize two variables that are both empty strings
    // password will hold the final password
    // option will hold the character options availabe to generate the random password
    var password = "";
    var options = "";

    // Ask the user for a password length.
    // It repeats the prompt until they enter a value that is within of 8 to 128 characters.
    // It also repeats the prompt if a user enters something that is not a number
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)===true) {
        var passwordLength = prompt("How many characters would you like? \n Select between 8 and 128 characters.");
    };

    // Prompt the users regarding what type of characters they would like to include
    var userWantUpperCase = confirm("Do you want upper case characters? \n A, B, C, etc. \n Okay for YES, cancel for NO");
    var userWantLowerCase = confirm("Do you want lower case characters? \n a, b, c, etc. \n Okay for YES, cancel for NO");
    var userWantNumbers = confirm("Do you want numeric characters? \n 1, 2, 3, etc. \n Okay for YES, cancel for NO");
    var userWantSpecial = confirm("Do you want special characters? \n !, ?, #, etc. \n Okay for YES, cancel for NO");

    // Run through four if statements: if the user previously wanted a particular
    // type of character, append those to the previously empty options string
    // The operator += works as follows: x+=y is the same as x=x+y
    if (userWantUpperCase) {
        options += upperCase;
    }
    if (userWantLowerCase) {
        options += lowerCase;
    }
    if (userWantNumbers) {
        options += numbers;
    }
    if (userWantSpecial) {
        options += special;
    }
    // If no character types are selected, a message displays asking the user to try again.
    if (!userWantUpperCase && !userWantLowerCase && !userWantNumbers && !userWantSpecial) {
        password = "No character types selected, so no password generated. \n Please try again."
        return password;
    }

    // Using a for loop to loop through the following:
    // Generate a random number based on the length of the options string
    // Take a random character from within the options string
    // Append that random character to the previously empty password string
    // Loop until it reaches the limit established by passwordLength, prompted earlier
    for (i=0; i < passwordLength; i++) {
        password += options[Math.floor(Math.random() * options.length)];
    };

    // Returning password for the result of the function
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
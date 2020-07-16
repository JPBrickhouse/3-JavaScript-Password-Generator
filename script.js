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
// Done with assistance from this Stack Overflow thread: https://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar
// The length of the array is set by the passwordLength variable, provided by the user
// The earlier prompt stored passwordLength as a string, so it needs to be converted to a number
// Done with assistance fro this Stack Overflow thread: https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
var initialArray = new Array(Number(passwordLength))


// Using a for loop to loop through the initialArray and assign each index with a random character, based on the user's input preferences from before
for (i=0; i < initialArray.length; i++) {
    
    // These functions below will generate random whole numbers within a range
    // The range corresponds to the possible index values of the variables in question
    // For example: dataV1.uppercase has a length of 26.
    // The random numbers will be between 0 and 25, inclusive.
    // That means I use that random number to select a value from within that array
    // Done with assistance from Mozilla developer notes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Done with assstance from this Stack Overflow thread: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    var upperCaseRandom = Math.floor(Math.random() * Math.floor(dataV1.upperCase.length));
    var lowerCaseRandom = Math.floor(Math.random() * Math.floor(dataV1.lowerCase.length));
    var numbersRandom = Math.floor(Math.random() * Math.floor(dataV1.numbers.length));
    var specialRandom = Math.floor(Math.random() * Math.floor(dataV1.special.length));
    // Selecting a value from within the array, using the random numbers generated above
    var upperCaseChar = dataV1.upperCase[upperCaseRandom];
    var lowerCaseChar = dataV1.lowerCase[lowerCaseRandom];
    var numbersChar = dataV1.numbers[numbersRandom];
    var specialChar = dataV1.special[specialRandom];


    // Based on the parameters the user selected, create an mini-array of those random characters, entitled characterSelectionArray
    // (Note: I feel like there should be a more simple way to accomplish this... This feels a little brute force, as I have manually listed all possible combinations of the user parameters.)

    // User selected the following: Uppercase
    if (userWantLowerCase === false && userWantUpperCase === true && userWantNumbers === false && userWantSpecial === false) {
        var characterSelectionArray = [upperCaseChar];
    }
    // User selected the following: Lowercase
    else if (userWantLowerCase === true && userWantUpperCase === false && userWantNumbers === false && userWantSpecial === false) {
        var characterSelectionArray = [lowerCaseChar];    
    }
    // User selected the following: Numeric
    else if (userWantLowerCase === false && userWantUpperCase === false && userWantNumbers === true && userWantSpecial === false) {
        var characterSelectionArray = [numbersChar];
    }
    // User selected the following: Special Characters
    else if (userWantLowerCase === false && userWantUpperCase === false && userWantNumbers === false && userWantSpecial === true) {
        var characterSelectionArray = [specialChar];    
    }
    // User selected the following: Lowercase, Uppercase
    else if (userWantLowerCase === true && userWantUpperCase === true && userWantNumbers === false && userWantSpecial === false) {
        var characterSelectionArray = [upperCaseChar, lowerCaseChar];    
    }
    // User selected the following: Lowercase, Numeric
    else if (userWantLowerCase === true && userWantUpperCase === false && userWantNumbers === true && userWantSpecial === false) {
        var characterSelectionArray = [lowerCaseChar, numbersChar];    
    }
    // User selected the following: Lowercase, Special Characters
    else if (userWantLowerCase === true && userWantUpperCase === false && userWantNumbers === false && userWantSpecial === true) {
        var characterSelectionArray = [lowerCaseChar, specialChar];    
    }
    // User selected the following: Uppercase, Numeric
    else if (userWantLowerCase === false && userWantUpperCase === true && userWantNumbers === true && userWantSpecial === false) {
        var characterSelectionArray = [upperCaseChar, numbersChar];    
    }
    // User selected the following: Uppercase, Special Characters
    else if (userWantLowerCase === false && userWantUpperCase === true && userWantNumbers === false && userWantSpecial === true) {
        var characterSelectionArray = [upperCaseChar, specialChar];    
    }
    // User selected the following: Numeric, Special Characters
    else if (userWantLowerCase === false && userWantUpperCase === false && userWantNumbers === true && userWantSpecial === true) {
        var characterSelectionArray = [numbersChar, specialChar];    
    }
    // User selected the following: Lowercase, Uppercase, Numeric
    else if (userWantLowerCase === true && userWantUpperCase === true && userWantNumbers === true && userWantSpecial === false) {
        var characterSelectionArray = [upperCaseChar, lowerCaseChar, numbersChar];    
    }
    // User selected the following: Lowercase, Uppercase, Special Characters
    else if (userWantLowerCase === true && userWantUpperCase === true && userWantNumbers === false && userWantSpecial === true) {
        var characterSelectionArray = [upperCaseChar, lowerCaseChar, specialChar];    
    }
    // User selected the following: Lowercase, Numeric, Special Characters
    else if (userWantLowerCase === true && userWantUpperCase === false && userWantNumbers === true && userWantSpecial === true) {
        var characterSelectionArray = [lowerCaseChar, numbersChar, specialChar];    
    }
    // User selected the following: Uppercase, Numeric, Special Characters
    else if (userWantLowerCase === false && userWantUpperCase === true && userWantNumbers === true && userWantSpecial === true) {
        var characterSelectionArray = [upperCaseChar, numbersChar, specialChar];    
    }
    // User selected the following: Lowercase, Uppercase, Numeric, Special Characters
    else if (userWantLowerCase === true && userWantUpperCase === true && userWantNumbers === true && userWantSpecial === true) {
        var characterSelectionArray = [upperCaseChar, lowerCaseChar, numbersChar, specialChar];    
    }
    // User selected the following: NONE
    // (Ends the program because the user has not selected ANY of the character options
    else {
        break;
    }

    // This function below will generate a random whole number within a range
    // The range corresponds to the possible index values of the variables in question
    var characterSelectRandom = Math.floor(Math.random() * Math.floor(characterSelectionArray.length));
    // Using the random number generated above, select a character from within the mini-array characterSelectionArray
    var characterSelect = characterSelectionArray[characterSelectRandom];
    
    // Taking that selected character and passing into the current index (based on the for loop) of initialArray
    initialArray[i]=characterSelect;
}

// Concatenate the initialArray into one long string (with no spaces), thus generating the finalArray, to be used as the password
// Done with the assistance of the Mozilla developer notes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
var finalArray = initialArray.join("");








// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

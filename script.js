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

// ^^^^^^^^^^^ Starter Code Ends Here ^^^^^^^^^^^^^^





// vvvvvvvvvvv Original Code Starts Here vvvvvvvvvvvvvv

// Lowercase Letters Array
var lowercase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Uppercase Letters Array
var uppercase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Numbers Array
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Special Characters Array
var specialChars = [
  '`','~','!','@','#','$','%','^','&','*','(',')','-',
  '_','+','[',']','{','}','\\','|','/',';',':',"'",'"',',','<','.','>','/','?'
];

//Randomizer for all character type arrays. Returns one element for use.
function randomize(arr){
  var index = Math.floor(Math.random() * arr.length);
  var element = arr[index];
  return element;
};

// Series of Prompts
function pwCriteriaPrompts(){
  //Using parseInt(): https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
  var pwLength = parseInt(prompt('Please enter desired password length.'));
  
  //Using Number.isInteger: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  if (Number.isInteger(pwLength) !== true || pwLength < 8 || pwLength > 128){
    alert('The password length must be at least 8 characters,  but no more than 128 characters.')
    return;
  };

  // Variables to confirm validity of password: https://www.w3schools.com/jsref/met_win_confirm.asp
  var hasLowercase = confirm('Do you want "lowercase" letters?');

  var hasUppercase = confirm('Do you want "UPPERCASE" letters?');

  var hasNumbers = confirm('Do you want numbers?');

  var hasSpecialChars = confirm('Do you want special characters ? (!, @, #, etc.)');

  // Alert if at least one character type is not selected.
  if (hasLowercase !== true && hasUppercase !== true && 
    hasNumbers !== true && hasSpecialChars !== true){
    alert('Cannot create password. Please have at least one data type selected.')
    }

  // Save user input into an object: https://www.youtube.com/watch?v=NxVCq4p0Kb0
    var optionsSelected = {
      pwLength: pwLength,
      hasLowercase: hasLowercase,
      hasUppercase: hasUppercase,
      hasNumbers: hasNumbers,
      hasSpecialChars: hasSpecialChars
    };
  
  //Local function now set to this object in memory since return operator is last
  return optionsSelected;

};

//Initialize generatePassword() function
//var generatePW = generatePassword();


//Generates Password
function generatePassword(){
  //Initialize local to generatePassword()
  var pwPrompt = pwCriteriaPrompts();
  var newPW = [];

  for (i = newPW.length; i <= pwPrompt.pwLength - 1; i++){
    if (pwPrompt.hasLowercase && newPW.length < pwPrompt.pwLength) {
      newPW.push(randomize(lowercase));
    };
    if (pwPrompt.hasUppercase && newPW.length < pwPrompt.pwLength) {
      newPW.push(randomize(uppercase));
    }; 
    if (pwPrompt.hasNumbers && newPW.length < pwPrompt.pwLength) {
    newPW.push(randomize(numbers));
    }; 
    if (pwPrompt.hasSpecialChars && newPW.length < pwPrompt.pwLength) {
    newPW.push(randomize(specialChars));
    };
  };
  
  return newPW.join("");
};




/*
SCOPE TEST (WORKS):

pushSix();

function pushSix() {
  var testArray = [1, 2, 3, 4, 5];
  testArray.push(6);
  console.log(testArray);
  return testArray;
};
*/




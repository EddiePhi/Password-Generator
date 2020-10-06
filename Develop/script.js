// Lowercase letters Array
var lowercase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Uppercase Letters Array
var uppercase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Numbers Array
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Special Characters Array
var specialChars = [
  '`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','[',']','{','}','\\','|',
  '/',';',':',"'",'"',',','<','.','>','/','?'
];

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

// Series of Prompts
function passwordCriteriaPrompts(){
  var pwLength = parseInt(prompt('Please enter desired password length.'));
  
  if (typeof pwLength === 'string'){
    alert('Please enter a number value between 8 and 128.')
  };

  prompt('Do you want lowercase letters?');
  if (){

  };

  prompt('Do you want UPPERCASE letters?');
  if (){
    
  };

  prompt('Do you want numbers (0-9)?');
  if (){
    
  };

  prompt('Do you want special characters ?(!, @, #, etc.)');
  if (){
    
  };
};
  
passwordCriteriaPrompts();

function randomize(){
/* 
    - Math.random() // 0 - 1
    - Math.floor() // round # down to nearest integer
    - Math.floor(Math.random() + arr.length)
*/
};

function generatePassword(){
/* 
- Combine arrays together.
    - arr.concat(otherArr) 
- Combine and convert items in Array into a string
    - arr.join(“enterDividerHere”) 
    */
};

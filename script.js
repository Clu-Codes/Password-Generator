// Assignment code here
var generatePassword = function() {
  var passwordInteger = window.prompt("How many characters do you want your password to be? Please enter a number between 8-128.");
  // debugger;
  if (passwordInteger < 8 || passwordInteger > 128) {
    window.alert("Please enter a number between 8 and 128");
    return "";
    // generatePassword();
  };
  var upperCase = window.confirm("Do you want to include Uppercases in your password?");
  if (upperCase) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } 
  else {
    upperCase = ""
  };
  var lowerCase = window.confirm("Do you want to include Lowercases in your password?");
  if (lowerCase) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz"
  } 
  else {
    lowerCase = ""
  };
  var numerics = window.confirm("Do you want to include numerical figures?");
  if (numerics) {
    numerics = "0123456789"
  } 
  else {
    numerics = ""
  }
  var specialChars = window.confirm("Do you want to include special characters?");
  if (specialChars) {
    specialChars = "`~!@#$%^&*"
  }
  else {
    specialChars = ""
  };

  // this variable will make it easier to call later on + can dynamically filter what someone wants 
  var errBody = upperCase + lowerCase + numerics + specialChars;
  // If no character type is selected
  if (errBody === "" || errBody === null) {
    window.alert("Please choose at least one character type.");
  }
  // Combines the values given to create a randomized password
  function passRandomizer() {
    var characters = errBody; 
    var var1 = ""
    for (i = 0; i < passwordInteger; i++) {
      var1 = var1 + characters[(Math.floor(Math.random() * errBody.length))];
    }
   
    return var1;
  } 
  var randomPass = passRandomizer();
  console.log(passRandomizer());
  return randomPass;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
function generatePassword() {
  var criteria = {
    length:8,
    lowercase: new Boolean(true),
    uppercase: new Boolean(true),
    numeric: new Boolean(true),
    special: new Boolean(true),
  };
criteria.length= parseInt (window.prompt("Please enter the length of your password? (min:8 Max:128)"), 10);
criteria.lowercase= window.confirm("Would you like to have lowercase in your password?");
criteria.uppercase= window.confirm("Would you like to have UPPERCASE in your password?");
criteria.numeric= window.confirm("Would you like to have NUMERIC(0-9) in your password?");
criteria.special= window.confirm("Would you like to have SPECIAL CHARACTERS ($%#&) in your password?");
console.log(criteria);
  return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
const charactersLower = 'abcdefghijklmnopqrstuvwxyz';
const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charactersNumeric = '0123456789';
const charactersSpecial= '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var password="";


var generatePassword = function() {
var PoolofChars ="";
var criteria = {
    length:8,
    lowercase: new Boolean(true),
    uppercase: new Boolean(true),
    numeric: new Boolean(true),
    special: new Boolean(true),
  };
 
criteria.length= parseInt (window.prompt("Please enter the length of your password? (min:8 Max:128)"), 10);


if (!(isNaN(criteria.length) || criteria.length<8 || criteria.length>128)) {
criteria.lowercase= window.confirm("Would you like to have lowercase in your password?");
  if (criteria.lowercase){
    PoolofChars += charactersLower;
   }


criteria.uppercase= window.confirm("Would you like to have UPPERCASE in your password?");
if(criteria.uppercase) {
PoolofChars += charactersUpper;
  }
criteria.numeric= window.confirm("Would you like to have NUMERIC(0-9) in your password?");
if(criteria.numeric) {
PoolofChars += charactersNumeric;

 }

criteria.special= window.confirm("Would you like to have SPECIAL CHARACTERS (i.e $%#&...) in your password?");
if(criteria.special) {
  PoolofChars += charactersSpecial;
  
   }

}

else {
  window.alert("Please Enter a valid input");
  generatePassword();
}

if (!((criteria.lowercase || criteria.uppercase) || (criteria.numeric || criteria.special))) {
window.alert(" You MUST choose at LEAST 1 character type");
generatePassword();
}

console.log(PoolofChars);
for(i=0; i<criteria.length; i++) 
{
  const charactersLength = PoolofChars.length;
  password += PoolofChars.charAt(Math.floor(Math.random() * charactersLength+1));
  console.log(password);

}
console.log(password);
return password;
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


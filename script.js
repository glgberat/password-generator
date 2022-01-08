// Assignment code here
const charactersLower = 'abcdefghijklmnopqrstuvwxyz';
const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charactersNumeric = '0123456789';
const charactersSpecial= '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var password="";


var generatePassword = function() {
var GuaranteeAdded =0;
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
    password+=charactersLower.charAt(Math.floor(Math.random() * charactersLower.length+1));
    GuaranteeAdded++;
    console.log(GuaranteeAdded);
console.log(password);
   }


criteria.uppercase= window.confirm("Would you like to have UPPERCASE in your password?");
if(criteria.uppercase) {
PoolofChars += charactersUpper;
password+=charactersUpper.charAt(Math.floor(Math.random() * charactersUpper.length+1));
GuaranteeAdded++;
console.log(GuaranteeAdded);
console.log(password);
  }
criteria.numeric= window.confirm("Would you like to have NUMERIC(0-9) in your password?");
if(criteria.numeric) {
PoolofChars += charactersNumeric;
password+=charactersNumeric.charAt(Math.floor(Math.random() * charactersNumeric.length+1));
    GuaranteeAdded++;
    console.log(GuaranteeAdded);
console.log(password);

 }

criteria.special= window.confirm("Would you like to have SPECIAL CHARACTERS (i.e $%#&...) in your password?");
if(criteria.special) {
  PoolofChars += charactersSpecial;
  password+=charactersSpecial.charAt(Math.floor(Math.random() * charactersSpecial.length+1));
    GuaranteeAdded++;

    console.log(GuaranteeAdded);
console.log(password);
  
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
for(i=0; i<criteria.length-GuaranteeAdded; i++) 
{
  const charactersLength = PoolofChars.length;
  password += PoolofChars.charAt(Math.floor(Math.random() * charactersLength+1));
  console.log(password);

}
console.log(password);
deneme.innerHTML = "Your New Password";

return password;
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var deneme = document.querySelector("#berat");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


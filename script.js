// Assignment code here
const charactersLower = 'abcdefghijklmnopqrstuvwxyz'; //String type of lowercase characters initilizaed to var
const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //String type of UPPERcase characters initilizaed to var
const charactersNumeric = '0123456789'; ////String type of NUMBERS initilizaed to var
const charactersSpecial= '!@#$%^&*()_+~`|}{[]":;?><,./-='; //String type of SPECIAL characters initilizaed to var

//Password Generator Function Code Block Starts Here

generatePassword = function() {
  


var password="";
  var GuaranteeAdded =0;
var PoolofChars ="";
var criteria = { //Object type to store user promts for password criteria
    length:8,
    lowercase: new Boolean(true),
    uppercase: new Boolean(true),
    numeric: new Boolean(true),
    special: new Boolean(true),
  }

 //<-----------------Series of Window prompts starts here----------------->
 console.log(password);
criteria.length= parseInt (window.prompt("Please enter the length of your password? (min:8 Max:128)"), 10); //User value must be valid input and it will be assign to object data



if (!(isNaN(criteria.length) || criteria.length<8 || criteria.length>128)) { //Checking the user input if it meets the criteria 
criteria.lowercase= window.confirm("Would you like to have lowercase in your password?");

   if (criteria.lowercase){
    PoolofChars += charactersLower; //String of characters combined with other set if user have choosen to do so
    password+=charactersLower.charAt(Math.floor(Math.random() * charactersLower.length+1));
    GuaranteeAdded++; //Lowercase character will be included at least once if it meets the condition
console.log(password);
  }


criteria.uppercase= window.confirm("Would you like to have UPPERCASE in your password?");

if(criteria.uppercase) {

PoolofChars += charactersUpper; //String of characters combined with other set if user have choosen to do so
password+=charactersUpper.charAt(Math.floor(Math.random() * charactersUpper.length+1));
GuaranteeAdded++;  //Uppercase character will be included at least once if it meets the condition
console.log(password);
  }

criteria.numeric= window.confirm("Would you like to have NUMERIC(0-9) in your password?");

if(criteria.numeric) {
PoolofChars += charactersNumeric; //String of characters combined with other set if user have choosen to do so
password+=charactersNumeric.charAt(Math.floor(Math.random() * charactersNumeric.length+1));
    GuaranteeAdded++;  //Numbers will be included at least once if it meets the condition

    console.log(password);

 }

criteria.special= window.confirm("Would you like to have SPECIAL CHARACTERS (i.e $%#&...) in your password?");

if(criteria.special) {
  PoolofChars += charactersSpecial;  //String of characters combined with other set if user have choosen to do so
  password+=charactersSpecial.charAt(Math.floor(Math.random() * charactersSpecial.length+1));
    GuaranteeAdded++;  //Special Characters will be included at least once if it meets the condition
console.log(password);
   }

  }

else {
  window.alert("Please Enter a valid input");
  console.log(criteria.length)
  //Validation of user input
  password=generatePassword();   // Function callback (Recursive) for Re-entering input
}

if (!((criteria.lowercase || criteria.uppercase) || (criteria.numeric || criteria.special))) {   //Minumum Requirement to include criteria checked here
window.alert(" You MUST choose at LEAST 1 character type");
generatePassword(); // Function callback (Recursive) for Re-entering input
}

// Password Generated with each loop up to the lenght 
for(i=0; i<criteria.length-GuaranteeAdded; i++) 
{
  var charactersLength = PoolofChars.length;
  password += PoolofChars.charAt(Math.floor(Math.random() * charactersLength+1)); // Password randomly generated by selecting characters 
  
console.log(i+1,password);
}

deneme.innerHTML = "Your New Password"; //Updating Dynamically Front-End Element <H2> after password generated

return password; // Password will be ready and returned to it's caller
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var deneme = document.querySelector("#berat");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





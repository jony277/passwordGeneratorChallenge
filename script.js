// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";


function generatePassword() {
 
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  
  var characterPool = "";
  if (includeLowercase) characterPool += lowercaseChars;
  if (includeUppercase) characterPool += uppercaseChars;
  if (includeNumeric) characterPool += numericChars;
  if (includeSpecial) characterPool += specialChars;

  
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

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

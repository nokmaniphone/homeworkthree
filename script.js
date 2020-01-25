// Assignment Code


var generateBtn = document.querySelector("#generate");

var passwordLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z', ' ', '!', '#','$', '%', '&','(', ')', '*', '+', ';', '-', '.', '/', ':', ';', '<=>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~', '0', '1', '2', '3', '4', '5', '6', '7','8', '9']



// Write password to the #password input

var generatePassword = function () {
  
  var comfirmpassword = confirm("Do you want a new passpord ?")
  var ran = prompt("how long the value do you tobe between 8 and 128?")
  var genPassword = ""
  if (comfirmpassword) {
    var passwordlent = parseInt(ran)
    for (var i = 0; i < passwordlent; i++) {
      var randomC = passwordLetter[Math.floor(Math.random() * passwordLetter.length)]
      genPassword += randomC

    }
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = genPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
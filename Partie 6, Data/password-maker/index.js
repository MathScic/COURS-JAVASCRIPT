const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "^$*ù!^¤µ£§/.<>+=\"";
const rangeValue = document.getElementById("password-length")
const passwordOutput = document.getElementById("password-output");
 
function generatePassword() {
    let data = [];
    let password = "";  
    
    if (lowercase.checked) data.push(...dataLowerCase);
    if (uppercase.checked) data.push(...dataUpperCase);
    if (number.checked) data.push(...dataNumber);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez selectionnez des critères")
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random()* data.length)];
        console.log(password);
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy')
  
    generateButton.textContent = "Copié ! "
    setTimeout(() => {
        generateButton.textContent = "Générer Mot de passe"
    }, 2000)
} 

generateButton.addEventListener('click', generatePassword)
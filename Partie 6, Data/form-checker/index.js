const form = document.querySelector('form')

const input = document.querySelectorAll('input[type="text"], input[type="password"]')
let pseudo, email, password, confirmpass;
const progessBar = document.getElementById('progress-bar')

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag +"-container")
    const span = document.querySelector("." + tag +"-container > span")

    if (!valid) {
        container.classList.add('error')
        span.textContent = message; 
    } else {
        container.classList.remove('error')
        span.textContent = message
    }
}

const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay('pseudo', 'Le pseudo doit faire entre 3 et 20 caractères')
        pseudo = null
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay('pseudo', 'pseudo ne doit pas contenir de caractère spéciaux')
        pseudo = null
    } else {
        errorDisplay('pseudo', '', true)
        pseudo = value; 
    };
}

const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      errorDisplay("email", "Le mail n'est pas valide");
      email = null;
    } else {
      errorDisplay("email", "", true);
      email = value;
    }
  };

const passwordChecker = (value) => {
    progessBar.classList = " ";

    if (!value.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )) {
        errorDisplay("password", "minimum de 8 caractères, une maj, un caractère et un chiffre" )
        progessBar.classList.add('progressRed')
      } else if (value.length < 12) {
        progessBar.classList.add('progressBlue')
        errorDisplay('password', "", true)
        password = value; 
      } else {
        progessBar.classList.add('progressGreen')
        errorDisplay('password', "", true)
        password = value; 
      }
      if (confirmpass) confirmChecker(confirmpass)
}

const confirmChecker = (value) => {
    if (value !== password) {
        errorDisplay('confirm', "les mots de passes ne correspondent pas")
        confirmpass = false;
    } else {
        errorDisplay('confirm', "", true)
    }
}


input.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "pseudo": pseudoChecker(e.target.value)
                break; 
            case "email": emailChecker(e.target.value)
                break;
            case "password": passwordChecker(e.target.value)
                break;
            case "confirm": confirmChecker(e.target.value)
                break; 
            default: 
                null
        };
    } )
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (pseudo && email && password && confirmpass) {
      const data = {
        pseudo,
        email,
        password,
      };
      console.log(data);
  
      inputs.forEach((input) => (input.value = ""));
      progressBar.classList = "";
  
      pseudo = null;
      email = null;
      password = null;
      confirmPass = null;
      alert("Inscription validée !");
    } else {
      alert("veuillez remplir correctement les champs");
    }
  });
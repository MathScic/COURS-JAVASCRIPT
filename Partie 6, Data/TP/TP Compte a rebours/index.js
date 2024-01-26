// Créer la logique de compte à rebours
let totalSeconds; 
let interval;

function coutDown() {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60;
    let sec = seconds < 10 ? "0" + seconds : seconds
    countdownDisplay.textContent =` ${minutes} : ${sec}`

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        countdownDisplay.textContent = "C'est terminé !"
        clearInterval(interval)
    }
  }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (isNaN(choice.value)) {
        alert("entrer un nbr ou un chiffre")
    } else {
        totalSeconds = choice.value * 60; 
        choice.value = ""
        clearInterval(interval)
        setInterval(coutDown, 1000)
    }
})

// Créer un événement à la validation du form pour lancer le compte à rebours

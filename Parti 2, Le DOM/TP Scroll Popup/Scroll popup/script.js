// Fait disparaitre popup au clique sur la croix
let playOnce = true; 

// Créer un événement au scroll
window.addEventListener('scroll', () => {
    // Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
    if (window.scrollY > 50) {
        navbar.style.height = "45px"
    } else {
        navbar.style.height = "90px"
    }
    //permet de calculer la valeur (en hauteur) ou placer l'image 
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight
    // Faire apparaitre l'image de la partie improvise
    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none"
    }
    // Faire apparaitre la popup quand on est en bas du site
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = 'none'
        playOnce = false; 
    } 
})
// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)"
})
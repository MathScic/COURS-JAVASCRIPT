// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
let lastScroll = 0; 

// Créer un événément au scroll
window.addEventListener('scroll', () => {
    if(window.scrollY < lastScroll) {
        navbar.style.top = 0; 
    } 
    else { 
        // Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte
        navbar.style.top = "-60px"
    }
    
    lastScroll = window.scrollY
})



// Connaitre niveau de scroll (window.scrollY)

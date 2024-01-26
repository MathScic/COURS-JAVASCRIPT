// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)  ✔

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e") ✔
const mouses = document.querySelectorAll(".mouse")

window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.y + "px"
        mouse.style.left = e.x + "px"
    })
})

// S'assurer que les liens sont clickables  ✔

//dans style.css, ajoputer z-index = 1000 et position relative au balises <a>

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

//création des 3 cercles en html balise <span> 





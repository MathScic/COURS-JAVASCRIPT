//Création du conteur en selectionnant l'lement dans le html
const counterDisplay = document.querySelector('h3')
let counter = 0

const bubbleMaker = () => {
    //Création de la bulle 
    const bubble = document.createElement("span")
    bubble.classList.add("bubble")
    document.body.appendChild(bubble)
    //Mise en place valeurs de hauteurs et largeurs = bulles différente taille
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size
    bubble.style.width =size
    //Création du mouvement de bas en haut
    bubble.style.top = Math.random() * 100 + 50 + "%"
    bubble.style.left = Math.random() * 100 + "%"
    // ? = si >..., : = sinon.... remplace if else
    const plusMinus = Math.random() > 0.5 ? 1 : -1 
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%")
    //Mise en place d'un evenement au click (supprime les bulles) + mise en place du compteur
    bubble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter
        bubble.remove()
    })
    //Disparition des bulles apres 8sec 
    setTimeout(() => {
        bubble.remove()
    }, 8000)
}
//temp interval apparition bulles 
setInterval(bubbleMaker, 1000)
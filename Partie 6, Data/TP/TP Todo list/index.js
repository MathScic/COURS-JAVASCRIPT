// Creer un form pour taper les todos    ✔

//stocker dans le local storage la liste 
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}

function getTodo() {
    list.innerHTML = window.localStorage.todoList
}

getTodo()

// Ajouter sur le dom ce qui est taper dans l'input à la validation de form 
//monInput.value
const form = document.querySelector('form'); 

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    list.innerHTML += `<li>${item.value}</li>`
    item.value = "";
    storeList()
})

//Supprimer un todo lorsque l'on click dessus (.remove())
list.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")) {
        e.target.remove()
    } else {
        e.target.classList.add('checked')
    } 
    storeList() 
})

// consulter le local storage au lancement de l'application pour rajouter les todos
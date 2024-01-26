// XMLHttpRequest 

function reqListener() {
    //console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener
// req.open('get', 'data.txt', true)
// req.open('get', 'data.json', true)
//req.send() // Affiche resultat contenue dans data.txt

//-------------
//FETCH 
//-------------

fetch('monlienURL', "object d'option")
.then((response) => {
        // console.log(response); 
    })
.catch((err) => console.log(err))

    //fetch déclare les requêtes  
    //then = promesse 
    //catch, attrape les errors si requette pas passer

fetch('data.txt')
.then((res) => res.text()//fais apparaitre le Header de la requetes
.then((data) => console.log(data)));//Affiche notre fichier txt

fetch('data.json')
.then((res) => res.json())//Affiche dossier data.json 
.then((data) => console.log(data))

//----------------
//Objet 
//----------------
const myHeaders = new Headers

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors"
}

// fetch('data.json', init)
// .then((res) => console.log(res)) 

//CRUD => Create (POST), Read (GET), Update (PUT) and Delete (DELETE)
const init2 = {
    method : "POST", 
    headers : {"Content-Type": "application/json"},
    body : JSON.stringify({
        pseudo: 'Math',
        message: 'hola todos'
    }),
    mode: 'cors',
    credential : "same-origin"
}

// fetch('https://localhost:3000/posts', init2)
// .then(() => console.log('data envoyé'))

//--------------------
//Asynchrone 
//--------------------

//Promise 
//Async/Await
async function fectData() {
    await fetch('monlien') 
    //Attend d'executer le fetch pour executer la suite
    executeFonction()
}

//----------
//Le JSON (format qui permet de faire traniter donnés)
//----------

//Méthode .json; s'autorésout en voyant le Body de la requêtes 
fetch('data.json')
.then((res) => res.json())
.then((data) => {
    //stringify = convertit en JSON 
    let settings = JSON.stringify(data);
    //Parse = transforme JSON en objet JS 
    console.log(JSON.parse(settings));
})

//----------
//Web API
//----------

//Client Storage
//Conteant le local storage 
localStorage.data = "je stock la data"

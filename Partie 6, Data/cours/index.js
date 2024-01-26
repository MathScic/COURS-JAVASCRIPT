// Rappel des types de données 
let string = 'chaine'
let number = 25
let boolean = true
let maVariable; 
//console.log(maVariable); // = Undefined

//Tableaux
let array = ["Bordeaux", "Paris", "Toulouse"]
//console.log(array[1]); //[number] = index

let array2 = ["Paris", 2 , true, [1, 2], {nom:"Math"}]
//console.log(array2[4].nom); //Cible que le nom

let objet = {
    pseudo: "Math",
    age: 33,
    techno: ["JS", "react", "NodeJS"], 
    admin: false
}
objet.adresse = "5 rue du code"
//console.log(objet);

let data = [ // Base de donnée
    {
        pseudo: "Math",
        age: 33,
        techno: ["JS", "react", "NodeJS"], 
        admin: false
    },
    {
        pseudo: "Mathilde",
        age: 20,
        techno: ["HTML", "CSS"], 
        admin: true
    },
    {
        pseudo: "Denis",
        age: 53,
        techno: ["JS", "react", "NodeJS", "VueJS", "C++"], 
        admin: false
    }
]
//console.log(data[2].pseudo);

//-------------------------
//Structure de controle (if else) 
//-------------------------
if (data[0].age > data[1].age) {
    //console.log(data[0].pseudo + "est plus agé que " + data[1].pseudo);
} else { 
    //Valeurs si faux 
}
// Peut etre ecris en ternaire = valeur a test ? (if) si vrai : (else) si faux

//-------------------------
//While 
let w = 0;
while (w < 10) {
    w ++ 
    //console.log('La valeur de w est de : ' + w);
}

//Do while 
let d = 0;
do {
    d++
    //console.log(d);
} while (d < 5)

//Boucles for 
for (const user of data) {
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans - ${user.techno} </li>`
}

//on déclare dabord valeurs de "i", on dis jusqu'ou on boucle, on incrémente 'i' si condition 2 est pas rempli. 
for (i = 0; i < data.length; i++) {
    //console.log(data[i].techno);
    //document.body.innerHTML += '<h2>Présentation de ' + data[i].pseudo + '</h2>';
}

// Switch 
document.body.addEventListener('click', (e) => {
    console.log(e.target.id); //Cible l'event sur lequel on clique
    
    switch (e.target.id) {
        case 'javascript' : 
        document.body.style.background = 'yellow';
        break;
        case 'php' : 
        document.body.style.background = 'violet';
        break;
        case 'python' : 
        document.body.style.background = 'blue';
        break;
        default : null; 
    }
})


//------------------------
//Méthode pour les string
//------------------------
let string2 = "JS est un langage orienter objet";

//console.log(eval(parseInt("1") + 2));
//console.log(isNaN(string2)); //isNotANumber
//console.log(string2.length);
//console.log(string2[string2.length -1]);
//console.log(string2.indexOf("langage")); retourne -1 si connais pas 

// 
//let newString = string2.slice(20); Découpe la phrase en fonction de l'index choisi
//let newString = string2.slice(5, 18); Découpe la phrase en fonction de l'index choisi
//console.log(newString);
//console.log(string2.split(" ")); decompose la phrase en la découpant
//console.log(string2.toLocaleLowerCase()); tous ce met en minuscule
//console.log(string2.replace("JS", "PHP")); rempalce par ce qu'on a choisi

//------------------------
//Méthode pour les numbers
//------------------------

let number2 = 48.670; 
let numberString = "42.998 est un nombre"
//console.log(number2.toFixed(1)); Retire chiffre en index apres la virgule 
//console.log(parseInt("43")); Change chaine de caract en Number
//console.log(parseInt(numberString)); Garde uniquement l'entier 
//console.log(parseFloat(numberString)); Garde tous le nombre 

//Méthode Math
//console.log(Math.PI);
//console.log(Math.round(4.5)); Arrondis au plus proche de l'index donné
//console.log(Math.floor(4.9)); Arrondis a l'inférieurx
//console.log(Math.ceil(4.1)); Arrondis au supp
//console.log(Math.sqrt(16)); Donne racine carré
//console.log(Math.floor(Math.random() *50)); Math.random donne chiifre entre ** et **. + .floor, donne nombre entre 0 et index  

//------------------------
//Méthode pour les tableaux (array)
//------------------------
let array1 = ["JS", 'PHP' , 'Python']
let arrayK = ["Ruby", 'C']

//let newArray = array1.concat(arrayK)
//console.log(newArray);

//let newArray = [...array1, ...arrayK] ... = spred opérateur, permet fusion de tableaux
//console.log(newArray);

//console.log(array1.join(" ")); Casse tableau et rajoute ce qu'on veut

//console.log(array1.slice(2));
//console.log(array1.slice(1, 2))
//console.log(array1.indexOf("Python")); trouve index de notre demande 
//console.log(array1.every((language) => language == "Php")); est ce que dans chacun des élem il y a " "

//let shift = array1.shift();
//console.log(array1); Permet enlever premier elem du tableau 
//console.log(array1.pop()); enlève dernier elem du tableau

//const restArray = array1.splice(1, 1, ...arrayK)
//console.log(restArray);

//IMPORTANT//
let arrayNumber = [4, 89, 6, 47, 30]
//console.log(arrayNumber.reduce((x, y) => x + y)); Ajoute des resultats 
arrayNumber.push("Coucou")
//console.log(arrayNumber); ajout elem au tableau 

//FILTER (= Filtrer)  
console.log(arrayNumber.filter((number) => number > 10 )); //filtre tous les supp a 10 

//SORT (= Sort des objet)
console.log(arrayNumber.sort((a, b) => b - a)); //ranger + petit au + grand

//MAP (= Lister les choses)
document.body.innerHTML += arrayNumber
.map((number) => `<li>${number}</li>`)
.join(" ") //Join retire les virgule habituel sur .map

//------------------------
//Méthode pour les Objets
//------------------------
document.body.innerHTML = data
.filter((user) => user.admin === false ) //Filtre et laise que les membres (=False)
.sort((a, b) => b.age- a.age) //Classer du plus agé au plus jeune 
.map((user) => `
    <div class="user-card"> 
        <h2> ${user.pseudo} </h2> 
        <p>Age:  ${user.age} ans </p>
        <p>Status: ${user.admin ? "Modérateur" : "Membre"} </p>
    </div>`)
.join(" ")

//------------------------
//Méthode pour les Dates
//------------------------

// Dates classique 
let date = new Date()// Donne la date du jours 

//TimeStamp 
let timestamp = Date.parse(date)//nbr seconde entre 1970 et today 

//IsoString
console.log(date.toISOString());// Donne date anné-mois-jours +heures

function dateParser (chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: 'numeric',
        month : 'short',
        day: "numeric"
    })
    return newDate;
}// Ecrit la date en francais jours/mois/anné
//console.log(dateParser(date));

//-----------------------------
//Méthode pour le destructuring
//-----------------------------

let moreData = {
    destVar: ["elem1", "elem2"]
}
const { destVar } = moreData // destVar = moreData.destVar
//console.log(moreData.destVar);
//console.log(destVar);

let array5 = [70, 90, 110]
let [x, y ,z] = array5
console.log(x, y, z);

// const dateDestruct = (chaine) => {
//     let newDate = chaine.split("T") [0];
//     newDate.split("-")
//     [y, m, d] = newDate
//     console.log(newDate);
// }

//Regex (expression reguliere)
let mail = "scicluna.mathieu@hotmail.fr"
console.log(mail.match(/SCicluna/i));



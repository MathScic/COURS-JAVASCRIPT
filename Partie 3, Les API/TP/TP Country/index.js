// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)  ✔ TEST OK 

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.  ✔ STATUS 200 + DATA OK

const countrieContainer = document.querySelector(".countries-container")
const btnSort = document.querySelectorAll('.btnSort')
let dataCountry = [];// 3 - Passer les données à une variable
let sortMethod = "maxToMin"; 


async function fetchCountry() {
    await fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => dataCountry = data)
    console.log(dataCountry);
    countryDisplay()
}

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countryDisplay() {
    countrieContainer.innerHTML = dataCountry
    // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
    // coutry.name.includes(inputSearch.value);
    .filter((country) => country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))
    // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
    .sort((a, b) => {
        if (sortMethod === "maxToMin") {//Si sortMath = maxToMin alors montre moi que les plus peupler en 1er
            return b.population - a.population
        } else if (sortMethod === "minToMax") {//Si sortMath = minToMax alors montre moi que les moins peupler en 1er
            return a.population - b.population
        } else if (sortMethod === "alpha") {//Si sortMath = alpha alors montre trie alphabetique
            return a.translations.fra.common.localeCompare(b.translations.fra.common)
        }
    })
    // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
    .slice(0, inputRange.value)//Recupère valeur de inputRange
    .map((country) => 
    `
    <div class="card">
        <img src="${country.flags.png}" alt="${country.flags.alt}" />
        <h2>${country.translations.fra.common} </h2>
        <h4>Capitale : ${country.capital}</h4>
        <p>La population : ${country.population.toLocaleString()}</p>
    </div>
    `
    ).join("")
}

window.addEventListener('load', fetchCountry())
inputSearch.addEventListener('input', countryDisplay); //ajoute function CoutryDisplay a inputSearch
inputRange.addEventListener('input', () => {
    countryDisplay(); 
    rangeValue.textContent = inputRange.value
})
btnSort.forEach((btn) => {// Mise en place des boutons pour trier 
    btn.addEventListener('click', (e) => {
        sortMethod = e.target.id;
        countryDisplay()
    })
})








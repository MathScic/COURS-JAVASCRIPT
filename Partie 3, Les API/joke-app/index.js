//https://api.blablagues.net/?rub=blagues

const header = document.getElementById('header')
const content = document.getElementById('content')

function getJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => {
        const dataJoke = data.data.content
        
        header.textContent = dataJoke.text_head
        content.textContent = 
        dataJoke.text !== ""
        ? dataJoke.text 
        : dataJoke.text_hidden
    })
} 

getJoke()

document.body.addEventListener('click', () => {
    getJoke()
})
setInterval(() => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const bodyColor = `rgb(${r},${g}, ${b})`

document.body.style.backgroundColor = bodyColor
document.body.innerHTML = `<h2>${bodyColor}</h2>`
}, 1000)


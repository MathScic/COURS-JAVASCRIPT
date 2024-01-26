"use strict";
// CANVAS
//-------

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200,0,0)"; //Donne une couleur
  ctx.fillRect(50, 50, 50, 150); //Créer un carré de culeur sur les axes X et Y 

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200, 0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.fillStyle = "rgba(200,100,200, 0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
}

// window.addEventListener("load", draw);

//------------
// TRY / CATCH
//------------

//Try (= éxécute un bloque d'élément ou fonction), si jamais Error arrete toute execution et execute le "catch block" 
// sinon ingore "catch block"
try {
  // Test un block de code
  maFonction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON());

// Finally, traite l'erreur mais précise qu'on est quand meme arrivé au bout 
try {
  // Test un block de code
  // maFonction();
} catch (err) {
  console.log(err);
} finally {
  // console.log("on est arrivé au bout !");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    console.log("c'est un nombre");
  }
  // PLEIN DE CODE
}

try {
  isNumber("2d");
} catch (err) {
  // console.log("Erreur : " + err);
}

//------------
// Strict mode
//------------

// voiture = "Toyota";
// console.log(voiture);

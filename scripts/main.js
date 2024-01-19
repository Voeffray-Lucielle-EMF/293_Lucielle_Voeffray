/*
Autrice: Lucielle Voeffray
Date: 18.01.2024
Description: Code JS pour le projet
*/

//Changer la date de modification
let LastMod = "18.01.2024"

let date = document.getElementById("date")
date.textContent = "Dernière mise à jour: " + LastMod;
console.log(date.textContent = "Dernière mise à jour: " + LastMod);

//Alerte au chargement de la page
function chargement() {
    alert("Un petit message se cache dans la page, sauras-tu le retrouver ?");
}

//Alert si le message a été trouvé (cliquer sur le drapeau catgender)
let CatGender = document.getElementById("ImageAlert");

CatGender.addEventListener("click", boop);

function boop() {
    alert("Boop");
}


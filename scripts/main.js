/*
Autrice: Lucielle Voeffray
Date: 18.01.2024
Description: Code JS pour le projet
*/

let LastMod = "18.01.2024"

//Alerte au chargement de la page
function chargement() {
    alert("Un petit message se cache dans la page, sauras-tu le retrouver ?");
    document.getElementById("date").textContent = "Dernière mise à jour: " + LastMod;
}

//Alert si le message a été trouvé (cliquer sur le drapeau catgender)
let CatGender = document.getElementById("ImageAlert");

CatGender.addEventListener("click", boop);

function boop() {
    alert("Boop");
}


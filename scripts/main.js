/*
Autrice: Lucielle Voeffray
Date: 15.12.2023
Description: Code JS pour le projet
*/

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
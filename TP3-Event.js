// Exercice 1 : 
// Ajouter dans le html un input de type texte ainsi qu'un paragraphe vide
let input = document.createElement("input");
input.setAttribute("id","ipt");
document.body.appendChild(input);
let p = document.createElement("paragraphe");
p.setAttribute("id", "pgp");
document.body.appendChild(p);
// Ecrire une fonction javascript déclenchée quand l'utilisateur saisi du texte dans l'input 
// et qui affiche la saisie dans le paragraphe 
// OPTION : Prendre en compte la suppression des lettres
input.setAttribute("oninput","mirrorInput()");

function mirrorInput(){
    let paragraphe = document.getElementById("pgp");
    let inputText = document.getElementById("ipt").value;
    paragraphe.innerHTML = inputText;
}


// Exercice 2 : 
// Ajouter un champ de type password pour saisir le mot de passe et la confirmation du motDePasse. 
// Faire une fonction javascript déclenchée quand l'utilisateur saisi du texte dans l'un des input 
// pour afficher la vérification des mots de passe en temps réel dans un paragraphe en dessous



// Exercice 3 : 
// jouter un champ de type password pour saisir le mot de passe. Ajouter une icone avec un oeil. 
// Au clic sur cet oeil, le mot de passe est révélé. 
// Un autre clic cache le mot de passe.
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
let paragrapheMessage = document.getElementById("message")
let message = document.createElement("message");
paragrapheMessage.appendChild(message);

function checkPw(){
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;
    let inputInscrire = document.getElementById("inputInscription");
    
    if (pw1 !== pw2){
        message.innerHTML = "Les deux mots de passes ne correspondent pas"
        message.style.color = "red";
        inputInscrire.disabled = true;
    }else{
        message.innerHTML = "Les deux mots de passes sont identiques"
        message.style.color = "green";
        inputInscrire.disabled = false;
    }
}

// Exercice 3 : 
// Ajouter un champ de type password pour saisir le mot de passe. Ajouter une icone avec un oeil.
// Au clic sur cet oeil, le mot de passe est révélé. 
// Un autre clic cache le mot de passe.
let inputPw3 = document.getElementById("pw3");
inputPw3.setAttribute("class", "fa-solid fa-eye");
// testtest

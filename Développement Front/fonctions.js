// Connexion
function check(form) { 
    
if(form.identifiant.value == "admin" && form.motdepasse.value == "admin") {
        window.open('index.html')
        window.close('connexion.html')
} else {
        alert("Mot de Passe ou Identifiant Incorrect")
       }
}

// Deconnexion
function deconnexion(form) {
        window.open('connexion.html')
        window.close('index.html')
}

// Rafraichir la page
function rafraichir(form) {
        location.reload();
}
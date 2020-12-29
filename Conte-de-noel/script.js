var button1 = document.getElementById('button-semaine1');
var button2 = document.getElementById('button-semaine2');
var button3 = document.getElementById('button-semaine3');
var button4 = document.getElementById('button-semaine4');
var button5 = document.getElementById('button-semaine5');

button1.addEventListener('click',AccessSemaine1);
button2.addEventListener('click',AccessSemaine2);
button3.addEventListener('click',AccessSemaine3);
button4.addEventListener('click',AccessSemaine4);
button5.addEventListener('click',AccessSemaine5);

function AccessSemaine1(){
    let mdpsemaine1 = document.getElementById('mdp-semaine1').value;
    console.log(mdpsemaine1);
    if (mdpsemaine1 == "veiller"){
        window.location.href = "./conte-semaine-1.html";
    } else{
        alert("tu as entré un mauvais mot de passe ! Réessaie! ")
    }
};

function AccessSemaine2(){
    let mdpsemaine2 = document.getElementById('mdp-semaine2').value;
    console.log(mdpsemaine2);
    if (mdpsemaine2 == "preparer"){
        window.location = "./conte-semaine-2.html"
    } else{
        alert("tu as entré un mauvais mot de passe ! Réessaie! ")
    }
};

function AccessSemaine3(){
    let mdpsemaine3 = document.getElementById('mdp-semaine3').value;
    console.log(mdpsemaine3);
    if (mdpsemaine3 == "lumiere"){
        window.location = "./conte-semaine-3.html"
    } else{
        alert("tu as entré un mauvais mot de passe ! Réessaie! ")
    }
};

function AccessSemaine4(){
    let mdpsemaine4 = document.getElementById('mdp-semaine4').value;
    console.log(mdpsemaine4);
    if (mdpsemaine4 == "accueillir"){
        window.location = "./conte-semaine-4.html"
    } else{
        alert("tu as entré un mauvais mot de passe ! Réessaie! ")
    }
};

function AccessSemaine5(){
    let mdpsemaine5 = document.getElementById('mdp-semaine5').value;
    console.log(mdpsemaine5);
    if (mdpsemaine5 == "naissance"){
        window.location = "./conte-semaine-5.html"
    } else{
        alert("tu as entré un mauvais mot de passe ! Réessaie! ")
    }
};


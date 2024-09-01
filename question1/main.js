/**
 * 1) Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
 * Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
 * Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
 */
let tr = document.querySelector("#tr");
let tr1 = document.querySelector("#tr1");
let tr2 = document.querySelector("#tr2");
let tr3 = document.querySelector("#tr3");

let tab1 = [];
let newTab1 = [];
let tab2 = [];
let newTab2 = [];

// Saisie du tableau 1 par l'utilisateur
for(let i=0; i<5; i++){
    let a = parseInt(prompt("Saisie un nombre pour le tableau 1"));
    if(!isNaN(a)){
        tab1.push(a);
    }
}

// Saisie du tableau 2 par l'utilisateur
for(let i=0; i<5; i++){
    let a = parseInt(prompt("Saisie un nombre pour le tableau 2"));
    if(!isNaN(a)){
        tab2.push(a);
    }
}



// Fonction qui filtre et ajoute les elements tab2 manquand dans tab2 sur un nouveau tableau
function filtreElementManquandTableau(tabl1, tabl2){
    let tab = [];

    tabl1.forEach((element) => {
        if(!tabl2.includes(element)){
            tab.push(element);
        }
    });

    return tab;
}

// Fonction qui filtre et ajoute les elements commun de tab1 et tab2
function filtreElementCommunTableau(tabl1, tabl2){
    let tab = [];

    tabl1.forEach((element) => {
        if(tabl2.includes(element)){
            tab.push(element);
        }
    });

    return tab;
}

// fonction Affiche Tableau
function afficheTableau(tab,div){
    let ta = "";
    tab.map((x) => {
        ta += `
            <td class="fs-3 fw-semibold">${x}</td>
        `;
    })
    div.innerHTML = ta;
}

newTab1 = filtreElementManquandTableau(tab1,tab2);
newTab2 = filtreElementCommunTableau(tab1, tab2);
// Affichage des tableau
afficheTableau(tab1,tr);
afficheTableau(tab2,tr1);
afficheTableau(newTab1,tr2)
afficheTableau(newTab2,tr3);


/**
 * 2) Soit un tableau taba=[5,3,87,1,-4,-99,0] Sans utiliser les methodes javascript :
 * 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
 * 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min
 */

let taba = [5,3,87,1,-4,-99,0];
taba.sort(function(a,b){return a-b });

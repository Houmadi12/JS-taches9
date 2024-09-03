/**
 * 2) Soit un tableau taba=[5,3,87,1,-4,-99,0] Sans utiliser les methodes javascript :
 * 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
 * 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min
 */
let td1 = document.querySelector("#td1");
let td2 = document.querySelector("#td2");
let tableau = document.querySelector("#tra");

// tableau.innerHTML = "Bonjour"

let n = 7;

let taba = [];

taba = SaiseTab(n);

afficheTab(taba,tableau);
// Trie le table.au
trieTableau(taba);

//Fonction de trie
function trieTableau(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length; j++) {
            if (tableau[i] < tableau[j]) {
                let a = tableau[i];
                tableau[i] = tableau[j];
                tableau[j] = a;
            }
        }
    }
}


//  Affiche de tableau trier
let tr = document.querySelector("#tr");

afficheTab(taba,tr);

function afficheTab(tab, selecteur) {
    let result = "";
    tab.forEach((element) => {
        result += `
        <td>${element}</td>
    `;
    })

    selecteur.innerHTML = result;
}


// Saisie du tableau
function SaiseTab(tabLength) {
    let tab = [];
    for (let i = 0; i < tabLength; i++) {
        do{
            tab[i] = parseInt(prompt(`Saisie l'élement ${i + 1}/${n} du tableau`));
        }while(isNaN(tab[i]))
    }

    return tab;
}

// Affich Max min 

td1.innerHTML = "Max du tableau est : " + taba[taba.length - 1];
td2.innerHTML = "Min du tableau est : " + taba[0];
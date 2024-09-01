/**
 * 2) Soit un tableau taba=[5,3,87,1,-4,-99,0] Sans utiliser les methodes javascript :
 * 1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier  
 * 2. Ecrire une fonction qui reçoit en parametre tab1 et retourne la valeur max , min
 */
let td1 = document.querySelector("#td1");
let td2 = document.querySelector("#td2");

let taba = [5,3,87,1,-4,-99,0];

// Trie le tableau
trieTableau(taba);

//Fonction de trie
function trieTableau(tableau){
    for(let i=0; i<tableau.length; i++){
        for(let j=0; j<tableau.length; j++){
            if(tableau[i] < tableau[j]){
                let a = tableau[i];
                tableau[i] = tableau[j];
                tableau[j] = a;
            }
        }
    }
}

// Fonction pour chercher max et min dans un tableau
function MaxTableau(tabl){
    let max = 0

    for(let i=0; i<tabl.length; i++){
        if(max < tabl[i]){
            max = tabl[i];
        }
    }

    return max;
}

function MinTableau(tabl){
    let min = 0

    for(let i=0; i<tabl.length; i++){
        if(min > tabl[i]){
            min = tabl[i];
        }
    }

    return min;
}

//  Affiche de tableau trier
let tr = document.querySelector("#tr");
let result = "";
taba.forEach((element) => {
    result += `
        <td>${element}</td>
    `;
})

tr.innerHTML = result;


// Affich Max min 

td1.innerHTML = "Max du tableau est : "+MaxTableau(taba);
td2.innerHTML = "Min du tableau est : "+MinTableau(taba);
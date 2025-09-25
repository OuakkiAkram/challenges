const prompt = require("prompt-sync")();

// ------------------------------------------ CHALLENGE 1 ----------------------------------------------------------

// Crée une fonction sommeTableau(tab) qui calcule et retourne la somme de tous les
// éléments du tableau.

// const sommeTableau = (tab) => {
//   let sum = 0;
//   for (let i = 0; i < tab.length; i++) {
//     sum += tab[i];
//   }
//   return sum;
// };

// let result = sommeTableau([10, 5, 2]);
// console.log(result);

// ------------------------------------------ CHALLENGE 2 ----------------------------------------------------------

// Crée une fonction maxTableau(tab) qui retourne le plus grand élément d’un tableau.

// const maxTableau = (tab) => {
//   let max = 0;
//   for (let num of tab) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// };

// console.log(maxTableau([14, 76, 45, 67]));

// ------------------------------------------ CHALLENGE 3 ----------------------------------------------------------

// Crée une fonction compterOccurrences(tab, valeur) qui compte combien de
// fois valeur apparaît dans le tableau.

// const compterOccurences = (tab, valeur) => {
//   let counter = 0;
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] == valeur) {
//       counter++;
//     }
//   }
//   return counter;
// };

// let numbers = [10, 15, 8, 3, 3, 65];

// console.log(compterOccurences(numbers, 3));

// ------------------------------------------ CHALLENGE 4 ----------------------------------------------------------

//Écris une fonction inverserTableau(tab) qui retourne un nouveau tableau avec les
// éléments inversés.

// ---- method 1: by using function built-in in javascript

// const inverserTableau = (tab) => {
//   const newTab = tab.reverse();
//   return newTab;
// };

// ---- method 2: creating your own function

// const inverserTableau = (tab) => {
//   let newTab = [];
//   for (let i = tab.length - 1; i >= 0; i--) {
//     newTab.push(tab[i]);
//   }
//   return newTab;
// };

// let arr = [1, 2, 3, 4];
// console.log(inverserTableau(arr));

// ------------------------------------------ CHALLENGE 5 ----------------------------------------------------------

// Crée une fonction filtrerPairs(tab) qui retourne un nouveau tableau contenant
// seulement les nombres pairs.

// const filterPairs = (tab) => {
//   let newTab = [];
//   for (let num of tab) {
//     if (num % 2 == 0) {
//       newTab.push(num);
//     }
//   }
//   return newTab;
// };

// let arr = [1, 2, 3, 4, 7, 10, 14, 27];
// console.log(filterPairs(arr));

// ------------------------------------------ CHALLENGE 6 ----------------------------------------------------------

// Écris une fonction produitTableau(tab) qui calcule le produit (multiplication) de
// tous les éléments.

// --- method 1: using method reduce()
// const produitTableau = (tab) => {
//   const produitTab = tab.reduce((acc, curr) => acc * curr, 1);
//   return produitTab;
// };

// --- method 2: creating your own function
// const produitTableau = (tab) => {
//   let produit = 1;
//   for (let i = 0; i < tab.length; i++) {
//     produit *= tab[i];
//   }
//   return produit;
// };

// let arr = [5, 2, 8];
// console.log(produitTableau(arr));

// 1  = 1*5 => 5
// 5  = 5*2 => 10
// 10 = 10*8 => 80

// ------------------------------------------ CHALLENGE 7 ----------------------------------------------------------

// const sommeTableau = (tab) => {
//   let sum = 0;
//   for (let i = 0; i < tab.length; i++) {
//     sum += tab[i];
//   }
//   return sum;
// };

// const moyenneTableau = (tab) => {
//   return sommeTableau(tab) / tab.length;
// };

// let arr = [5, 9, 1];
// console.log(moyenneTableau(arr));

// ------------------------------------------ CHALLENGE 8 ----------------------------------------------------------

// Écris une fonction doubler(tab) qui retourne un tableau où chaque nombre est
// multiplié par 2.

// --- method 1: using method filter()
// const doubler = (tab) => {
//   let newTab = tab.filter((n) => n * n);
//   return newTab;
// };

// --- method 2: creating your own function

// const doubler = (tab) => {
//   const newArr = [];
//   for (let num of tab) {
//     newArr.push(num * num);
//   }
//   return newArr;
// };

// let arr = [1, 2, 3];
// console.log(doubler(arr));

// ------------------------------------------ CHALLENGE 9 ----------------------------------------------------------

// Crée une fonction fusionner(tab1, tab2) qui retourne un seul tableau contenant
// les éléments des deux.

// --- Method 1
// const fusionner = (tab1, tab2) => {
//   let newTab = [...tab1, ...tab2];
//   return newTab;
// };

// --- Method 2
// const fusionner = (tab1, tab2) => {
//   let newTab = [];
//   for (let i = 0; i < tab1.length; i++) {
//     newTab.push(tab1[i]);
//   }

//   for (let j = 0; j < tab2.length; j++) {
//     newTab.push(tab2[j]);
//   }
//   return newTab;
// };

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(fusionner(arr1, arr2));

// ------------------------------------------ CHALLENGE 10 ----------------------------------------------------------

// Écris une fonction supprimerDoublons(tab) qui retourne un tableau sans éléments
// répétés.

// const supprimerDoublons = (tab) => {
//   let check = [];
//   for (let number of tab) {
//     if (check.includes(number)) {
//       continue;
//     }
//     check.push(number);
//   }
//   return check;
// };

// let numbers = [2, 7, 7, 9, 9];

// console.log(supprimerDoublons(numbers));

// ------------------------------------------ CHALLENGE 11 ----------------------------------------------------------

// Crée une fonction tableMultiplication(n) qui retourne un tableau contenant la
// table de multiplication de n (ex: pour n=3 → [3,6,9,...,30]).

// const tableMultiplication = (n) => {
//   const newArray = [];
//   for (let i = 1; i <= 10; i++) {
//     newArray.push(n * i);
//   }
//   return newArray;
// };

// console.log(tableMultiplication(5));

// n=5;
// 5*1 = 5
// 5*2 = 10
// 5*3 = 15
// 5*4 = 20
// ....
// 5*10 = 50
// [5, 10, 15, 20, ..., 0]

// ------------------------------------------ CHALLENGE 12 ----------------------------------------------------------

// Écris une fonction motsLongs(tabMots, longueur) qui retourne tous les mots
// dont la taille est ≥ longueur.

// const motsLongs = (tabMots, longueur) => {
//   let newArr = [];
//   for (let i = 0; i < tabMots.length; i++) {
//     if (tabMots[i].length >= longueur) {
//       newArr.push(tabMots[i]);
//     }
//   }
//   let joinNewArr = newArr.join("-");
//   return joinNewArr;
// };

// let mots = ["voiture", "automobile", "SAS"];

// console.log(motsLongs(mots, 5));

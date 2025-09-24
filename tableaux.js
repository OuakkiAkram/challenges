const prompt = require("prompt-sync")();

// ------------------------------------------ CHALLENGE 1 ----------------------------------------------------------

// let num = [];
// for (let i = 0; i < 5; i++) {
//   num[i] = prompt(`Donner le nombre ${i + 1}: `);
// }

// console.log(num.reverse().join(""));

// ------------------------------------------ CHALLENGE 2 ----------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const somme = numbers.reduce((acc, curr) => acc + curr, 0);
// const moyenne = somme / numbers.length;

// console.log("La somme est: ", somme);
// console.log("La moyenne est: ", moyenne);

// ------------------------------------------ CHALLENGE 3 ----------------------------------------------------------

// let numbers = [];
// for (let i = 0; i < 5; i++) {
//   numbers[i] = parseInt(prompt(`Donner le nombre entier ${i + 1}: `));
// }

// console.log(numbers);

// let recherche = parseInt(
//   prompt("Donnez le nombre que vous voulez rechercher: ")
// );

// let indexOfNumber = numbers.indexOf(recherche);

// if (indexOfNumber) {
//   console.log(
//     `L'index du nombre ${numbers[indexOfNumber]} est ${indexOfNumber}`
//   );
// }

// ------------------------------------------ CHALLENGE 4 ----------------------------------------------------------

// let chaineCaractere = [];

// for (let i = 0; i < 5; i++) {
//   chaineCaractere[i] = prompt(
//     `Entrer les chaînes ${i + 1}: `
//   ).toLocaleUpperCase();
// }

// console.log(chaineCaractere);

// let recherche = prompt("Entrez la chaîne à rechercher: ").toLocaleUpperCase();

// if (chaineCaractere.includes(recherche)) {
//   let indexOfchaineCaractere = chaineCaractere.indexOf(recherche);
//   console.log(
//     `La chaine ${chaineCaractere[indexOfchaineCaractere]} a ete trouvee a la position ${indexOfchaineCaractere}`
//   );
// }

// ------------------------------------------ CHALLENGE 5 ----------------------------------------------------------

// Écris un programme qui lit 7 entiers dans un tableau, puis affiche le plus grand et le plus
// petit.

// let numbers = [];

// for (let i = 0; i < 5; i++) {
//   numbers[i] = parseInt(prompt(`Entrer les chaînes ${i + 1}: `));
// }

// let max = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// let min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(numbers);
// console.log(`Le nombre le plus grand est: ${max}`);
// console.log(`Le nombre le plus grand est: ${min}`);

// ------------------------------------------ CHALLENGE 6 ----------------------------------------------------------

// Écris un programme qui lit un tableau d’entiers et affiche leurs carrés

// const numbers = [1, 5, 6, 8];
// const carre = numbers.map((n) => n * n);
// console.log(carre);

// ------------------------------------------ CHALLENGE 7 ----------------------------------------------------------

// const nombreVoyelles = (chaineCaractere) => {
//   let vowels = "aeiouyAEIOUY";
//   let count = 0;

//   for (let char of chaineCaractere) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

// let chaine = prompt("Entrer une chaîne: ");
// console.log("Nombre de voyelles :", nombreVoyelles(chaine));

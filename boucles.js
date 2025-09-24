const prompt = require("prompt-sync")();
// ------------------------------------------ CHALLENGE 1 ----------------------------------------------------------

// let number = Number(prompt("Saisir un nombre: "));

// for (let i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" + number * i);
// }

// ------------------------------------------ CHALLENGE 2 ----------------------------------------------------------

// let number = parseInt(prompt("Saisir un nombre entier: "));

// nombre premier => 2 diviseur (1 et lui meme)

// let counter = 0;
// for (let i = number; i > 0; i--) {
//   if (number % i == 0) {
//     counter++;
//   }
// }

// if (counter > 2) {
//   console.log("Le nombre n'est pas premier");
// } else {
//   console.log("Le nombre est premier");
// }

// ------------------------------------------ CHALLENGE 4 ----------------------------------------------------------

// Écris un programme qui demande un entier et l’affiche inversée.
// Exemple : entrée 12345 → sortie 54321.

// let number = prompt("Saisir un nombre positif: ");

// let splitNumber = number.split("").reverse().join("");
// console.log(splitNumber);

// ------------------------------------------ CHALLENGE 5 ----------------------------------------------------------

// Écris un programme qui demande un entier n, puis affiche tous les nombres premiers de 2 jusqu’à n.
// nombre premier => 2 diviseur (1 et lui meme)

// let n = parseInt(prompt("Saisir un nombre entier: "));

// for (let i = 2; i <= n; i++) {
//   let counter = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       counter++;
//     }
//   }
//   if (counter == 2) {
//     console.log(i);
//   }
// }

// n=5

// i=2 => counter=0 => j=1; j=2                       ===> counter=2
// i=3 => counter=0 => j=1; j=2; j=3                  ===> counter=2
// i=4 => counter=0 => j=1; j=2; j=3; j=4             ===> counter=3
// i=5 => counter=0 => j=1; j=2; j=3; j=4; j=5        ===> counter=2

// ------------------------------------------ CHALLENGE 6 ----------------------------------------------------------

// Écris un programme qui calcule la puissance d’un nombre (base > 0, exposant >= 0) en
// utilisant une boucle while.
// Exemple : 2^3 = 8.

// let base = 0;
// let exposant = -1;
// while (base <= 0 && exposant < 0) {
//   base = Number(prompt("Saisir la base: "));
//   exposant = Number(prompt("Saisir l'exposant: "));
// }

// let result = Math.pow(base, exposant);
// console.log(`${base}^${exposant}=${result}`);

// ------------------------------------------ CHALLENGE 7 ----------------------------------------------------------

// Écris un programme qui demande à l’utilisateur 10 nombres.
// ● Ignorer les nombres négatifs.
// ● Afficher la somme des nombres valides.

let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = prompt(`Saisir le nombre ${i + 1}: `);
}

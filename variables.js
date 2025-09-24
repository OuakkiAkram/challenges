const prompt = require("prompt-sync")();
// --------------------------------------- CHALLENGE 1 ------------------------------------------------

// let nom = prompt("Veuillez saisir vote nom: ");
// let prenom = prompt("Veuillez saisir vote prenom: ");
// let age = prompt("Veuillez saisir vote age: ");
// let sexe = prompt("Veuillez saisir vote sexe: ");
// let numTel = prompt("Veuillez saisir vote numero de telephone: ");

// console.log("Nom: ", nom);
// console.log("Prenom: ", prenom);
// console.log("Age: ", age);
// console.log("Sexe: ", sexe);
// console.log("numTel: ", numTel);

// --------------------------------------- CHALLENGE 2 ------------------------------------------------

// let celsius = prompt("Donnez la temperature en (Celsius): ", 0);
// let fahrenheit = celsius * 1.8 + 32; // Type Coercion

// console.log("La temperature en fahrenheit est: ", fahrenheit);

// --------------------------------------- CHALLENGE 3 ------------------------------------------------

// let a = 4; // = 2
// let b = 2; // = 1
// let c = 1; // = 2

// a = b;
// b = c;
// c = a;

// console.log(a, b, c);

// --------------------------------------- CHALLENGE 4 ------------------------------------------------

// let a = prompt("Saisir le nombre 1: ");
// let operateur = prompt("Choisir un operateur: ");
// let b = prompt("Saisir le nombre 2: ");
// let result = 0;
// let check = false;

// switch (operateur) {
//   case "+":
//     result = Number(a) + Number(b);
//     check = true;
//     break;
//   case "-":
//     result = Number(a) - Number(b);
//     check = true;
//     break;
//   case "*":
//     result = Number(a) * Number(b);
//     check = true;

//     break;

//   case "/":
//     if (b == 0) {
//       console.log("You cannot divide by zero!");
//       break;
//     }
//     result = a * b;
//     check = true;
//     break;

//   case "%":
//     if (b == 0) {
//       console.log("You cannot divide by zero!");
//       break;
//     }
//     result = Number(a) % Number(b);
//     check = true;
//     break;

//   default:
//     console.log("Operateur Invalide!");
// }

// if (check) {
//   console.log("Le result est: ", result);
// }

// --------------------------------------- CHALLENGE 5 ------------------------------------------------

// let num1 = prompt("Saisir le nombre 1: ");
// let num2 = prompt("Saisir le nombre 2: ");
// let num3 = prompt("Saisir le nombre 3: ");
// let num4 = prompt("Saisir le nombre 4: ");

// let somme = Number(num1) + Number(num2) + Number(num3) + Number(num4);
// let moyenne = Number(somme) / 4;

// console.log("La somme est: ", somme);
// console.log("La somme est: ", moyenne);

// --------------------------------------- CHALLENGE 8 ------------------------------------------------

// let num = "1";

// while (num.length != 3) {
//   num = prompt("Saisir un nombre entier de 3 chiffres: ");
// }

// console.log(num.split("").reverse().join());

// --------------------------------------- MATH FUNCTIONS ------------------------------------------------

// result = Math.pow(2, 5);
// result = Math.abs(-5);
// result = Math.sqrt(9);
// result = Math.round(3.14);
// result = Math.ceil(3.01);
// result = Math.floor(3.99);
// result = Math.max(10, 20);
// result = Math.min(10, 20);
// result = Math.PI;

// console.log(result);

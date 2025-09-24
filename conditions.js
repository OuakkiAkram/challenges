const prompt = require("prompt-sync")();

// ------------------------------------------ CHALLENGE 1 ----------------------------------------------------------

// let number = prompt("Donner un nombre: ");

// if (number % 2 == 0) {
//   console.log("Le nombre est pair");
// } else {
//   console.log("Le nombre est impaire");
// }

// ------------------------------------------ CHALLENGE 2 ----------------------------------------------------------

// let number = prompt("Donner un nombre: ");

// if (number > 0) {
//   console.log("Le nombre est positif");
// } else if (number < 0) {
//   console.log("le nombre est negative");
// } else {
//   console.log("Le nombre egal a zero");
// }

// ------------------------------------------ CHALLENGE 3 ----------------------------------------------------------

// let age = prompt("Entrez votre age: ");

// if (age >= 18) {
//   console.log("Éligibldeux e au vote");
// } else {
//   console.log("Non eligible");
// }

// ------------------------------------------ CHALLENGE 4 ----------------------------------------------------------

// let num1 = Number(prompt("Donner le nombre 1: "));
// let num2 = Number(prompt("Donner le nombre 2: "));

// if (num1 > num2) {
//   console.log("Le nombre le plus grand est:", num1);
// } else {
//   console.log("Le nombre le plus grand est:", num2);
// }

// ------------------------------------------ CHALLENGE 5 ----------------------------------------------------------

// let score = parseInt(prompt("Enter the score: "));

// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score >= 60 && score <= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// ------------ METHODE 2 -----------------------

// let note = 90;

// switch (true) {
//   case note >= 90 && note <= 100:
//     console.log("A");
//     break;

//   case note >= 80 && note <= 89:
//     console.log("B");
//     break;

//   case note >= 70 && note <= 79:
//     console.log("C");
//     break;

//   case note >= 60 && note <= 69:
//     console.log("D");
//     break;

//   case note >= 0 && note < 60:
//     console.log("F");
//     break;

//   default:
//     console.log("note invalide: note doit etre entre 0 et 100");
// }

// ------------------------------------------ CHALLENGE 6 ----------------------------------------------------------

// let year = parseInt(prompt("Saisir une annee: "));

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("annee bissextile");
// } else {
//   console.log("annee nom bissextile");
// }

// ------------------------------------------ CHALLENGE 7 ----------------------------------------------------------

// let mdp = prompt("Saisie un mot de passe: ");

// if (mdp.length < 6) {
//   console.log("Mot de passe Faible");
// }

// /.../ =>Regular Expression (OBJECT - patterns)
// \d => Any number between 1-9
// test() => return true or false

// const contientChiffre = /\d/.test(mdp);

// if (mdp.length >= 6 && contientChiffre) {
//   console.log("Mot de passe Moyen");
// }

// const contientSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(mdp);

// if (mdp.length >= 8 && contientSpecial) {
//   console.log("Mot de passe Fort");
// }

// ------------------------------------------ CHALLENGE 10 ----------------------------------------------------------

// const name = prompt("Veuillez entrez votre nom: ");
// const password = prompt("Veuillez saisir vote mot de passe: ");

// if (name === "admin" && password === "1234") {
//   console.log("Bienvenu Admin");
// } else if (name === "admin" && password != "1234") {
//   console.log("Mot de passe incorrect");
// } else {
//   console.log("Utilisateur introuvable");
// }

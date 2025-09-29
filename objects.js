const prompt = require("prompt-sync")();

// ------------------------------------------ CHALLENGE 1 ----------------------------------------------------------

// Créer un objet voiture avec les propriétés marque, modele, annee et affiche-les.
// const voiture = {
//   marque: "BMW",
//   model: "M1",
//   annee: 2025,
// };
// console.log(voiture);

// À partir de l’objet voiture, affiche seulement la marque et l’année.
// console.log(voiture.marque, voiture.annee);

// Modifié l’année de la voiture et affiche l’objet mis à jour.
// voiture.annee = 2020;

// Ajoute une propriété couleur à l’objet voiture.
// voiture.color = "red";

//Supprime la propriété modele de l’objet voiture.
// delete voiture.model;

// ------------------------------------------ CHALLENGE 2 ----------------------------------------------------------

// Crée un objet etudiant avec les propriétés nom, age, et une méthode
// sePresenter() qui affiche : "Bonjour, je m’appelle [nom] et j’ai [age] ans."

// const etudiant = {
//   nom: "Akram",
//   age: 24,
//   sePresenter: function () {
//     return `Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans`;
//   },
// };

// console.log(etudiant.sePresenter());

// Créer un objet personne et affiche toutes ses clés et valeurs avec une boucle
// for...in

// const personne = {
//   nom: "Akram",
//   age: 24,
//   jobs: "Web Developer",
// };

// for (let key in personne) {
//   console.log(`Key: ${key}, Value: ${personne[key]}`);
// }

// Crée un objet classe qui contient une propriété etudiants (un tableau de noms).
// Ajoutez une méthode afficherEtudiants() qui affiche chaque étudiant.

// const test = {
//   etudiants: ["Akram", "aziz", "Ahmed"],
//   afficherEtudiants: function () {
//     for (let i = 0; i < this.etudiants.length; i++) {
//       console.log(this.etudiants[i]);
//     }
//   },
// };
// test.afficherEtudiants();

// Créer un tableau livres contenant 3 objets { titre, auteur, annee }.
// Affiche seulement les titres avec une boucle

// const livres = [
//   { titre: "titre1", auteur: "auteur1", annee: 2021 },
//   { titre: "titre2", auteur: "auteur2", annee: 2022 },
//   { titre: "titre3", auteur: "auteur3", annee: 2023 },
// ];

// const displayTitle = livres.map((p) => p.titre);

// for (let livre of livres) {
//   console.log(livre.titre);
// }

//Dans le tableau livres, écris une fonction trouverLivre(titre) qui retourne
// l’objet correspondant.

// const trouverLivre = (titre) => {
//   const found = livres.find((element) => element.titre === titre);
//   return found;
// };

// const trouverLivre = (titre) => {
//   for (let i = 0; i < livres.length; i++) {
//     if (livres[i].titre == titre) {
//       return livres[i];
//     }
//   }
// };

// console.log(trouverLivre("titre2"));

// ------------------------------------------ CHALLENGE 3 ----------------------------------------------------------

// Créer un objet entreprise qui contient un objet adresse (rue, ville, codePostal).
// Affiche la ville.

// const entreprise = {
//   adresse: {
//     rue: "rue 2423423",
//     ville: "BM",
//     codePostal: 3000,
//   },
// };
// console.log(entreprise.adresse.ville);

// - Créer un tableau produits d’objets { nom, prix, quantite }.
// - Affiche la valeur totale en stock (prix * quantite pour chaque produit).
// const produits = [
//   { nom: "produit1", prix: 100, quantity: 1 },
//   { nom: "produit2", prix: 300, quantity: 2 },
//   { nom: "produit3", prix: 500, quantity: 3 },
// ];

// const valeurTotal = produits.map((p) => p.prix * p.quantity);

// let prixTotal = 0;
// for (let i = 0; i < produits.length; i++) {
//   prixTotal = produits[i].prix * produits[i].quantity;
//   console.log(prixTotal);
// }

// Créer une classe Animal avec les propriétés nom, type et une méthode parler().
// Puis crée une instance chien.

// class Animal {
//   constructor(nom, type) {
//     this.nom = nom;
//     this.type = type;
//   }

//   parler() {
//     console.log(`Hello my name is ${this.nom} et je suis un/une ${this.type}`);
//   }
// }

// const chien = new Animal("Aziz", "Chien");
// chien.parler();

// Dans un tableau employes, trouve tous ceux qui ont un salaire > 3000.

// const employes = [
//   { nom: "Aziz", salaire: 3000 },
//   { nom: "Ahmed", salaire: 4500 },
//   { nom: "Yassir", salaire: 7000 },
// ];

// const filterSalaire = employes.filter((employes) => employes.salaire > 3000);

// let filterEmployesBySalaire = [];
// for (let i = 0; i < employes.length; i++) {
//   if (employes[i].salaire > 3000) {
//     filterEmployesBySalaire.push(employes[i]);
//   }
// }
// console.log(filterEmployesBySalaire);

// Créer une fonction cloner(obj) qui retourne une copie de l’objet donné.

// const data = {
//   nom: "Akram",
//   age: 24,
// };

// const cloner = (obj) => {
//   const newObj = { ...obj };
//   return newObj;
// };

// console.log(cloner(data));
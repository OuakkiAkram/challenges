const prompt = require("prompt-sync")();

// ------------------------- FUNCTIONS -------------------------------

const addition = (num1, num2) => {
  return num1 + num2;
};

const soustraction = (num1, num2) => {
  return num1 - num2;
};

const multiplication = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  if (num2 == 0) {
    throw new Error("Cannot you divide by zero");
  }
  return num1 / num2;
};

const puissance = (num1, num2) => {
  return Math.pow(num1, num2);
};

const racineCarre = (num1) => {
  return Math.sqrt(num1);
};

const factorielle = (num1) => {
  let produit = 1;
  for (let i = 1; i <= num1; i++) {
    produit *= i;
  }
  return produit;
};

// ------------------------- VARIABLES -------------------------------

let stockResult = [];
let num1 = 0;
let num2 = 0;
let operateur = "";
let result = 0;
let isValid = false;
let exitProgram = "";

// ------------------------- PROGRAM -------------------------------

while (true) {
  num1 = Number(prompt("Veuillez saisir le nombre 1: "));
  operateur = prompt("choisir un operateur (+) (-) (*) (/) (**) (sqrt) (!): ");
  if (operateur !== "sqrt" && operateur !== "!") {
    num2 = Number(prompt("Veuillez saisir le nombre 2: "));
  }
  isValid = false;

  switch (operateur) {
    case "+":
      result = addition(num1, num2);
      stockResult.push(result);
      isValid = true;
      break;

    case "-":
      result = soustraction(num1, num2);
      stockResult.push(result);
      isValid = true;
      break;

    case "*":
      result = multiplication(num1, num2);
      stockResult.push(result);
      isValid = true;
      break;

    case "/":
      try {
        result = division(num1, num2);
        stockResult.push(result);
        isValid = true;
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "**":
      result = puissance(num1, num2);
      stockResult.push(result);
      isValid = true;
      break;

    case "sqrt":
      result = racineCarre(num1);
      stockResult.push(result);
      isValid = true;
      break;

    case "!":
      result = factorielle(num1);
      stockResult.push(result);
      isValid = true;
      break;

    default:
      console.log("Operateur invalide!");
  }

  if (isValid) {
    console.log("The result is:", result);
  }

  exitProgram = prompt(
    "Si vous voulez quitter le programme cliquer sur (Q): "
  ).toLocaleUpperCase();

  if (exitProgram == "Q") {
    break;
  }
}

console.log(stockResult);

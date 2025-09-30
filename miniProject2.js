const prompt = require("prompt-sync")();

const displayConsole = () => {
  console.log("\n");
  console.log("================= To-Do List =================");
  console.log("1.Afficher les tâches");
  console.log("2.Ajouter une tâche");
  console.log("3.Rechercher une tâche");
  console.log("4.Modifier une tâche");
  console.log("5.Supprimer une tâche");
  console.log("6.Marquer une tâche comme terminée");
  console.log("7.Afficher tâches terminées/en attente");
  console.log("8.Quitter");
  console.log("==============================================");
  console.log("\n");
};

const taches = [
  {
    id: 0,
    title: "JS",
    description: "Apprendre Javascript",
    isDone: false,
  },

  {
    id: 1,
    title: "Express",
    description: "Apprendre Express.js",
    isDone: false,
  },
];

const afficherTaches = () => {
  for (let i = 0; i < taches.length; i++) {
    console.log(`ID: ${taches[i].id + 1}`);
    console.log(`Title: ${taches[i].title}`);
    console.log(`Description: ${taches[i].description}`);
    if (taches[i].status) {
      console.log("Tâche Terminée\n");
    } else {
      console.log("Tâche en attente\n");
    }
  }
};

const ajouterTache = () => {
  const description = prompt("Ajouter la desription de la tache: ");
  const title = prompt("Ajouter un titre pour la tache: ");
  taches.push({
    id: taches.length,
    title: title,
    description: description,
    isDone: false,
  });
};

const rechercherTache = (title) => {
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].title === title) {
      return taches[i];
    }
  }
};

const supprimerTache = (id) => {
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].id === id) {
      taches.splice(i, 1);
    }
  }
};

const modifierTache = (id, newDescription) => {
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].id === id) {
      taches[i].description = newDescription;
    }
  }
};

const statusTache = (idStatus, status) => {
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].id === idStatus) {
      taches[i].status = true;
    }
  }
};

const afficherTacheTerminer = () => {
  const newArr = [];
  for (let i = 0; i < taches.length; i++) {
    if (taches[i].isDone) {
      newArr.push(taches[i]);
    }
  }
  return newArr;
};

const afficherTacheAttente = () => {
  const newArr = [];
  for (let i = 0; i < taches.length; i++) {
    if (!taches[i].isDone) {
      newArr.push(taches[i]);
    }
  }
  return newArr;
};

while (true) {
  displayConsole();
  const choixOption = prompt("Choisissez une option: ");

  switch (choixOption) {
    case "1":
      afficherTaches();
      break;

    case "2":
      ajouterTache();
      break;

    case "3":
      const searchByTitle = prompt(
        "Donner le titre de la tâche que vous voulez chercher: "
      );
      let data = rechercherTache(searchByTitle);
      console.log("\n");
      console.log(`Donnée de la tâche dont le titre est ${searchByTitle}`);
      console.log(`ID: ${data.id + 1}`);
      console.log(`Title: ${data.title}`);
      console.log(`Description: ${data.description}\n`);
      break;

    case "4":
      const id = parseInt(
        prompt("Donner l'ID de la tâche que vous voulez modifier: ")
      );
      const description = prompt("Donner la nouvelle description: ");
      modifierTache(id, description);
      break;

    case "5":
      const idTache = parseInt(
        prompt("Donner l'ID de la tâche que vous voulez supprimer: ")
      );
      supprimerTache(idTache);
      break;

    case "6":
      console.log("***STATUS TACHE***");
      const idTacheStatus = parseInt(
        prompt(
          "Donner l'ID de la tâche que vous voulez marquez comme terminée: "
        )
      );

      statusTache(idTacheStatus);
      break;

    case "7":
      console.log("Les tâches terminées: ");
      let tacheTerminee = afficherTacheTerminer();

      if (tacheTerminee.length != 0) {
        for (let i = 0; i < tacheTerminee.length; i++) {
          console.log(`ID: ${taches[i].id + 1}`);
          console.log(`Title: ${taches[i].title}`);
          console.log(`Description: ${taches[i].description}\n`);
        }
      } else {
        console.log("VIDE!");
      }

      console.log("Les tâches en attente: ");
      let tacheAttente = afficherTacheAttente();
      if (tacheAttente.length != 0) {
        for (let i = 0; i < tacheAttente.length; i++) {
          console.log(`ID: ${taches[i].id + 1}`);
          console.log(`Title: ${taches[i].title}`);
          console.log(`Description: ${taches[i].description}\n`);
        }
      } else {
        console.log("VIDE!");
      }
      break;

    case "0":
      console.log("Vous avez Quitter le Programme!");
      break;

    default:
      console.log("Choix undefini");
  }

  if (choixOption == "0") {
    break;
  }
}

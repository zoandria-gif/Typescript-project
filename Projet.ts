import express from "express";
import * as etudiantsController from "./src/controller/etudiantsController.js"

const app = express();/*App typé-name*/
const port = 3000;

app.get("/etudiants", etudiantsController.getAllEtudiants);
app.get("/etudiants/:id", etudiantsController.getEtudiantById);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
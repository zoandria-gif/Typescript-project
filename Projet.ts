import express from "express";
import * as studentsController from "./src/controller/studentsController.js"

const app = express();/*App typé-name*/
const port = 3000;

app.get("/students", studentsController.getAllStudents);
app.get("/students/:id", studentsController.getStudentsById);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
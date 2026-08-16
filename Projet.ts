import express from "express";
import * as studentsController from "./src/controller/studentsController.js"
import { authMiddleware } from "./src/middleware/authMiddleware.js";

const app = express();/*App typé-name*/
app.use(express.json());/*App typé-name*/

const port = 3000;

app.get("/students",authMiddleware, studentsController.getAllStudents);
app.get("/students/:id", authMiddleware, studentsController.getStudentsById);

app.post("/students/login", studentsController.loginStudent);


app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

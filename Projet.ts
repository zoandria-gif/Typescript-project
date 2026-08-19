import express from "express";
import * as studentsController from "./src/controller/studentsController.ts"
import { authMiddleware } from "./src/middleware/authMiddleware.ts";
import cors from "cors";

const app = express();/*App typé-name*/
app.use(express.json());// use: on utilise un middle ware.
app.use(cors({origin: "http://localhost:5173"}));/*App typé-name*/  
const port = 3000;

app.get("/students",authMiddleware, studentsController.getAllStudents);
app.get("/students/:id", authMiddleware, studentsController.getStudentsById);

app.post("/students/login", studentsController.loginStudent);


app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

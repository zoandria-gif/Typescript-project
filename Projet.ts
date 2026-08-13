import express from "express";
import { pool } from "./db.ts";/*importation de la variable pool depuis le fichier db.ts*/

const app = express();/*App typé-name*/
const port = 3000;

         /*apiana(pour se référer)*/ /*Utile pour voir les réponses*/
/*app.get("/etudiants", (req, res) => {
  res.send("Détails de l'étudiant avec l'ID");
});*/

app.get("/etudiants", async(req, res) => {   //async: fonction asynchrone, avec await: attendre la réponse de la requête avant de continuer.
  try {         //générer une erreur si la requête échoue, pour éviter que le serveur plante.
    const result = await pool.query("SELECT * FROM etudiants");//query: méthode de pool pour exécuter une requête SQL, retourne un objet contenant les résultats de la requête.
    res.json(result.rows); //rows: propriété de l'objet retourné par query, contient les lignes de résultats de la requête SQL.
  } catch (error) {
    console.error("Erreur lors de la récupération des étudiants :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des étudiants" });
  }
});


app.get("/etudiants/:id",async (req, res) => {
  try {         //générer une erreur si la requête échoue, pour éviter que le serveur plante.
    const result = await pool.query("SELECT * FROM etudiants WHERE id = $1", [req.params.id]);//query: méthode de pool pour exécuter une requête SQL, retourne un objet contenant les résultats de la requête.
    res.json(result.rows); //rows: propriété de l'objet retourné par query, contient les lignes de résultats de la requête SQL.
  } catch (error) {
    console.error("Erreur lors de la récupération des étudiants :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des étudiants" });
  }
});
app.post('/etudiants', (req, res) => {
  res.send('POST request received');
});

app.put('/etudiants/:id', (req, res) => {
  res.send('PUT request received');
});
app.patch('/etudiants/:id', (req, res) => {
  res.send('PATCH request received');
});

app.delete('/etudiants/:id', (req, res) => {
  res.send('DELETE request received');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
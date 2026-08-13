import type { Request, Response } from "express";
import * as etudiantsService from "../service/etudiantsService.ts";

export async function getAllEtudiants(req: Request, res: Response) {
  try {
    const etudiants = await etudiantsService.getAllEtudiants();
    res.json(etudiants);
  } catch (error) {
    console.error("Erreur lors de la récupération des étudiants :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des étudiants" });
  }
}

export async function getEtudiantById(req: Request, res: Response) {
  try {
    const etudiant = await etudiantsService.getEtudiantById(req.params.id as string);
    if (!etudiant) {
      res.status(404).json({ error: "Étudiant non trouvé" });
      return;
    }
    res.json(etudiant);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'étudiant :", error);
    res.status(500).json({ error: "Erreur lors de la récupération de l'étudiant" });
  }
}
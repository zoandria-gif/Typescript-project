import * as etudiantsRepository from "../Repository/EtudiantsRepository.js";// import récupération étudiantsRepository pour utiliser les fonctions findAll et findById

export async function getAllEtudiants() {
  return await etudiantsRepository.findAll();
}

export async function getEtudiantById(id: string) {
  return await etudiantsRepository.findById(id);
}
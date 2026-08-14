import * as studentsRepository from "../Repository/studentsRepository.js";// import récupération étudiantsRepository pour utiliser les fonctions findAll et findById

export async function getAllStudents() {
  return await studentsRepository.findAll();
}

export async function getStudentsById(id: string) {
  return await studentsRepository.findById(id);
}
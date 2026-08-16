import * as studentsRepository from "../Repository/studentsRepository.js";// import récupération étudiantsRepository pour utiliser les fonctions findAll et findById
import { generateToken } from "../utils/jwt.js";// import récupération utils/jwt pour utiliser la fonction generateToken

export async function getAllStudents() {
  return await studentsRepository.findAll();
}

export async function getStudentsById(id: string) {
  return await studentsRepository.findById(id);
}

export async function loginStudent(number: string, password: string) {
  const student = await studentsRepository.findByNumber(number);
  if (!student) {
    throw new Error("Student not found");
  }


  if (student.password !== password) {
    throw new Error("Invalid password");
  }
  const token = generateToken(student.id);
  return { token };
}
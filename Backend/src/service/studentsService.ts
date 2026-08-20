import * as studentsRepository from "../Repository/studentsRepository.ts";// import récupération étudiantsRepository pour utiliser les fonctions findAll et findById
import { generateToken } from "../utils/jwt.ts";// import récupération utils/jwt pour utiliser la fonction generateToken

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

export async function createStudent(firstName: string, lastName: string, number: string, password: string) {
  return await studentsRepository.createStudent(firstName, lastName, number, password);
}
import type { Request, Response } from "express";
import * as studentsService from "../service/studentsService.ts";

export async function getAllStudents(req: Request, res: Response) {
  try {
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Error occurred while fetching students" });
  }
}

export async function getStudentsById(req: Request, res: Response) {
  try {
    const student = await studentsService.getStudentsById(req.params.id as string);
    if (!student) {
      res.status(404).json({ error: "Student not found" });
      return;
    }
    res.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ error: "Error occurred while fetching student" });
  }
}

export async function loginStudent(req: Request, res: Response) {
  const { number, password } = req.body;
  try {
    const result = await studentsService.loginStudent(number, password);
    res.json(result);
  } catch (error) {
    console.error("Error during login:", error);
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(401).json({ message: "Login failed" });
    }
  }
}
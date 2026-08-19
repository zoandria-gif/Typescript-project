import { pool } from "../../db.ts";
import { student } from "../model/studentsModel.ts";

export async function findAll() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

export async function findById(id: string) {
  const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
  return result.rows[0];
}

//Pour Login
export async function findByNumber(number: string) {
  const result = await pool.query("SELECT * FROM students WHERE number = $1", [number]);
  return result.rows[0];
}
export async function createStudent(firstName: string, lastName: string, number: string, password: string) {
  const result = await pool.query(
    `INSERT INTO students ("firstName", "lastName", number, password) VALUES ($1, $2, $3, $4) RETURNING *`,
    [firstName, lastName, number, password]
  );
  const row = result.rows[0];
  return new student(row.id, row.firstName, row.lastName, row.number, row.password);
}
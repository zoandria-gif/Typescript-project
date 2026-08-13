import { pool } from "../../db.js";

export async function findAll() {
  const result = await pool.query("SELECT * FROM etudiants");
  return result.rows;
}

export async function findById(id: string) {
  const result = await pool.query("SELECT * FROM etudiants WHERE id = $1", [id]);
  return result.rows[0];
}
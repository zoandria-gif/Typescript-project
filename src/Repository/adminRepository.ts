import { pool } from "../../db.ts";
import { admin } from "../model/adminModel.ts";

export async function findAdminById(id: number): Promise<admin | null> {
  const result = await pool.query("SELECT * FROM admins WHERE id = $1", [id]);
  if (result.rows.length === 0) return null;
  const row = result.rows[0];
  return new admin(row.id, row.firstName, row.lastName, row.number, row.password);
}

export async function findAdminByNumber(number: string): Promise<admin | null> {
  const result = await pool.query("SELECT * FROM admins WHERE number = $1", [number]);
  if (result.rows.length === 0) return null;
  const row = result.rows[0];
  return new admin(row.id, row.firstName, row.lastName, row.number, row.password);
}

export async function createAdmin(firstName: string, lastName: string, number: string, password: string): Promise<admin> {
  const result = await pool.query(
    `INSERT INTO admins ("firstName", "lastName", number, password) VALUES ($1, $2, $3, $4) RETURNING *`,
    [firstName, lastName, number, password]
  );
  const row = result.rows[0];
  return new admin(row.id, row.firstName, row.lastName, row.number, row.password);
}
import { Response, NextFunction } from "express";
import { AuthRequest } from "./authMiddleware.ts";
import { pool } from "../../db.ts";

export async function adminMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const result = await pool.query("SELECT * FROM admins WHERE id = $1", [req.studentId]);
    if (result.rows.length === 0) {
        return res.status(403).json({ message: "Access denied: admin only" });
    }
    next();
}
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.ts";
import { pool } from "../../db.ts";

export interface AuthRequest extends Request {
    studentId?: number;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const token = req.header("authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: "Invalid token" });
    }
    req.studentId = (decoded as { id: number }).id;
    next();

}
export async function adminMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    const result = await pool.query("SELECT * FROM admins WHERE id = $1", [req.studentId]);
    if (result.rows.length === 0) {
        return res.status(403).json({ message: "Access denied: admin only" });
    }
    next();
}
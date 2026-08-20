import type { Request, Response } from "express";
import * as adminService from "../service/adminService.ts";

export async function loginAdmin(req: Request, res: Response) {
  const { number, password } = req.body;
  try {
    const result = await adminService.loginAdmin(number, password);
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
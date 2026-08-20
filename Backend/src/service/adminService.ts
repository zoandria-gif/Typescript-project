import * as adminRepository from "../Repository/adminRepository.ts";
import { generateToken } from "../utils/jwt.ts";

export async function loginAdmin(number: string, password: string) {
  const admin = await adminRepository.findAdminByNumber(number);
  if (!admin) {
    throw new Error("Admin not found");
  }

  if (admin.password !== password) {
    throw new Error("Invalid password");
  }

  const token = generateToken(admin.id);
  return { token };
}
import jwt from "jsonwebtoken";

export function generateToken(id: number){
    const secret = process.env.JWT_SECRET;
    if(!secret){
        console.error("JWT_SECRET is not defined in the environment variables.");
        return null;
    }
        try{
           const token = jwt.sign({id}, secret, { expiresIn: "1h" });
           return token;
            }
        catch (error) {
            console.error("Error when generating token:", error);
            return null;
        }
}
export function verifyToken(token: string){
    const secret= process.env.JWT_SECRET;
    if(!secret){
        console.error("JWT_SECRET is not defined in the environment variables.");
        return null;
    }
    try{
        const decoded = jwt.verify(token, secret);
        return decoded;
    }
    catch (error) {
        console.error("Error when verifying token:", error);
        return null;
    }

}    
        
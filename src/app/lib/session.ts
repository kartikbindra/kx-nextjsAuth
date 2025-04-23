import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // i.e., the token will expire after a day
    const session = await encrypt({userId, expiresAt});

    (await cookies()).set("session", session, {
        httpOnly: true,
        expires: expiresAt,
    });
}

export async function deleteSession() {
    (await cookies()).delete("session");
}

type SessionPayload = {
    userId: string;
    expiresAt: Date;
}

export async function encrypt(payload: SessionPayload){
    return new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(encodedKey);
}

export async function decrypt(session: string | undefined = ""){
    try{
        const {payload} = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    }
    catch (error) {
        console.error("Error decrypting session:", error);
    }
}
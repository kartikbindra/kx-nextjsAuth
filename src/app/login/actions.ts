"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";
import postgres from "postgres";
import bcrypt from "bcrypt";

const sql = postgres(process.env.NEON_DATABASE_URL!, {ssl: 'require'});

// const testUser = {
//     id: "1",
//     email: "test@gmail.com",
//     password: "123456@test",
// };

// using zod for form data validation
const loginSchema = z.object({
    email: z.string().email({message: "Invalid email address." }).trim(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long." }).trim(),
});

const registerSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long." }).trim(),
    email: z.string().email({message: "Invalid email address." }).trim(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long." }).trim(),
});

export async function login( prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    const { email, password } = result.data;

    // if(email !== testUser.email || password !== testUser.password) {
    //     return { errors: { email: ["Invalid email or password."] } };
    // }

    // check if user exists in the database
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if(user.length === 0) {
        return { errors: { email: ["User does not exist. Create an account first!"] } };
    }
    // check if password is correct
    const hashedPassword = user[0].password;
    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
    if(!isPasswordCorrect) {
        return { errors: { password: ["Invalid email or password."] } };
    }
    
    // await createSession(testUser.id);
    await createSession(user[0].id);
    redirect("/home");
}

export async function logout() {
    await deleteSession();
    redirect("/login");
}

export async function register(prevState: any, formData: FormData) {
    const result = registerSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    const { name, email, password } = result.data;

    // if(email === testUser.email) {
    //     return { error: { email: ["Email already exists."] } };
    // }

    // check if user exists in the database
    const user = await sql`SELECT * FROM users WHERE email = ${email} AND name = ${name}`;
    if(user.length > 0) {
        return { errors: { email: ["Email already exists."] } };
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user in the database
    await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;

    // then redirect to login page
    redirect("/login");
}

"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "../lib/session";

const testUser = {
    id: "1",
    email: "test@gmail.com",
    password: "123456@test",
};

// using zod for form data validation
const loginSchema = z.object({
    email: z.string().email({message: "Invalid email address." }).trim(),
    password: z.string().min(8, {message: "Password must be at least 8 characters long." }).trim(),
});

export async function login( prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    const { email, password } = result.data;
    if(email !== testUser.email || password !== testUser.password) {
        return { errors: { email: ["Invalid email or password."] } };
    }

    await createSession(testUser.id);
    redirect("/home");
}

export async function logout() {
    await deleteSession();
    redirect("/login");
}

export async function register(formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { error: result.error.flatten().fieldErrors };
    }

    const { email, password } = result.data;
    if(email === testUser.email) {
        return { error: { email: ["Email already exists."] } };
    }

    // create a user here (import function from lib/user)

    // then redirect to login page
    redirect("/login");
}

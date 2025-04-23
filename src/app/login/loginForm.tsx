"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { useFormStatus } from "react-dom";

export default function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);
    const { pending } = useFormStatus();

    return (
        <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
            <div className="flex flex-col gap-2">
                <input id="email" name="email" placeholder="Email" className="py-2 px-4 rounded-md border-1 border-white/20"/>
            </div>
            {
                state?.errors?.email && (
                    <p className="text-red-500 text-sm">{state.errors.email}</p>
                )
            }
            <div className="flex flex-col gap-2">
                <input id="password" name="password" type="password" placeholder="Password" className="py-2 px-4 rounded-md border-1 border-white/20" />
            </div>
            {
                state?.errors?.password && (
                    <p className="text-red-500 text-sm">{state.errors.password}</p>
                )
            }
            <button type="submit" disabled={pending} className="mt-4 bg-white text-black py-2 px-6 rounded font-semibold hover:cursor-pointer">Login</button>
        </form>
    )
}
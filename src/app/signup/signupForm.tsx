"use client";

import { useActionState } from "react";
import { register } from "../login/actions";
import { useFormStatus } from "react-dom";

export default function LoginForm() {
    const [state, registerAction] = useActionState(register, undefined);
    const { pending } = useFormStatus();

    return (
        <form action={registerAction} className="flex max-w-[300px] flex-col gap-2 font-[Overused_Grotesk]">
            <div className="flex flex-col gap-2 items-center justify-center">
                <input id="name" name="name" placeholder="Name" className='bg-background/50 dark:bg-background/50 text-foreground rounded-md px-4 py-2 outline-none border-1 border-foreground/20 w-[350px]'/>
            </div>
            {
                state?.errors?.name && (
                    <p className="text-red-500 text-sm">{state.errors.name}</p>
                )
            }
            <div className="flex flex-col gap-2 items-center justify-center">
                <input id="email" name="email" placeholder="Email" className='bg-background/50 dark:bg-background/50 text-foreground rounded-md px-4 py-2 outline-none border-1 border-foreground/20 w-[350px]'/>
            </div>
            {
                state?.errors?.email && (
                    <p className="text-red-500 text-sm">{state.errors.email}</p>
                )
            }
            <div className="flex flex-col gap-2 items-center justify-center">
                <input id="password" name="password" type="password" placeholder="Password" className='bg-background/50 dark:bg-background/50 text-foreground rounded-md px-4 py-2 outline-none border-1 border-foreground/20 w-[350px]' />
            </div>
            {
                state?.errors?.password && (
                    <p className="text-red-500 text-sm">{state.errors.password}</p>
                )
            }
            <div className="flex flex-col gap-2 items-center justify-center">
            <button type="submit" disabled={pending} className='bg-foreground text-background py-2.5 rounded-lg w-[350px] hover:bg-foreground/75 transition duration-300 hover:cursor-pointer font-medium'>Signup</button>
            </div>
        </form>
    )
}
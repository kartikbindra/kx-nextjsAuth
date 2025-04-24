"use client";
import LoginForm from "./loginForm";
import Link from "next/link";
import FollowCursor from "../ui/followCursor";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen z-10">
            <FollowCursor/>
        <div className="flex flex-col justify-center items-center dark:bg-background dark:text-foreground bg-background text-foreground gap-4 font-[Overused_Grotesk] bg-foreground/3 dark:bg-foreground/3 px-16 py-16 rounded-xl shadow-md w-fit mx-auto h-fit my-auto border-1 border-foreground/10 backdrop-blur-xl">
            <div className='flex flex-col gap-1 items-center justify-center'>
            <h1 className='text-5xl text-center font-[Instrument_Serif]'>Hey, Welcome Back!</h1>
            <p className='text-foreground/65 text-md'>First time here? <Link href={'/signup'} className='text-foreground'>Signup for free!</Link></p>
            </div>
            <LoginForm />
        </div>
        </div>
    )
}
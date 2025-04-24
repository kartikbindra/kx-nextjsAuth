"use client";

import { logout } from "../login/actions";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 font-[Overused_Grotesk] text-foreground z-10">
            <h1 className="text-4xl font-[Instrument_Serif]">Welcome to the Home Page</h1>
            <p className="mt-4 text-xl text-foreground/50">This is a simple home page.</p>
            <button
                onClick={logout}
                className="mt-4 bg-white text-black py-2 px-6 rounded font-semibold hover:cursor-pointer"
            >
                Logout
            </button>
        </div>
    );
}
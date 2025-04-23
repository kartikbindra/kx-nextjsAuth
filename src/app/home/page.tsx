"use client";

import { logout } from "../login/actions";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4">This is a simple home page.</p>
            <button
                onClick={logout}
                className="mt-4 bg-white text-black py-2 px-6 rounded font-semibold hover:cursor-pointer"
            >
                Logout
            </button>
        </div>
    );
}
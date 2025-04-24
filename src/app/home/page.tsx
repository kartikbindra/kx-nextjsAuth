"use client";

import { logout } from "../login/actions";
import BlobBackground from "../ui/blobBackground";
import Navbar from "../ui/Navbar";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 font-[Overused_Grotesk] text-foreground z-10">
            <BlobBackground />
            <Navbar />
            <h1 className="text-5xl font-[Instrument_Serif]">Welcome to the Home Page</h1>
            <p className="mt-4 text-xl text-foreground/50">Enjoy the Background Animation.</p>
            <button
                onClick={logout}
                className="mt-4 bg-white text-black py-2 px-6 rounded font-semibold hover:cursor-pointer hover:bg-[#ccc] transition duration-300"
            >
                Logout
            </button>
        </div>
    );
}
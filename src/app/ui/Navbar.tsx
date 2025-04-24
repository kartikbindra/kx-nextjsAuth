import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 text-foreground absolute top-0 left-0 right-0 z-10 mx-6">
        <div className="text-2xl font-[Instrument_Serif]">Kartik Bindra</div>
        <div className="flex space-x-4">
            <Link href="https://github.com/kartikbindra/kx-nextjsAuth" className="flex gap-1 hover:text-[#ccc] hover:underline transition duration-300 items-center" target="_blank" rel="noopener noreferrer">
                Github <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/in/kartik-bindra/" className="flex gap-1 hover:text-[#ccc] hover:underline transition duration-300 items-center" target="_blank" rel="noopener noreferrer">
                Linkedin <ExternalLink className="w-4 h-4" />
            </Link>
        </div>
        </nav>
    );
    }
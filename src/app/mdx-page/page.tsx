"use client";
import MdxContent from './mdxContent/mdx-page.mdx';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 font-[Overused_Grotesk] text-foreground z-10">
        <h1 className="text-4xl font-[Instrument_Serif]">Welcome to the MDX Page</h1>
        <MdxContent />
        </div>
    );
    }
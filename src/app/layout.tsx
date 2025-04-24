import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import FollowCursor from "./ui/followCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "KX-Task | Kartik Bindra",
  description: "KraftedX Task Submission | Auth + Gradient Background + Approach ReadME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} antialiased`}
      >
        {/* <BlobBackground /> */}
        {children}
      </body>
    </html>
  );
}

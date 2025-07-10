import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "../globals.css";


const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["cyrillic"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["cyrillic"],
});

export const metadata: Metadata = {
    title: "ATATEK - Жүйеге кіру",
};

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
            {children}
        </div>
    );
}

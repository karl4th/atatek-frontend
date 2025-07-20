import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/sonner"

// Временно используем системные шрифты вместо Google Fonts
// для решения проблемы со сборкой Docker
const nunito = {
    variable: "--font-nunito",
    className: "font-sans"
};

const nunitoSans = {
    variable: "--font-nunito-sans", 
    className: "font-sans"
};

export const metadata: Metadata = {
    title: "ATATEK - Онлайн шежіре",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="kz">
            <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
                <Toaster />
            </body>
        </html>
    );
}

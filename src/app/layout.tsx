import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeProvider from "@/context/themeContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regular News App",
  description: "This is The News Portal Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <ThemeProvider>
       <Navbar/>
        <main className='min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
        </main>
        <Footer/>
        </ThemeProvider>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./NextAuthProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teamify - Set Up Your Office",
  description: "Teamify helps you set up and manage your office workspace efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "  bg-[url(/bg-image.png)] bg-cover"} >
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)]">
        <NextAuthProvider>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>

        <Footer />
        </NextAuthProvider>

        </div>
      </body>
    </html>
  );
}

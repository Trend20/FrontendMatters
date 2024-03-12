import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="flex w-full flex-col">
            {/* header */}
            <Header />
            {/* main homepage contents */}
            <main className="flex flex-col w-full min-h-screen">
              {children}
            </main>
            {/* footer */}
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "PokéArchive",
  description: "A modern Pokémon archive to discover, search, and learn about every Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col p-5">{children}</body>
    </html>
  );
}

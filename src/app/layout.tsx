import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "@/components/shared/Header/Header";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Nature Guardians",
  description:
    "Join Nature Guardians Foundation in our mission to protect the environment.",
  keywords: [
    "environmental protection",
    "nature conservation",
    "reforestation",
    "eco-friendly projects",
    "Nature Guardians",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
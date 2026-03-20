import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Nature Guardians",
    template: "%s | Nature Guardians",
  },
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

// юзати на сторінці для назви вкладок через роздільник:
// export const metadata = {
//   title: "Our Events"
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
// @ts-ignore: Background.tsx is not detected as a module by the compiler
import Background from "./components/Background";
// @ts-ignore: Nav.tsx is not detected as a module by the compiler
import Nav from "./components/Nav";
// @ts-ignore: Footer.tsx is not detected as a module by the compiler
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Seifert Sites — Web Design & Development",
  description:
    "Seifert Sites builds modern, high-performance websites with premium design and clean code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Nav />
        <main className="site">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

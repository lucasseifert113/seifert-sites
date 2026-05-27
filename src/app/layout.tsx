import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seifert Sites Mockups",
  description: "Small-town SMB website mockup generator"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

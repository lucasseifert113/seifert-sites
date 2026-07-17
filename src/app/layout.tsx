import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tay Blendz | Platteville Barber",
  description:
    "Book modern cuts and clean fades with Tay The Barber in Platteville, Wisconsin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeremy Adrian Cacho | Portfolio",
  description:
    "Portfolio of Jeremy Adrian Cacho, software developer focused on web development, game development, networking, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
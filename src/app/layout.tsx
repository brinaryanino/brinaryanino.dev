import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brinarya Nino Sudhipurwa — Web Developer Portfolio",
  description: "Clean Dark Fantasy Grimoire portfolio of Web Developer Brinarya Nino Sudhipurwa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0a0a0c] font-sans antialiased text-[#e2e8f0]">
        {children}
      </body>
    </html>
  );
}

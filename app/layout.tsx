import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "antd/dist/reset.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Products",
  description: "Display Products App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center bg-gray-50">
        <main className="w-full max-w-6xl p-6">{children}</main>
      </body>
    </html>
  );
}

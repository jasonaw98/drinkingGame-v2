import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Drinking Games 🍻",
  description: "Mini drinking game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <Script
        defer
        src="https://umami-analytics-gules.vercel.app/script.js"
        data-website-id="46cf4871-18e1-49b1-b948-d455912e4033"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-radial-[at_50%_25%] from-[#647dd2] to-[#37528d]`}
      >
        {children}
      </body>
    </html>
  );
}

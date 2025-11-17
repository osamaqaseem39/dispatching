import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reliable Truck Dispatching & Road Freight Services Across the USA | Freights Logistic",
  description:
    "Freights Logistic provides trusted truck dispatching and road freight transportation across the United States. Safe, on-time, and affordable logistics — powered by experts.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Truck Dispatch Services USA – Freight Logistic LLC",
    description:
      "Reliable, affordable, and transparent dispatching solutions: load booking, rate negotiation, paperwork, route optimization, and 24/7 support.",
    type: "website",
    locale: "en_US",
    url: "https://www.freightslogistic.com",
    siteName: "Freight Logistic LLC",
  },
  metadataBase: new URL("https://www.freightslogistic.com"),
  twitter: {
    card: "summary_large_image",
    title: "Freight Logistic LLC – Truck Dispatch Services USA",
    description:
      "Your trusted partner for professional truck dispatching: high-paying loads, paperwork, compliance, and 24/7 support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <Header />
        {children}
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}

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
  title: "Truck Dispatch Services USA – Freight Logistic LLC",
  description:
    "Professional truck dispatching for owner-operators, small fleets, and independent truckers across the USA. Load booking, rate negotiation, paperwork, compliance, and 24/7 support.",
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

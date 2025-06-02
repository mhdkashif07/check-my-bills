import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
// import Script from "next/script";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Check My Bills",
  description: "Check My Bills",
  icons: "/checkbillslogo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Check My Bills</title>
        <meta name="description" content="Check My Bills" />
        <meta
          name="keywords"
          content="Check My Bills, Broadband, Mobile Phones, Energy, Insurance, Deals"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Check My Bills" key="title" />
      </head>
      <body className={`${inter.className}`} style={{ height: "100dvh" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

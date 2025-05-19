import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SwitchPal - Compare Business Services",
  description: "Find the best deals for your business with SwitchPal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        src=" https://whitelabels.stickeebroadband.co.uk/js/loader.js"
        async
      ></script>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

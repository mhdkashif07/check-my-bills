import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
// import Script from "next/script";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Script from "next/script";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Check My Bills",
  description: "Check My Bills",
  icons: "/favicon-icon.png",
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
        {/* trustpilot script */}
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
          async
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SGEKK7287N"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SGEKK7287N');
            `,
          }}
        />
        {/* Facebook Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '3038349826319965');
      fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=3038349826319965&ev=PageView&noscript=1" />`,
          }}
        />
      </head>
      <body className={`${inter.className}`} style={{ height: "100dvh" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

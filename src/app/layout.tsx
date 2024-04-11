import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuzzBlend",
  description: "Automated Blogging",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <Script
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4263655027113293"
      />
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto container">{children}</div>
      </body>
    </html>
  );
}

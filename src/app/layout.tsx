import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { NavbarProvider } from '@/components/navbar/context/NavbarContext';
import Layout from "./_core/components/Layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alessandro's Portfolio",
  description: "Alessandro Masiero Developer Portfolio",
};

//<link rel='icon' type="image/x-icon" href='/favicon.ico' />
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarProvider>
          <Layout className="mx-3 sm:mx-16 md:mx-24 lg:mx-32 gap-12 mb-16">
            {children}
          </Layout>
        </NavbarProvider>
      </body>
    </html>
  );
}

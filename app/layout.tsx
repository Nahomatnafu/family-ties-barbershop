import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Family Ties Barbershop | Premium Haircuts in North Mankato, MN",
  description: "North Mankato's home for precision haircuts, beard trims, and premium grooming. Book with Alex, Ty, Donnie, or Mike today.",
  keywords: "barbershop, haircut, North Mankato, Minnesota, beard trim, men's grooming, family ties",
  openGraph: {
    title: "Family Ties Barbershop | Premium Haircuts in North Mankato, MN",
    description: "North Mankato's home for precision haircuts, beard trims, and premium grooming. Book with Alex, Ty, Donnie, or Mike today.",
    type: "website",
    locale: "en_US",
    siteName: "Family Ties Barbershop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Ties Barbershop | Premium Haircuts in North Mankato, MN",
    description: "North Mankato's home for precision haircuts, beard trims, and premium grooming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


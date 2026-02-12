import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Family Ties Barbershop | Best Barber in North Mankato & Mankato, MN",
  description: "Top-rated barbershop in North Mankato, MN. Expert haircuts, fades, beard trims & hot shaves. Serving Mankato area. Walk-ins welcome! 407 Range St. Call 507-720-0522",
  keywords: [
    // Primary local keywords
    "barbershop near me",
    "barber near me",
    "North Mankato barbershop",
    "Mankato barbershop",
    "North Mankato barber",
    "Mankato barber",
    // Service keywords
    "haircut North Mankato",
    "haircut Mankato",
    "mens haircut North Mankato",
    "fade haircut Mankato",
    "beard trim North Mankato",
    "hot shave Mankato",
    "kids haircut North Mankato",
    // Long-tail keywords
    "best barbershop in North Mankato",
    "best barber in Mankato MN",
    "barbershop near me North Mankato",
    "mens grooming Mankato",
    "traditional barbershop Minnesota",
    "family barbershop North Mankato",
    // Brand
    "Family Ties Barbershop",
  ].join(", "),
  authors: [{ name: "Family Ties Barbershop" }],
  creator: "Family Ties Barbershop",
  publisher: "Family Ties Barbershop",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://family-ties-barbershop.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Family Ties Barbershop | Best Barber in North Mankato & Mankato, MN",
    description: "Top-rated barbershop in North Mankato, MN. Expert haircuts, fades, beard trims & hot shaves. Serving Mankato area. Walk-ins welcome! 407 Range St.",
    url: 'https://family-ties-barbershop.vercel.app',
    siteName: "Family Ties Barbershop",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/assets/barbershop-images/hero/family-ties-hero-v01.png',
        width: 1200,
        height: 630,
        alt: 'Family Ties Barbershop - North Mankato, MN',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Ties Barbershop | Best Barber in North Mankato & Mankato, MN",
    description: "Top-rated barbershop in North Mankato, MN. Expert haircuts, fades, beard trims & hot shaves.",
    images: ['/assets/barbershop-images/hero/family-ties-hero-v01.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-google-verification-code',
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
        <StructuredData />
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


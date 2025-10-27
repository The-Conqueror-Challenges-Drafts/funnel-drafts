import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics/google-tag-manager";
import { CookieMonitor } from "@/components/analytics/cookie-monitor";
import { ConvertExperiments } from "@/components/analytics/convert-experiments";

const GTM_ID = "GTM-PJ3P2VN";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The Conqueror - Virtual Challenges and Medals I Virtual Challenges",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <CookieMonitor />
        <ConvertExperiments />
        <GoogleTagManager gtmId={GTM_ID} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleTagManagerNoScript gtmId={GTM_ID} />
        {children}
      </body>
    </html>
  );
}

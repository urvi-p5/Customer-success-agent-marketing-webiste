import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vigil.AI — Stop Churn Before It Starts",
  description:
    "Vigil.AI detects user struggle patterns in real-time and intervenes with contextual help before the user churns. Automated Customer Success, powered by AI.",
  keywords: [
    "customer success",
    "churn prevention",
    "AI",
    "SaaS",
    "user retention",
    "dead clicks",
    "behavioral analysis",
  ],
  openGraph: {
    title: "Vigil.AI — Stop Churn Before It Starts",
    description:
      "Vigil.AI watches how your users interact with your SaaS and intervenes with real-time guidance when they get stuck.",
    type: "website",
  },
  robots:
    "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

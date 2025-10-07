import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omnis Tech — Research, Products & AI Solutions",
  description:
    "Omnis is a tech innovation company pioneering AI research, intelligent automation, and next-generation digital solutions. We build products and services that shape the future.",
  keywords: [
    "Omnis",
    "AI research",
    "Generative AI",
    "Automation",
    "Data Science",
    "Tech company",
    "Innovation",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Omnis Tech Team" }],
  openGraph: {
    title: "Omnis Tech — Innovating the Future with AI",
    description:
      "Explore Omnis: a hub for AI research, automation tools, and transformative tech solutions. Join us in building the future of intelligence.",
    url: "https://omnis-website.vercel.app/",
    siteName: "Omnis Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnis Tech — Innovating the Future with AI",
    description:
      "AI-powered research, intelligent systems, and futuristic tech — built by Omnis.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

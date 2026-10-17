import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://ugobuezeweb.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ugochukwu Meshach | Full-Stack Software Developer",
    template: "%s | Ugochukwu Meshach",
  },
  description:
    "Portfolio of Ugochukwu Meshach, a full-stack software developer building web applications, APIs, AI integrations, and deployment workflows.",
  applicationName: "Ugochukwu Meshach Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ugochukwu Meshach Portfolio",
    title: "Ugochukwu Meshach | Full-Stack Software Developer",
    description:
      "Explore software projects, technical skills, professional experience, and ways to connect.",
  },
  twitter: {
    card: "summary",
    title: "Ugochukwu Meshach | Full-Stack Software Developer",
    description:
      "Full-stack software development, AI integrations, APIs, and cloud deployment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

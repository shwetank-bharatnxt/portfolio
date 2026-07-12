import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shwetankagarwal.com"),
  title: "Shwetank Agarwal — Software Engineer · Fintech & Full-Stack",
  description:
    "Software Development Engineer at BharatNXT building payment products end-to-end — Spring Boot APIs, Golang services, and Angular frontends that ship to production.",
  keywords: [
    "Shwetank Agarwal",
    "Software Engineer",
    "Fintech",
    "Full-Stack Developer",
    "Spring Boot",
    "Golang",
    "Angular",
    "Mumbai",
  ],
  openGraph: {
    title: "Shwetank Agarwal — Software Engineer",
    description:
      "I build products that move money. Fintech engineer shipping payment rails, lending integrations, and frontends end-to-end.",
    url: "https://shwetankagarwal.com",
    siteName: "Shwetank Agarwal",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shwetank Agarwal — Software Engineer",
    description:
      "I build products that move money. Fintech engineer shipping payment rails, lending integrations, and frontends end-to-end.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} font-body bg-ink text-[#e8e8f2] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

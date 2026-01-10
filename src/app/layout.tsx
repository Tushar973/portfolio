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
  title: "Tushar Kumar Gautam | Data Scientist & ML Engineer",
  description:
    "Portfolio of Tushar Kumar Gautam — Data Scientist & ML Engineer specializing in GenAI, NLP, MLOps, and scalable ML systems.",
  keywords: [
    "Tushar Kumar Gautam",
    "Data Scientist",
    "Machine Learning Engineer",
    "GenAI",
    "NLP",
    "MLOps",
    "Portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          min-h-screen
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}

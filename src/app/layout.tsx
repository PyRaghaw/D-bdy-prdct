import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discharge Buddy — Your Smart Recovery Companion",
  description: "Upload your hospital discharge summary PDF. AI reads it, extracts medicines, schedules follow-ups, structures your recovery timeline, and answers your questions 24/7.",
  openGraph: {
    title: "Discharge Buddy — Your Smart Recovery Companion",
    description: "Upload your hospital discharge summary PDF. AI reads it, extracts medicines, schedules follow-ups, structures your recovery timeline, and answers your questions 24/7.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-teal-500/30 selection:text-teal-200">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


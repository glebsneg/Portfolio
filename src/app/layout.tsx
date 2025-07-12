import type { Metadata } from "next";
import { Raleway, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { ThemeWrapper } from "@/components/ThemeWrapper";


const fontMainSans = Raleway({
  variable: "--font-main-sans",
  subsets: ["latin", "cyrillic"],
});

const fontMainMono = JetBrains_Mono({
  variable: "--font-main-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Portfolio of Gleb Snezhko",
  description: "Full-Stack Web Developer TypeScript + WordPress + Node.js + Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${fontMainSans.variable} ${fontMainMono.variable} antialiased`}>
        <ThemeWrapper>
          <main className="min-h-screen flex flex-col justify-center items-center">
            {children}
          </main>
          <SpeedInsights />
        </ThemeWrapper>
      </body>
    </html>
  );
}

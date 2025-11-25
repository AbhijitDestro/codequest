import type { Metadata } from "next";
import { Jersey_10, Inter } from "@next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from '@clerk/themes'

const jersey = Jersey_10({ 
  variable: "--font-jersey-10", 
  subsets: ["latin"], 
  weight: "400" 
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CodeQuest - Learn to Code Through Games",
  description: "Make your programming journey fun, engaging, and effective with our interactive platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
        theme: neobrutalism,
      }}>
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${jersey.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
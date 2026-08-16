import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "TRAVEL TRIBES | Find Your Tribe. Travel Your Story.",
  description: "Curating unforgettable journeys and building communities of passionate travelers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-poppins", "antialiased", "h-full", poppins.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary-fixed selection:text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

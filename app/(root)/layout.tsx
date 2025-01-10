import type { Metadata } from "next";
import { Big_Shoulders_Display, Barlow } from "next/font/google";
import "../globals.css";
import MobileHeader from "@/components/shared/mobile-header";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const bigShouldersDisplay = Big_Shoulders_Display({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-big-shoulders-display",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

// TODO Get description from client
export const metadata: Metadata = {
  title: "Missfit Coaching",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bigShouldersDisplay.variable} ${barlow.variable} ${barlow.className} antialiased`}
      >
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

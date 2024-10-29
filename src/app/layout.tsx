import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./animations.css"
import Navbar from "@/app/components/Navbar";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Calmind",
  description: "Your mental health companion",
  icons: {
    icon: '/logo-web.png',
    apple: '/logo-web.png',
  },
  openGraph: {
    images: '/logo-web.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
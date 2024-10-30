import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./animations.css"

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Muarasuara",
  description: "Your voice matters. Start your journey with us.",
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
      <body className={`${openSans.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
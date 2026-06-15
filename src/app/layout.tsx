import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "زينب داحاج - المترشحة لانتخابات المجلس الشعبي الوطني",
  description: "الموقع الرسمي لزينب داحاج، مرشحة جبهة التحرير الوطني، قائمة رقم 02، ولاية أدرار.",
  openGraph: {
    title: "زينب داحاج - المترشحة لانتخابات المجلس الشعبي الوطني",
    description: "الموقع الرسمي لزينب داحاج، مرشحة جبهة التحرير الوطني، قائمة رقم 02، ولاية أدرار.",
    url: 'https://dahadjzeyneb.com',
    siteName: 'زينب داحاج',
    images: [
      {
        url: 'https://dahadjzeyneb.com/portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'زينب داحاج - المترشحة لانتخابات المجلس الشعبي الوطني',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "زينب داحاج - المترشحة لانتخابات المجلس الشعبي الوطني",
    description: "الموقع الرسمي لزينب داحاج، مرشحة جبهة التحرير الوطني، قائمة رقم 02، ولاية أدرار.",
    images: ['https://dahadjzeyneb.com/portrait.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} font-sans antialiased bg-gray-50 text-gray-900 selection:bg-algeria-green selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

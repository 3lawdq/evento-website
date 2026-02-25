import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Evento | تنظيم حفلات التخرج والفعاليات",
    template: "%s | Evento",
  },
  description:
    "شركة Evento متخصصة في تنظيم حفلات التخرج والفعاليات الجامعية بإخراج مسرحي احترافي وتوثيق مميز.",
  keywords: [
    "Evento",
    "تنظيم حفلات تخرج",
    "متعهد حفلات",
    "فعاليات جامعية",
    "تنظيم مسرح",
    "حفلات العراق",
  ],
  authors: [{ name: "Evento Team" }],
  creator: "Evento",
  openGraph: {
  title: "Evento | تنظيم حفلات التخرج",
  description:
    "نصنع لحظات تخرج لا تُنسى بإخراج مسرحي احترافي وتوثيق عالي الجودة.",
  url: "https://evento-website-smoky.vercel.app/",
  siteName: "Evento",
  locale: "ar_IQ",
  type: "website",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Evento Graduation Events",
    },
  ],
},
  metadataBase: new URL("https://evento-website-smoky.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatbotProvider from "./components/chatbot/ModernChatbotProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Get Beauty and Health - Premium Medical Tourism in Turkey",
  description: "World-class medical tourism services in Turkey. JCI-accredited hospitals, board-certified surgeons, and all-inclusive packages at 60-80% savings. Rhinoplasty, hair transplant, gastric sleeve, and more.",
  keywords: "medical tourism Turkey, rhinoplasty Turkey, hair transplant Turkey, gastric sleeve Turkey, plastic surgery Turkey, JCI accredited hospitals",
  authors: [{ name: "Get Beauty and Health" }],
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: "Get Beauty and Health - Premium Medical Tourism in Turkey",
    description: "World-class medical tourism with 60-80% savings. JCI-accredited hospitals and board-certified surgeons.",
    images: ['/logo-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Get Beauty and Health - Premium Medical Tourism",
    description: "World-class medical tourism in Turkey with 60-80% savings",
    images: ['/logo-main.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${inter.variable} font-inter bg-brand-background antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <div className="pt-0">
          {children}
        </div>
        <Footer />
        <ChatbotProvider />
      </body>
    </html>
  );
}

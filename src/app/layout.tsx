import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evertwine.social"),
  title: "Evertwine - Where Interests Become Friendships",
  description:
    "Discover local meetups, events, and activities that match your passions. Join a community of like-minded people in your area.",
  keywords: "meetup, social, community, local events, networking, activities",
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png?v=2",
  },
  openGraph: {
    title: "Evertwine - Where Interests Become Friendships",
    description:
      "Discover local meetups, events, and activities that match your passions. Join a community of like-minded people in your area.",
    type: "website",
    images: ["/evertwine-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/evertwine-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <Banner />
        <Navigation />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evertwine.social"),
  title: "Evertwine - Where Interests Become Friendships",
  description:
    "Discover local meetups, events, and activities that match your passions. Join a community of like-minded people in your area.",
  keywords: "meetup, social, community, local events, networking, activities",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/evertwine-logo.png",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/evertwine-logo.png" />
      </head>
      <body className={inter.className}>
        <Banner />
        {children}
      </body>
    </html>
  );
}

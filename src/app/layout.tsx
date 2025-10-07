import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evertwine - Where Interests Become Friendships",
  description:
    "Discover local meetups, events, and activities that match your passions. Join a community of like-minded people in your area.",
  keywords: "meetup, social, community, local events, networking, activities",
  openGraph: {
    title: "Evertwine - Where Interests Become Friendships",
    description:
      "Discover local meetups, events, and activities that match your passions. Join a community of like-minded people in your area.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

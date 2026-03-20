import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wine Shipping Gift Cards - Design & Send Custom Gift Cards",
  description: "Create beautiful, personalized wine gift cards with our drag-and-drop designer. Perfect for any occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";

const instrument_sans = Instrument_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DevLinks",
    default: "Login | DevLinks",
  },
  description: "Login to continue to your DevLinks Account",
  keywords: [
    "DevLinks",
    "devlinks",
    "Share links",
    "Share profile",
    "link sharing",
    "custom links",
  ],
  //   openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument_sans.className} bg-gray-300`}>
        {children}
      </body>
    </html>
  );
}

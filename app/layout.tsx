import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Angelo Castillo | Unity Game Developer",
  description:
    "Portfolio of Angelo Castillo — Unity game developer and game designer specializing in 2D/3D experiences.",
  openGraph: {
    title: "Angelo Castillo | Unity Game Developer",
    description:
      "Unity game developer and game designer. Explore my games on itch.io.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
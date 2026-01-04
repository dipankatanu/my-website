import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Dipanka Tanu Sarmah",
    template: "%s | Dipanka Tanu Sarmah",
  },
  description:
    "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
  metadataBase: new URL("https://personalwebsite-delta-olive.vercel.app"), // change after deploy to your Vercel/custom domain
  openGraph: {
    title: "Dipanka Tanu Sarmah",
    description:
      "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipanka Tanu Sarmah",
    description:
      "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
    images: ["/twitter-image"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
        <footer className="max-w-4xl mx-auto px-6 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Dipanka Tanu Sarmah
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import VisitorCount from "./components/VisitorCount";
import RouteTransition from "./components/RouteTransition";

/* ============================================================
   FONT CONFIGURATION
   Using Next.js font optimization with Geist fonts
   ============================================================ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================================
   METADATA CONFIGURATION
   SEO and social media optimization
   ============================================================ */
export const metadata: Metadata = {
  title: {
    default: "Dipanka Tanu Sarmah",
    template: "%s | Dipanka Tanu Sarmah",
  },
  description:
    "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
  metadataBase: new URL("https://personalwebsite-delta-olive.vercel.app"),
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Dipanka Tanu Sarmah",
    description:
      "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image" }],
  },
  
  // Twitter/X card metadata
  twitter: {
    card: "summary_large_image",
    title: "Dipanka Tanu Sarmah",
    description:
      "Computational biologist working on multi-omics, systems biology, network biology, and machine learning.",
    images: ["/twitter-image"],
  },
};

/* ============================================================
   ROOT LAYOUT COMPONENT
   Main application wrapper with global structure
   ============================================================ */
export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          
          {/* ========================================
              NAVIGATION BAR
              Global site navigation
              ======================================== */}
          <Navbar />

          {/* ========================================
              MAIN CONTENT AREA
              Page-specific content with transitions
              ======================================== */}
          <main className="container-lab min-h-[calc(100vh-16rem)] py-8 sm:py-12">
            <RouteTransition>
              {children}
            </RouteTransition>
          </main>

          {/* ========================================
              FOOTER
              Site footer with copyright and visitor count
              ======================================== */}
          <footer className="container-lab border-t border-[color:var(--border-light)] py-8 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Copyright notice */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <p className="text-sm text-[color:var(--text-muted)]">
                  © {currentYear} Dipanka Tanu Sarmah
                </p>
                
                {/* Optional: Add social links or additional footer links here */}
                <div className="hidden items-center gap-4 text-sm sm:flex">
                  <span className="text-[color:var(--border-medium)]" aria-hidden="true">•</span>
                  <span className="text-[color:var(--text-muted)]">
                    Built with Next.js & Tailwind
                  </span>
                </div>
              </div>

              {/* Visitor counter */}
              <VisitorCount />
            </div>
          </footer>

        </Providers>
      </body>
    </html>
  );
}

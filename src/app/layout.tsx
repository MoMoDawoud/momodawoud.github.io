import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohamed Dawoud | Security & Privacy Researcher",
    template: "%s | Mohamed Dawoud",
  },
  description:
    "PhD Student in Computer Science at UC Santa Cruz, researching human-centered security and privacy. Exploring cybercrime ecosystems, Android malware, and security education.",
  keywords: [
    "Mohamed Dawoud",
    "Security Research",
    "Privacy",
    "PhD Student",
    "UC Santa Cruz",
    "Cybersecurity",
    "Computer Science",
  ],
  authors: [{ name: "Mohamed Dawoud" }],
  creator: "Mohamed Dawoud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momodawoud.github.io",
    title: "Mohamed Dawoud | Security & Privacy Researcher",
    description:
      "PhD Student in Computer Science at UC Santa Cruz, researching human-centered security and privacy.",
    siteName: "Mohamed Dawoud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dawoud | Security & Privacy Researcher",
    description:
      "PhD Student in Computer Science at UC Santa Cruz, researching human-centered security and privacy.",
    creator: "@mohameddawoud",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

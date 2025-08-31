import type { Metadata } from "next";
import { Geist, Oswald, Roboto_Flex  } from "next/font/google";
import "./globals.css";
import ClientWrapper from './client-wrapper'
import { Toaster } from "@/components/ui/sonner"
import SmoothScroll from '@/lib/lenis'
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald", 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});



export const metadata: Metadata = {
  title: "H Aditya Kumar | Software Developer",
  description: "Hi, this is my portfolio",
  keywords: [
    "H Aditya Kumar",
    "H Aditya Kumar projects",
  ],
  authors: [{ name: "H Aditya Kumar", url: "https://www.linkedin.com/in/hadityakumar" }],
  creator: "H Aditya Kumar",
  openGraph: {
    title: "H Aditya Kumar | Software Developer",
    description: "Hi, this is my portfolio",
    url: "https://shaheen-amjed.vercel.app",
    siteName: "H Aditya Kumar Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "H Aditya Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H Aditya Kumar | Portfolio",
    description: "Discover H Aditya Kumar's work",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://shaheen-amjed.vercel.app",
    languages: {
      "en-US": "https://shaheen-amjed.vercel.app/en",
      "ar": "https://shaheen-amjed.vercel.app/ar",
    },
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
  metadataBase: new URL("https://shaheen-amjed.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "name": "H Aditya Kumar",
              "url": "https://shaheen-amjed.vercel.app",
              "sameAs": [
                "https://github.com/shaheen-amjed",
                "https://www.linkedin.com/in/shaheen-amjed-b360b1345",
                "https://www.instagram.com/lxn.rs"
              ],
              "jobTitle": "Full-Stack Web Developer & Designer",
              "email": "shaheen101sec@gmail.com"
            },
            {
              "@type": "WebSite",
              "url": "https://shaheen-amjed.vercel.app",
              "name": "H Aditya Kumar Portfolio",
              "publisher": {
                "@type": "Person",
                "name": "H Aditya Kumar"
              }
            }
          ]
        })}
      </script>
    </head>
      <body
        className={`${geistSans.variable} ${oswald.variable} ${oswald.className} ${robotoFlex.variable} bg antialiased`}
      >
  <SmoothScroll />
        <ClientWrapper>
        {children}
        <Toaster />
        <CustomCursor />
        </ClientWrapper>
      </body>
    </html>
  );
}

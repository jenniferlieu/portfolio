import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { allSiteInfos } from "contentlayer/generated";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const sfMono = localFont({
  src: [
    {
      path: "../fonts/sf-mono/SFMonoLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoLightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/sf-mono/SFMonoRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoRegularItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/sf-mono/SFMonoMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoMediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/sf-mono/SFMonoSemibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoMediumItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/sf-mono/SFMonoBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoHeavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/sf-mono/SFMonoHeavyItalic.woff",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-sf-mono",
});

const siteInfo = allSiteInfos[0];
export const metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
  keywords: siteInfo.keywords,
  authors: [{ name: siteInfo.author }],
  creator: siteInfo.author,
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    url: siteInfo.url,
    siteName: siteInfo.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteInfo.title,
    description: siteInfo.description,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-96x96.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${publicSans.variable} ${sfMono.variable} font-sans bg-bg text-text-muted antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

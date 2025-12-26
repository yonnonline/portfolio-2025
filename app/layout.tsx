import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { siteConfig } from "@/lib/constants";
import { getOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.title, url: siteConfig.url }],
  creator: siteConfig.title,
  publisher: siteConfig.title,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: getOgImage(),
        width: 1200,
        height: 630,
        alt: siteConfig.title
      }
    ],
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [getOgImage()]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-body">
        <ThemeProvider>
          <div className="grain-overlay fixed inset-0 -z-20" aria-hidden />
          <div
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--accent))/0.18,transparent_35%),radial-gradient(circle_at_80%_0,hsl(var(--accent))/0.12,transparent_30%),radial-gradient(circle_at_50%_80%,hsl(var(--accent))/0.1,transparent_30%)]"
            aria-hidden
          />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

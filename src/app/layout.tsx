import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { hotelJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Hotel Ambassador Lahore",
  "Hotel Ambassador Lahore is a premium hotel website demo for rooms, dining, events, meetings, family stays, and business travel in Lahore."
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd()) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}

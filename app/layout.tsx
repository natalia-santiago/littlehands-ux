import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { serviceAreas } from "@/lib/service-areas";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Soft Play Rentals for Babies and Toddlers in Goldsboro, NC`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Beautiful soft play setups for birthdays, baby showers, playdates, and special events.",
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${siteConfig.name} | Soft Play Rentals for Babies and Toddlers in Goldsboro, NC`,
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Beautiful soft play setups for birthdays, baby showers, playdates, and special events.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183450/hero_z7izmm.jpg",
        width: 1200,
        height: 630,
        alt: `Luxury soft play rental setup by ${siteConfig.name} in Goldsboro, North Carolina for babies and toddlers`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Soft Play Rentals for Babies and Toddlers in Goldsboro, NC`,
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Beautiful soft play setups for birthdays, baby showers, playdates, and special events.",
    images: ["https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183450/hero_z7izmm.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceAreaNames = serviceAreas.map((area) =>
    area.name.replace(", NC", ""),
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/apple-touch-icon.png`,
    sameAs: [siteConfig.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183450/hero_z7izmm.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Beautiful soft play setups for birthdays, baby showers, playdates, and special events.",
    priceRange: "$225-$350",
    parentOrganization: {
      "@id": `${siteConfig.url}#organization`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goldsboro",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: serviceAreaNames.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [siteConfig.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: "English",
      },
    ],
    knowsAbout: [
      "Soft play rentals",
      "Baby party rentals",
      "Toddler party rentals",
      "Birthday soft play rentals",
      "Baby shower soft play rentals",
      "Mobile soft play setups",
      "Luxury soft play rentals in Goldsboro, NC",
    ],
    serviceType: [
      "Mobile soft play rentals",
      "Soft play rentals for birthdays",
      "Soft play rentals for baby showers",
      "Soft play rentals for playdates",
      "Toddler party rentals",
      "Luxury soft play event rentals",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Beautiful soft play setups for birthdays, baby showers, playdates, and special events.",
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/service-areas/{search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import PackagesPreview from "@/components/PackagesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import ContactCTA from "@/components/ContactCTA";
import InstagramPreview from "@/components/InstagramPreview";
import SectionTitle from "@/components/SectionTitle";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soft Play Rentals for Babies and Toddlers in Goldsboro, NC",
  description:
    "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Explore beautiful setups for birthdays, baby showers, playdates, and special events.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Soft Play Rentals for Babies and Toddlers in Goldsboro, NC | Little Hands Mobile Soft Play",
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Explore beautiful setups for birthdays, baby showers, playdates, and special events.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury soft play rental setup in Goldsboro, North Carolina for babies and toddlers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Soft Play Rentals for Babies and Toddlers in Goldsboro, NC | Little Hands Mobile Soft Play",
    description:
      "Luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina. Explore beautiful setups for birthdays, baby showers, playdates, and special events.",
    images: ["/images/hero.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-padding pt-4">
        <div className="container-width grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[40rem]">
            <SectionTitle
              eyebrow="Why Families Choose Us"
              title="Safe, stylish, and stress-free soft play rentals"
              description="Little Hands Mobile Soft Play provides luxury soft play rentals in Goldsboro, North Carolina for babies and toddlers. Our setups are designed to feel elegant, safe, and memorable for every event."
            />

            <div className="mt-6 max-w-[38rem] space-y-4 text-lg leading-8 text-[var(--foreground)]">
              <p>
                Luxury soft play rentals for babies and toddlers in Goldsboro,
                North Carolina.
              </p>

              <p>
                We provide toddler soft play rentals and baby soft play setups
                for birthdays, baby showers, playdates, and special events
                throughout Goldsboro and surrounding areas.
              </p>

              <p>
                Explore our{" "}
                <Link
                  href="/packages"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  soft play rental packages
                </Link>{" "}
                to find the right setup for your event, browse our{" "}
                <Link
                  href="/gallery"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  gallery
                </Link>{" "}
                to see real soft play inspiration, and visit our{" "}
                <Link
                  href="/service-areas"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  service areas
                </Link>{" "}
                page to confirm we travel to your location.
              </p>
            </div>

            <div className="mt-10 space-y-5 text-[var(--foreground)]">
              <div className="soft-card fade-in-up fade-in-delay-1 rounded-[1.5rem] p-6 text-lg leading-8">
                Clean, modern soft play setups designed for babies and toddlers
                ages 0 to 5.
              </div>

              <div className="soft-card fade-in-up fade-in-delay-2 rounded-[1.5rem] p-6 text-lg leading-8">
                All equipment is thoroughly cleaned and sanitized before every
                event.
              </div>

              <div className="soft-card fade-in-up fade-in-delay-3 rounded-[1.5rem] p-6 text-lg leading-8">
                Delivery, setup, and takedown are included so your event feels
                simple, polished, and stress-free.
              </div>
            </div>
          </div>

          <div className="soft-card-lg fade-in-up fade-in-delay-2 overflow-hidden rounded-[2.25rem] p-4">
            <Image
              src="/images/setup-2.jpg"
              alt="Luxury soft play rental setup in Goldsboro, North Carolina for babies and toddlers"
              width={900}
              height={1100}
              priority
              className="h-[460px] w-full rounded-[1.6rem] object-cover contrast-105 md:h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 md:pb-14">
        <div className="container-width">
          <div className="soft-card fade-in-up grid gap-8 rounded-[2rem] px-8 py-8 text-center md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-3xl text-[var(--soft-brown)]">Ages 0–5</p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Designed for babies and toddlers
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">
                Setup Included
              </p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Delivery, setup, and takedown handled
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">
                Custom Themes
              </p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Optional styling for your event
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">
                Goldsboro, NC
              </p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Serving Goldsboro and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-width">
          <div className="mx-auto max-w-4xl text-center text-lg leading-8 text-[var(--foreground)]">
            <p>
              Our luxury soft play rentals in Goldsboro, NC are ideal for
              families looking for a beautiful, age-appropriate play space that
              keeps little ones engaged while complementing the style of the
              event.
            </p>

            <p className="mt-4">
              Whether you are planning a birthday, baby shower, or playdate,
              you can explore our{" "}
              <Link
                href="/packages"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                packages
              </Link>{" "}
              and view our{" "}
              <Link
                href="/gallery"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                real event setups
              </Link>{" "}
              before booking.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-width">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl">
              Soft Play Rentals in Goldsboro and Surrounding Areas
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[var(--foreground)]">
              We provide luxury soft play rentals in Goldsboro, NC and nearby
              areas including Wilson, Kinston, Smithfield, Selma, Clayton, Mount
              Olive, Princeton, La Grange, and Four Oaks.
            </p>

            <div className="mt-6">
              <Link
                href="/service-areas"
                className="btn-secondary inline-block"
              >
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PackagesPreview />
      <GalleryPreview />
      <InstagramPreview />
      <FAQSection />

      <section className="pb-4">
        <div className="container-width">
          <p className="text-center text-sm leading-7 text-[var(--foreground)]/80">
            Have more questions? Visit our{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
            >
              contact page
            </Link>{" "}
            to ask about availability, packages, event details, and soft play
            rentals in Goldsboro, NC.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
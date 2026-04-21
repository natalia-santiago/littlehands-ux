import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soft Play Rental Packages for Babies and Toddlers in Goldsboro, NC",
  description:
    "Explore luxury soft play rental packages for babies and toddlers in Goldsboro, North Carolina from Little Hands Mobile Soft Play. Compare Mini, Basic, and Deluxe options for birthdays, baby showers, playdates, and special events.",
  alternates: {
    canonical: "/packages",
  },
};

const packages = [
  {
    name: "Mini Package",
    price: "$225",
    shortLabel: "Perfect for smaller celebrations",
    priceNote: "Perfect for small birthdays and playdates",
    description:
      "A beautiful starter soft play rental for smaller parties, playdates, and intimate celebrations.",
    features: [
      "Perfect for smaller event spaces",
      "Designed for babies and toddlers ages 0–5",
      "A simple, elegant setup for cozy celebrations",
      "Delivery, setup, and takedown included",
    ],
  },
  {
    name: "Basic Package",
    price: "$265",
    shortLabel: "Our most popular choice",
    priceNote: "Most popular for birthdays and baby showers",
    description:
      "A balanced soft play rental with more play elements for birthdays, baby showers, and special events.",
    features: [
      "Includes soft play set, ball pit, slide, and more",
      "Great for families who want a fuller setup",
      "Beautiful for birthdays, baby showers, and playdates",
      "Delivery, setup, and takedown included",
    ],
    featured: true,
  },
  {
    name: "Deluxe Package",
    price: "$350",
    shortLabel: "Ideal for bigger celebrations",
    priceNote: "Best for larger, more memorable celebrations",
    description:
      "Our most exciting soft play package, designed for larger celebrations and a more memorable event experience.",
    features: [
      "Includes bounce house for added fun",
      "Ideal for larger events and fuller setups",
      "Creates a more memorable play space for little ones",
      "Delivery, setup, and takedown included",
    ],
  },
];

export default function PackagesPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="Packages"
            title="Soft Play Rental Packages for Babies and Toddlers in Goldsboro, NC"
            description="Choose the perfect soft play rental for your birthday, baby shower, playdate, or special event. Every package includes delivery, setup, and takedown for a stress-free experience."
            center
            as="h1"
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              Designed for babies and toddlers and tailored to fit your event
              size, style, and space.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`soft-card flex h-full flex-col rounded-[2rem] bg-white/95 p-10 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] ${
                pkg.featured
                  ? "scale-[1.02] ring-2 ring-[rgba(204,176,154,0.55)] shadow-[0_22px_55px_rgba(126,102,87,0.14)]"
                  : ""
              } ${
                index === 0
                  ? "fade-in-up fade-in-delay-1"
                  : index === 1
                    ? "fade-in-up fade-in-delay-2"
                    : "fade-in-up fade-in-delay-3"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.24em] ${
                  pkg.featured
                    ? "text-[var(--soft-brown)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {pkg.featured ? "Most Popular" : "Package"}
              </p>

              <h2 className="mt-4 text-3xl">{pkg.name}</h2>

              <p className="mt-3 text-base font-medium text-[var(--soft-brown)]">
                {pkg.shortLabel}
              </p>

              <p className="mt-4 text-5xl text-[var(--soft-brown)]">
                {pkg.price}
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-[var(--foreground)]/80">
                {pkg.priceNote}
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--foreground)]">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full text-center">
                  Check Availability
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="soft-card mx-auto max-w-3xl rounded-[2rem] px-8 py-8 text-center">
            <p className="text-lg leading-8 text-[var(--foreground)]">
              Custom themes and balloon add-ons are available for a more
              personalized soft play setup.
            </p>

            <p className="mt-3 text-base leading-7 text-[var(--foreground)]">
              Free delivery is included within our main service area. A delivery
              fee applies for events located more than 35 miles from Goldsboro.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Not sure which package is best? We’ll help you choose the right
            setup based on your space, guest count, and event style.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--foreground)]">
            You can also explore our{" "}
            <Link
              href="/gallery"
              className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
            >
              gallery
            </Link>{" "}
            to see real soft play setup inspiration for birthdays, baby
            showers, and special events, or visit our{" "}
            <Link
              href="/service-areas"
              className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
            >
              service areas
            </Link>{" "}
            page to confirm we travel to your location.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary text-center">
            Check Availability
          </Link>

          <a href={siteConfig.smsHref} className="btn-secondary text-center">
            Text Us for a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
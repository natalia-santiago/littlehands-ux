import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore soft play rental packages from Little Hands Mobile Soft Play, including Mini, Basic, and Deluxe options for birthdays, baby showers, and more.",
  alternates: {
    canonical: "/packages",
  },
};

const packages = [
  {
    name: "Mini Package",
    price: "$225",
    description: "Perfect for small setups and intimate gatherings.",
  },
  {
    name: "Basic Package",
    price: "$265",
    description:
      "Includes soft play set, ball pit, slide, and additional play elements.",
  },
  {
    name: "Deluxe Package",
    price: "$350",
    description: "Includes bounce house for a full experience.",
  },
];

export default function PackagesPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle
          eyebrow="Packages"
          title="Choose the perfect setup for your event"
          description="All packages include delivery, setup, and takedown so you can enjoy your event stress-free."
          center
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`soft-card rounded-[2rem] bg-white/95 p-10 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] ${
                index === 0
                  ? "fade-in-up fade-in-delay-1"
                  : index === 1
                    ? "fade-in-up fade-in-delay-2"
                    : "fade-in-up fade-in-delay-3"
              }`}
            >
              <h3 className="text-3xl">{pkg.name}</h3>

              <p className="mt-4 text-5xl text-[var(--soft-brown)]">
                {pkg.price}
              </p>

              <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-[var(--foreground)]">
          <p className="text-lg">Custom themes & balloons available</p>
          <p className="mt-2 text-lg">
            Free delivery in main area — fee applies beyond 35 miles from
            Goldsboro
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary text-center">
            Book Your Date
          </Link>
          <a href={siteConfig.smsHref} className="btn-secondary text-center">
            Text for Quote
          </a>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const packages = [
  {
    name: "Mini",
    price: "$225",
    shortLabel: "Perfect for smaller celebrations",
    priceNote: "Perfect for small birthdays and playdates",
    description:
      "A beautiful starter setup for smaller parties, playdates, and more intimate celebrations.",
    features: [
      "Perfect for smaller event spaces",
      "Designed for babies and toddlers ages 0–5",
      "Delivery, setup, and takedown included",
    ],
  },
  {
    name: "Basic",
    price: "$265",
    shortLabel: "Our most popular choice",
    priceNote: "Most popular for birthdays and baby showers",
    description:
      "A balanced soft play rental with more play elements for birthdays, baby showers, and special events.",
    features: [
      "Includes soft play set, ball pit, and slide",
      "Great for families who want a fuller setup",
      "Delivery, setup, and takedown included",
    ],
    featured: true,
  },
  {
    name: "Deluxe",
    price: "$350",
    shortLabel: "Ideal for bigger celebrations",
    priceNote: "Best for larger, more memorable celebrations",
    description:
      "Our most exciting package, designed for bigger celebrations and a more memorable event experience.",
    features: [
      "Includes bounce house for added fun",
      "Ideal for larger events and fuller setups",
      "Delivery, setup, and takedown included",
    ],
  },
];

export default function PackagesPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="Packages"
            title="Soft play rental packages for every celebration"
            description="Explore luxury soft play rentals in Goldsboro, North Carolina for birthdays, baby showers, playdates, and special events. Each package is designed to create a safe, stylish, and memorable experience for little ones."
            center
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              Choose the soft play package that best fits your event size,
              style, and space.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`soft-card rounded-[2rem] bg-white/95 p-10 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] fade-in-up ${
                pkg.featured ? "ring-2 ring-[rgba(204,176,154,0.45)]" : ""
              } ${
                index === 0
                  ? "fade-in-delay-1"
                  : index === 1
                    ? "fade-in-delay-2"
                    : "fade-in-delay-3"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
                {pkg.featured ? "Most Popular" : "Package"}
              </p>

              <h3 className="mt-4 text-3xl">{pkg.name}</h3>

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
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Want to compare all package details before booking?
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/packages" className="btn-secondary text-center">
              Compare Packages
            </Link>

            <Link href="/contact" className="btn-primary text-center">
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
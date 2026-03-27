import Link from "next/link";
import SectionTitle from "./SectionTitle";

const packages = [
  {
    name: "Mini",
    price: "$225",
    description: "Perfect for smaller setups and intimate celebrations.",
  },
  {
    name: "Basic",
    price: "$265",
    description: "Includes soft play set, ball pit, slide, and more.",
  },
  {
    name: "Deluxe",
    price: "$350",
    description: "Includes bounce house for an even more exciting setup.",
  },
];

export default function PackagesPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle
          eyebrow="Packages"
          title="Simple packages for beautiful events"
          description="Choose the setup that fits your celebration best. Each package is designed to create a fun, safe, and stylish experience for little ones."
          center
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`soft-card rounded-[2rem] bg-white/95 p-10 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] fade-in-up ${
                index === 0
                  ? "fade-in-delay-1"
                  : index === 1
                    ? "fade-in-delay-2"
                    : "fade-in-delay-3"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
                {pkg.name}
              </p>

              <h3 className="mt-5 text-5xl">{pkg.price}</h3>

              <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/packages" className="btn-secondary">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { serviceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Explore the service areas for Little Hands Mobile Soft Play. We provide luxury soft play rentals for babies and toddlers in Goldsboro, Wilson, Kinston, Smithfield, Selma, and surrounding areas in North Carolina.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas | Little Hands Mobile Soft Play",
    description:
      "Explore the North Carolina service areas for Little Hands Mobile Soft Play, including Goldsboro, Wilson, Kinston, Smithfield, and Selma.",
    url: "/service-areas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Little Hands Mobile Soft Play",
    description:
      "Explore the North Carolina service areas for Little Hands Mobile Soft Play, including Goldsboro, Wilson, Kinston, Smithfield, and Selma.",
  },
};

export default function ServiceAreasPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="Service Areas"
            title="Soft Play Rental Service Areas in Goldsboro, NC and Surrounding Cities"
            description="Little Hands Mobile Soft Play provides luxury soft play rentals for babies and toddlers in Goldsboro and surrounding areas. Explore the cities we serve and find the right setup for your birthday, baby shower, playdate, or special event."
            center
            as="h1"
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              We provide luxury soft play rentals across multiple cities in
              Eastern North Carolina, with delivery, setup, and takedown
              included for a simple, polished, and stress-free event
              experience.
            </p>

            <p className="mt-4">
              Our soft play setups are designed for babies and toddlers and are
              perfect for birthdays, baby showers, playdates, and other special
              celebrations.
            </p>

            <p className="mt-4">
              You can also explore our{" "}
              <Link
                href="/packages"
                className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                soft play packages
              </Link>{" "}
              or browse our{" "}
              <Link
                href="/gallery"
                className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                gallery
              </Link>{" "}
              for setup inspiration before booking.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <Link href="/contact" className="btn-primary min-w-[220px] text-center">
            Check Availability
          </Link>

          <Link
            href="/packages"
            className="btn-secondary min-w-[220px] text-center"
          >
            View Packages
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <article
              key={area.slug}
              className={`soft-card rounded-[2rem] p-8 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] ${
                index % 3 === 0
                  ? "fade-in-up fade-in-delay-1"
                  : index % 3 === 1
                    ? "fade-in-up fade-in-delay-2"
                    : "fade-in-up fade-in-delay-3"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
                Service Area
              </p>

              <h2 className="mt-4 text-3xl">{area.name}</h2>

              {area.county ? (
                <p className="mt-3 text-base text-[var(--soft-brown)]">
                  {area.county}
                </p>
              ) : null}

              <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
                {area.intro}
              </p>

              {area.nearby?.length ? (
                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                  Nearby areas include {area.nearby.join(", ")}.
                </p>
              ) : null}

              <div className="mt-8">
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="btn-primary w-full text-center"
                >
                  View Area
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="soft-card rounded-[2rem] p-8 text-center md:p-10">
            <h2 className="text-3xl">Explore Soft Play Rentals by Location</h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--foreground)]">
              <p>
                Each location page gives you a better look at the areas we serve
                and helps families find soft play rentals closer to their event
                location.
              </p>

              <p>
                You can compare our{" "}
                <Link
                  href="/packages"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  soft play packages
                </Link>{" "}
                to find the right fit and browse our{" "}
                <Link
                  href="/gallery"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  gallery
                </Link>{" "}
                for event inspiration before booking.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="soft-card rounded-[2rem] p-8 text-center md:p-10">
            <h2 className="text-3xl">
              Serving Families Across Goldsboro and Nearby Areas
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--foreground)]">
              <p>
                We proudly serve families across Goldsboro, Wayne County, and
                surrounding North Carolina communities for birthdays, baby
                showers, playdates, and other special events.
              </p>

              <p>
                If you do not see your city listed, visit our{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  contact page
                </Link>{" "}
                and we’ll be happy to help confirm availability for your event
                location.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary min-w-[220px] text-center">
                Check Availability
              </Link>

              <Link
                href="/gallery"
                className="btn-secondary min-w-[220px] text-center"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas } from "@/lib/service-areas";

type ServiceAreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    return {
      title: "Service Area",
    };
  }

  return {
    title: `Soft Play Rentals in ${area.name}`,
    description: `Explore luxury soft play rentals in ${area.name} for babies and toddlers. Little Hands Mobile Soft Play provides beautiful setups for birthdays, baby showers, playdates, and special events with delivery, setup, and takedown included.`,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `Soft Play Rentals in ${area.name} | Little Hands Mobile Soft Play`,
      description: `Explore luxury soft play rentals in ${area.name} for babies and toddlers. Beautiful setups for birthdays, baby showers, playdates, and special events.`,
      url: `/service-areas/${area.slug}`,
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-2_gzctgr.jpg",
          width: 1200,
          height: 630,
          alt: `Soft play rental setup with ball pit and slide for toddlers in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Soft Play Rentals in ${area.name} | Little Hands Mobile Soft Play`,
      description: `Explore luxury soft play rentals in ${area.name} for babies and toddlers. Beautiful setups for birthdays, baby showers, playdates, and special events.`,
      images: ["https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-2_gzctgr.jpg"],
    },
  };
}

export default async function ServiceAreaDetailPage({
  params,
}: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const cityName = area.name.replace(", NC", "");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you offer soft play rentals in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Little Hands Mobile Soft Play provides luxury soft play rentals in ${area.name} for babies and toddlers, with delivery, setup, and takedown included.`,
        },
      },
      {
        "@type": "Question",
        name: "What ages are your soft play rentals best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our soft play setups are designed for babies and toddlers, typically ages 0 to 5.",
        },
      },
      {
        "@type": "Question",
        name: "What types of events are your soft play rentals good for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our setups are a great fit for birthdays, baby showers, playdates, and other special events where families want a safe and beautiful play space for little ones.",
        },
      },
      {
        "@type": "Question",
        name: "Is delivery, setup, and takedown included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Delivery, setup, and takedown are included so your event feels simple, polished, and stress-free.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose the right package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can compare our package options based on your event size, available space, and overall style. If you are unsure, we can help you choose the best fit.",
        },
      },
      {
        "@type": "Question",
        name: `Do you serve areas near ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve select nearby areas as well. If you are outside the main service area, contact us and we can let you know if your event location is covered.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Soft Play Rentals in ${area.name}`,
    serviceType: "Soft play rentals",
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Little Hands Mobile Soft Play",
      url: "https://littlehandsmobilesoftplay.com",
    },
    description: `Luxury soft play rentals in ${area.name} for babies and toddlers, with delivery, setup, and takedown included for birthdays, baby showers, playdates, and special events.`,
  };

  return (
    <section className="section-padding">
      <Script
        id={`faq-schema-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id={`service-schema-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)]">
            Service Area
          </p>

          <h1 className="mt-5 max-w-[900px] text-5xl md:text-6xl">
            Soft Play Rentals in {area.name}
          </h1>

          <p className="mt-4 max-w-[900px] text-lg leading-8 text-[var(--foreground)]">
            Little Hands Mobile Soft Play provides luxury soft play rentals for
            babies and toddlers in {area.name}. We create beautiful setups for
            birthdays, baby showers, playdates, and special events, with
            delivery, setup, and takedown included.
          </p>

          <div className="mt-8 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              Looking for luxury soft play rentals in {area.name}? We create
              elegant, age-appropriate setups designed for babies and toddlers
              ages 0 to 5.
            </p>

            <p className="mt-4">
              Families choose our soft play rentals for birthdays, baby
              showers, and celebrations that feel safe, polished, and easy to
              enjoy.
            </p>

            <p className="mt-4">
              You can explore our{" "}
              <Link
                href="/packages"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                soft play packages
              </Link>{" "}
              to compare options and browse our{" "}
              <Link
                href="/gallery"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                gallery
              </Link>{" "}
              for inspiration before booking.
            </p>

            {area.nearby?.length ? (
              <p className="mt-4">
                You can also explore all of our{" "}
                <Link
                  href="/service-areas"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  service areas
                </Link>{" "}
                to see nearby locations we serve.
              </p>
            ) : null}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary text-center">
              Check Availability
            </Link>

            <Link href="/packages" className="btn-secondary text-center">
              View Packages
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="soft-card-lg overflow-hidden rounded-[2.25rem] p-4">
            <Image
              src="https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-2_gzctgr.jpg"
              alt={`Soft play rental setup with ball pit and slide for toddlers in ${area.name}`}
              width={1400}
              height={900}
              className="h-[300px] w-full rounded-[1.6rem] object-cover contrast-105 md:h-[430px]"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl">What’s Included</h2>

            <ul className="mt-5 space-y-3 text-base leading-8 text-[var(--foreground)]">
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Luxury soft play setups for babies and toddlers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Beautiful options for birthdays and baby showers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Delivery, setup, and takedown included</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Packages sized for different types of events</span>
              </li>
            </ul>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl">Why Families Choose Us</h2>

            <ul className="mt-5 space-y-3 text-base leading-8 text-[var(--foreground)]">
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Designed for little ones ages 0 to 5</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Elegant setups that fit your event style</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>Simple booking and clear communication</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-[var(--primary-dark)]" />
                <span>A smooth experience from delivery to pickup</span>
              </li>
            </ul>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-2xl">Areas Nearby</h2>

            <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
              We proudly serve families in {area.name}
              {area.county ? ` in ${area.county}` : ""} and nearby communities
              across Eastern North Carolina.
            </p>

            {area.nearby?.length ? (
              <p className="mt-3 text-base leading-8 text-[var(--foreground)]">
                Nearby areas include {area.nearby.join(", ")}.
              </p>
            ) : null}

            <div className="mt-6">
              <Link href="/contact" className="btn-primary w-full text-center">
                Check Availability in {cityName}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="soft-card rounded-[2rem] p-8 text-center md:p-10">
            <h2 className="text-3xl">
              Soft Play Rentals for Events in {area.name}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--foreground)]">
              <p>
                Our setups are a great fit for families in {area.name} who want
                a beautiful play space for little ones without adding more
                stress to the event planning process.
              </p>

              <p>
                Whether you are planning a birthday party, baby shower,
                playdate, or another celebration, our soft play rentals help
                create a fun and memorable experience for babies and toddlers.
              </p>

              <p>
                You can explore our{" "}
                <Link
                  href="/packages"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  soft play packages
                </Link>{" "}
                to compare options, then browse our{" "}
                <Link
                  href="/gallery"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  gallery
                </Link>{" "}
                for inspiration.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary text-center">
                Check Availability
              </Link>

              <Link href="/gallery" className="btn-secondary text-center">
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="soft-card rounded-[2rem] p-8 md:p-10">
            <h2 className="text-3xl text-center">
              Frequently Asked Questions About Soft Play Rentals in {area.name}
            </h2>

            <div className="mt-6 divide-y divide-[rgba(126,102,87,0.12)]">
              <div className="py-5">
                <h3 className="text-lg">
                  Do you offer soft play rentals in {cityName}?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  Yes. Little Hands Mobile Soft Play provides luxury soft play
                  rentals in {area.name} for babies and toddlers, with
                  delivery, setup, and takedown included.
                </p>
              </div>

              <div className="py-5">
                <h3 className="text-lg">
                  What ages are your soft play rentals best for?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  Our soft play setups are designed for babies and toddlers,
                  typically ages 0 to 5.
                </p>
              </div>

              <div className="py-5">
                <h3 className="text-lg">
                  What types of events are your soft play rentals good for?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  Our setups are a great fit for birthdays, baby showers,
                  playdates, and other special events where families want a safe
                  and beautiful play space for little ones.
                </p>
              </div>

              <div className="py-5">
                <h3 className="text-lg">
                  Is delivery, setup, and takedown included?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  Yes. Delivery, setup, and takedown are included so your event
                  feels simple, polished, and stress-free.
                </p>
              </div>

              <div className="py-5">
                <h3 className="text-lg">
                  How do I choose the right package?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  You can compare our package options based on your event size,
                  available space, and overall style. If you are unsure, we can
                  help you choose the best fit.
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
                  Compare options on our{" "}
                  <Link
                    href="/packages"
                    className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                  >
                    packages page
                  </Link>
                  .
                </p>
              </div>

              <div className="py-5">
                <h3 className="text-lg">
                  Do you serve areas near {cityName}?
                </h3>
                <p className="mt-2 text-base leading-8 text-[var(--foreground)]">
                  Yes. We serve select nearby areas as well. If you are outside
                  the main service area, contact us and we can let you know if
                  your event location is covered.
                </p>
                {area.nearby?.length ? (
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
                    Nearby areas include {area.nearby.join(", ")}.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Not sure which soft play package is right for your event in{" "}
            {area.name}? Visit our{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
            >
              contact page
            </Link>{" "}
            and we’ll help you choose the perfect setup.
          </p>
        </div>
      </div>
    </section>
  );
}
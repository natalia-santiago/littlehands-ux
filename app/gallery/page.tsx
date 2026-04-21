import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View luxury soft play rental setups by Little Hands Mobile Soft Play in Goldsboro, North Carolina for birthdays, baby showers, playdates, and special events.",
  alternates: {
    canonical: "/gallery",
  },
};

const images = [
  {
    src: "/images/setup-1.jpg",
    alt: "Soft play ball pit and slide setup for toddlers at a birthday party in Goldsboro NC",
  },
  {
    src: "/images/setup-2.jpg",
    alt: "Luxury soft play rental setup for baby shower in Goldsboro North Carolina",
  },
  {
    src: "/images/setup-3.jpg",
    alt: "Elegant soft play setup with ball pit and decorations for toddler event in Goldsboro NC",
  },
];

export default function GalleryPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="Gallery"
            title="Soft Play Gallery in Goldsboro, NC"
            description="Explore luxury soft play rentals designed for birthdays, baby showers, playdates, and special events. Each setup is styled to feel elegant, welcoming, and fun for little ones and their families."
            center
            as="h1"
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              Our gallery highlights soft play setups for babies and toddlers in
              Goldsboro, North Carolina. Every setup is designed to feel
              polished, safe, and beautiful for your event space.
            </p>

            <p className="mt-3">
              From birthday parties to baby showers, our soft play rentals
              create a fun and memorable experience for little ones while
              keeping your event looking clean and elegant.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`soft-card-lg overflow-hidden rounded-[2rem] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] ${
                index === 0
                  ? "fade-in-up fade-in-delay-1"
                  : index === 1
                    ? "fade-in-up fade-in-delay-2"
                    : "fade-in-up fade-in-delay-3"
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  className="h-[300px] w-full object-cover contrast-105 transition duration-300 hover:scale-[1.02] md:h-[380px]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Every setup can be styled around your space, event size, and overall
            theme.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Explore our{" "}
            <Link
              href="/packages"
              className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
            >
              soft play packages
            </Link>{" "}
            to compare options, then reach out when you’re ready to book your
            date.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground)]/80">
            Delivery, setup, and takedown are included so your event feels
            simple, polished, and stress-free.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-center">
              Check Availability
            </Link>

            <Link href="/packages" className="btn-secondary text-center">
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
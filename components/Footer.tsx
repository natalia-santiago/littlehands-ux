import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(126,102,87,0.08)] bg-[rgba(255,255,255,0.95)]">
      <div className="container-width pb-12 pt-10 md:pb-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-3xl md:text-4xl">
              Little Hands Mobile Soft Play
            </h2>

            <p className="mt-5 max-w-sm text-base leading-8 text-[var(--foreground)]">
              Luxury soft play rentals for babies and toddlers in Goldsboro,
              North Carolina for birthdays, baby showers, playdates, and special
              events.
            </p>

            <p className="mt-4 max-w-sm text-base leading-8 text-[var(--foreground)]">
              Serving Goldsboro, Wayne County, and surrounding areas with
              delivery, setup, and takedown included.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--foreground)]">
              <Link
                href="/service-areas"
                className="font-medium underline decoration-[0.08em] underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                Explore all service areas
              </Link>
            </p>

            <div className="mt-6">
              <Link href="/contact" className="btn-secondary">
                Check Availability
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl">Quick Links</h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col gap-4 text-base font-medium text-[var(--foreground)]"
            >
              <Link
                href="/"
                className="transition hover:text-[var(--soft-brown)]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition hover:text-[var(--soft-brown)]"
              >
                About
              </Link>
              <Link
                href="/packages"
                className="transition hover:text-[var(--soft-brown)]"
              >
                Packages
              </Link>
              <Link
                href="/gallery"
                className="transition hover:text-[var(--soft-brown)]"
              >
                Gallery
              </Link>
              <Link
                href="/service-areas"
                className="transition hover:text-[var(--soft-brown)]"
              >
                Service Areas
              </Link>
              <Link
                href="/contact"
                className="transition hover:text-[var(--soft-brown)]"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl">Contact</h2>

            <div className="mt-5 flex flex-col gap-4 text-base leading-8 text-[var(--foreground)]">
              <p>
                <strong>Call:</strong>{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="transition hover:text-[var(--soft-brown)]"
                >
                  {siteConfig.phone}
                </a>
              </p>

              <p>
                <strong>Text:</strong>{" "}
                <a
                  href={siteConfig.smsHref}
                  className="transition hover:text-[var(--soft-brown)]"
                >
                  Text us for a quote
                </a>
              </p>

              <p>
                <strong>Instagram:</strong>{" "}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--soft-brown)]"
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>

              <p>
                <strong>Location:</strong> {siteConfig.location}
              </p>

              <p>
                <strong>Service Area:</strong> {siteConfig.serviceArea}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(126,102,87,0.08)] pt-6">
          <div className="flex flex-col gap-2 text-center text-sm text-[var(--foreground)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>

            <p className="opacity-70">
              Website by{" "}
              <a
                href="https://natalia-santiago-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:opacity-100"
              >
                Natalia Santiago
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="section-padding pt-0">
      <div className="container-width">
        <div className="soft-card-lg rounded-[2.5rem] bg-gradient-to-br from-[rgba(204,176,154,0.25)] to-[rgba(204,176,154,0.08)] px-8 py-12 md:px-14 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:text-sm">
              Book Today
            </p>

            <h2 className="mt-4 text-4xl leading-[1.08] md:text-6xl">
              Reserve a soft play rental for your event in Goldsboro, NC
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">
              Little Hands Mobile Soft Play provides luxury soft play rentals
              for babies and toddlers in Goldsboro, North Carolina and
              surrounding areas for birthdays, baby showers, playdates, and
              special events.
            </p>

            <p className="mt-4 text-base leading-7 text-[var(--foreground)]">
              All equipment is thoroughly cleaned and sanitized before every
              event, and delivery, setup, and takedown are included so you can
              enjoy a stress-free celebration from start to finish.
            </p>

            <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
              You can also explore our{" "}
              <Link
                href="/packages"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                soft play packages
              </Link>{" "}
              or browse our{" "}
              <Link
                href="/gallery"
                className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
              >
                gallery
              </Link>{" "}
              to see real event setups before booking.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-center">
                Check Availability
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="btn-secondary text-center"
              >
                Call {siteConfig.phone}
              </a>

              <a
                href={siteConfig.smsHref}
                className="btn-secondary text-center"
              >
                Text Us for a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
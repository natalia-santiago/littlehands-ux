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
              Let’s create a beautiful play space for your little one
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">
              We provide soft play rentals for birthdays, playdates, baby
              showers, and special events. Reach out today to reserve your date.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-center">
                Contact Us
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
                Text for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
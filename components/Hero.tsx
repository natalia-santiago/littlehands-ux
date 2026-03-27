import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-width grid items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32 xl:py-40">
        <div className="max-w-2xl">
          <p className="fade-in-up mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--foreground)] md:text-sm">
            Luxury Mobile Soft Play
          </p>

          <h1 className="fade-in-up fade-in-delay-1 text-5xl leading-[1.02] text-[var(--soft-brown)] md:text-7xl xl:text-[5.5rem] font-medium">
            Magical play spaces for babies and toddlers
          </h1>

          <p className="fade-in-up fade-in-delay-2 mt-8 max-w-xl text-xl leading-9 text-[var(--foreground)]">
            Little Hands Mobile Soft Play creates safe, stylish, and memorable
            soft play setups for birthdays, baby showers, playdates, and
            special events. We handle setup and takedown so you can enjoy the
            moment.
          </p>

          <div className="fade-in-up fade-in-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-center">
              Book Your Date
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

          <div className="fade-in-up fade-in-delay-4 mt-12 grid gap-4 sm:grid-cols-3">
            <div className="soft-card rounded-[1.75rem] p-6">
              <p className="text-base font-semibold text-[var(--soft-brown)]">
                Ages 0–5
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                Soft play designed for little ones.
              </p>
            </div>

            <div className="soft-card rounded-[1.75rem] p-6">
              <p className="text-base font-semibold text-[var(--soft-brown)]">
                Setup Included
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                We handle setup and takedown for you.
              </p>
            </div>

            <div className="soft-card rounded-[1.75rem] p-6">
              <p className="text-base font-semibold text-[var(--soft-brown)]">
                Custom Themes
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                Personalize your event with optional add-ons.
              </p>
            </div>
          </div>
        </div>

        <div className="fade-in-up fade-in-delay-2 relative">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)] blur-3xl" />
          <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-[rgba(204,176,154,0.22)] blur-3xl" />

          <div className="soft-card-lg relative overflow-hidden rounded-[2.5rem] p-4">
            <img
              src="/images/hero.jpg"
              alt="Little Hands Mobile Soft Play setup"
              className="h-[480px] w-full rounded-[1.8rem] object-cover contrast-105 md:h-[650px] xl:h-[720px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
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

          <h1 className="fade-in-up fade-in-delay-1 text-5xl font-medium leading-[1.02] text-[var(--soft-brown)] md:text-7xl xl:text-[5.5rem]">
            Soft play rentals for babies and toddlers in Goldsboro, NC
          </h1>

          <p className="fade-in-up fade-in-delay-2 mt-8 max-w-xl text-xl leading-9 text-[var(--foreground)]">
            Little Hands Mobile Soft Play creates safe, stylish, and memorable
            soft play setups for babies and toddlers in Goldsboro, North
            Carolina and surrounding areas. We provide soft play rentals for
            birthdays, baby showers, playdates, and special events, with
            delivery, setup, and takedown included.
          </p>

          <div className="fade-in-up fade-in-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-center">
              Check Availability
            </Link>

            <a href={siteConfig.phoneHref} className="btn-secondary text-center">
              Call {siteConfig.phone}
            </a>

            <a href={siteConfig.smsHref} className="btn-secondary text-center">
              Text Us for a Quote
            </a>
          </div>

          <div className="fade-in-up fade-in-delay-3 mt-5 space-y-3">
            <p className="text-sm leading-7 text-[var(--foreground)]/80">
              All equipment is thoroughly cleaned and sanitized before every
              event.
            </p>

            <Link
              href="/service-areas"
              className="inline-block text-sm font-medium text-[var(--foreground)] underline decoration-[0.08em] underline-offset-4 transition hover:text-[var(--soft-brown)]"
            >
              View service areas near you
            </Link>
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
                We handle delivery, setup, and takedown for you.
              </p>
            </div>

            <div className="soft-card rounded-[1.75rem] p-6">
              <p className="text-base font-semibold text-[var(--soft-brown)]">
                Goldsboro, NC
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                Serving nearby families and events.
              </p>
            </div>
          </div>
        </div>

        <div className="fade-in-up fade-in-delay-2 relative">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[var(--accent)] blur-3xl" />
          <div className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-[rgba(204,176,154,0.22)] blur-3xl" />

          <div className="soft-card-lg relative overflow-hidden rounded-[2.5rem] p-4">
            <Image
              src="https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183450/hero_z7izmm.jpg"
              alt="Luxury soft play rental setup for babies and toddlers in Goldsboro, North Carolina"
              width={900}
              height={1100}
              priority
              className="h-[420px] w-full rounded-[1.8rem] object-cover contrast-105 md:h-[650px] xl:h-[720px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
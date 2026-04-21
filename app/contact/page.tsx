import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Little Hands Mobile Soft Play to check availability for luxury soft play rentals in Goldsboro, North Carolina for birthdays, baby showers, playdates, and special events.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[40rem]">
            <SectionTitle
              eyebrow="Contact"
              title="Contact Little Hands Mobile Soft Play in Goldsboro, NC"
              description="Tell us about your event and we’ll help you reserve a beautiful soft play setup for your little ones."
              as="h1"
            />

            <div className="mt-8 space-y-6 text-[var(--foreground)]">
              <div className="space-y-4">
                <p className="text-lg leading-8">
                  We provide luxury soft play rentals in Goldsboro, North
                  Carolina and surrounding areas for birthdays, baby showers,
                  playdates, and special events.
                </p>

                <p className="text-lg leading-8">
                  Looking for a baby or toddler soft play rental in Goldsboro?
                  We make the process simple with delivery, setup, and takedown
                  included.
                </p>

                <p className="text-lg leading-8">
                  You can also explore our{" "}
                  <a
                    href="/packages"
                    className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
                  >
                    soft play packages
                  </a>{" "}
                  or browse our{" "}
                  <a
                    href="/gallery"
                    className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
                  >
                    event gallery
                  </a>{" "}
                  before reaching out.
                </p>
              </div>

              <div className="soft-card rounded-[1.75rem] p-6">
                <h2 className="text-2xl">Get in Touch</h2>

                <div className="mt-5 space-y-4 text-base leading-8">
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a
                      href={siteConfig.phoneHref}
                      className="font-medium transition hover:text-[var(--soft-brown)]"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>

                  <p>
                    <strong>Text:</strong>{" "}
                    <a
                      href={siteConfig.smsHref}
                      className="font-medium transition hover:text-[var(--soft-brown)]"
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
                      className="font-medium transition hover:text-[var(--soft-brown)]"
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

              <div className="soft-card rounded-[1.75rem] p-6">
                <h2 className="text-2xl">What to Expect</h2>

                <div className="mt-5 space-y-3 text-base leading-8">
                  <p>
                    We usually respond within 24 hours to confirm availability
                    and go over your event details.
                  </p>

                  <p>
                    Delivery, setup, and takedown are included so your event
                    feels simple, polished, and stress-free.
                  </p>

                  <p>
                    No payment is required now. We’ll confirm availability and
                    event details with you first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="soft-card-lg rounded-[2rem] p-6 sm:p-8 md:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl">Check Availability</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
                Share a few details below and we’ll help you find the right soft
                play setup for your event.
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--foreground)]/80">
                Takes less than 1 minute to complete.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-[1.5rem] border border-[var(--soft-beige)]/70 bg-white/60 p-5">
                <h3 className="text-lg">Your Information</h3>
                <div className="mt-4 grid gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="input-field"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="input-field"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--soft-beige)]/70 bg-white/60 p-5">
                <h3 className="text-lg">Event Details</h3>
                <div className="mt-4 grid gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]/80"
                    >
                      Preferred event date
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      aria-label="Event date"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="package"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]/80"
                    >
                      Package
                    </label>
                    <select
                      id="package"
                      name="package"
                      className="input-field"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a package
                      </option>
                      <option value="Mini">Mini Package</option>
                      <option value="Basic">Basic Package</option>
                      <option value="Deluxe">Deluxe Package</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="location"
                    placeholder="Event location or city"
                    className="input-field"
                  />

                  <input
                    type="text"
                    name="event"
                    placeholder="Event type, such as birthday or baby shower"
                    className="input-field"
                  />

                  <input
                    type="number"
                    name="guest-count"
                    placeholder="Approximate number of children"
                    className="input-field"
                    min={0}
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--soft-beige)]/70 bg-white/60 p-5">
                <h3 className="text-lg">Extra Details</h3>
                <div className="mt-4 grid gap-4">
                  <textarea
                    name="message"
                    placeholder="Tell us about your event, theme, colors, or any details you'd like us to know"
                    rows={5}
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-7 text-[var(--foreground)]/80">
              No payment is required now. We’ll confirm availability and event
              details with you first.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <button type="submit" className="btn-primary w-full">
                Check Availability
              </button>

              <a href="/packages" className="btn-secondary w-full text-center">
                View Packages
              </a>

              <a
                href={siteConfig.smsHref}
                className="w-full text-center text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--soft-brown)]"
              >
                Text Us for a Quote
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
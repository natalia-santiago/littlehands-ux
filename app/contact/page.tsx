import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Little Hands Mobile Soft Play to book a soft play rental for your birthday party, baby shower, playdate, or special event.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-width grid gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Book your date today"
            description="Fill out the form below or contact us directly to reserve your event date."
          />

          <div className="mt-8 space-y-4 text-[var(--foreground)]">
            <p>
              <strong>Phone:</strong>{" "}
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </p>

            <p>
              <strong>Text:</strong>{" "}
              <a href={siteConfig.smsHref}>Send us a message</a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
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

        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          className="soft-card-lg space-y-5 rounded-[2rem] p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input-field"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="input-field"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input-field"
          />

          <select name="package" className="input-field" defaultValue="">
            <option value="" disabled>
              Select a Package
            </option>
            <option value="Mini">Mini Package</option>
            <option value="Basic">Basic Package</option>
            <option value="Deluxe">Deluxe Package</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>

          <input
            type="text"
            name="event"
            placeholder="Event Type (Birthday, Baby Shower, etc.)"
            className="input-field"
          />

          <input type="date" name="date" className="input-field" />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            className="input-field"
          />

          <input
            type="number"
            name="guest-count"
            placeholder="Approximate Number of Children"
            className="input-field"
            min={0}
          />

          <textarea
            name="message"
            placeholder="Tell us about your event..."
            rows={5}
            className="input-field"
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>

            <a href={siteConfig.smsHref} className="btn-secondary w-full text-center">
              Text for Quote
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
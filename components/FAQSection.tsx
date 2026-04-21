import Script from "next/script";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "What ages is soft play best for?",
    answer:
      "Our soft play setups are designed for babies and toddlers ages 0 to 5.",
  },
  {
    question: "What types of events do you serve?",
    answer:
      "We provide soft play rentals for birthdays, baby showers, playdates, and other special events.",
  },
  {
    question: "Do you deliver, set up, and take everything down?",
    answer:
      "Yes. All packages include delivery, setup, and takedown so your event feels simple and stress-free.",
  },
  {
    question: "Do you offer different package options?",
    answer:
      "Yes. We offer Mini, Basic, and Deluxe packages so you can choose the setup that fits your event best.",
  },
  {
    question: "Do you offer custom themes or add-ons?",
    answer:
      "Yes. Custom themes and balloon add-ons are available for a more personalized setup.",
  },
  {
    question: "Where do you offer soft play rentals?",
    answer:
      "We serve Goldsboro, North Carolina and surrounding areas. Free delivery is included within our main service area, and a delivery fee applies beyond 35 miles from Goldsboro.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible to secure your preferred event date.",
  },
  {
    question: "How do I book my date?",
    answer:
      "You can contact us through our contact page, call us, or send us a text message to check availability and reserve your event date.",
  },
];

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-padding pt-0">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about our soft play rentals, packages, delivery, service areas, and booking process."
            center
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              These are some of the most common questions families ask before
              booking a soft play rental in Goldsboro and surrounding areas.
            </p>

            <p className="mt-4">
              You can also explore our{" "}
              <Link
                href="/packages"
                className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                packages
              </Link>
              , browse the{" "}
              <Link
                href="/gallery"
                className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                gallery
              </Link>
              , or visit our{" "}
              <Link
                href="/contact"
                className="font-medium underline underline-offset-4 transition hover:text-[var(--soft-brown)]"
              >
                contact page
              </Link>{" "}
              if you are ready to check availability.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
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

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:gap-10">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={`soft-card rounded-[2rem] p-7 md:p-8 fade-in-up ${
                index === 0
                  ? "fade-in-delay-1"
                  : index === 1
                    ? "fade-in-delay-2"
                    : index === 2
                      ? "fade-in-delay-3"
                      : "fade-in-delay-4"
              }`}
            >
              <h3 className="text-2xl leading-tight md:text-3xl">
                {faq.question}
              </h3>

              <p className="mt-5 text-base leading-8 text-[var(--foreground)] md:text-lg">
                {faq.answer}
              </p>

              {faq.question === "Do you offer different package options?" ? (
                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                  You can compare options on our{" "}
                  <Link
                    href="/packages"
                    className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                  >
                    packages page
                  </Link>
                  .
                </p>
              ) : null}

              {faq.question === "Where do you offer soft play rentals?" ? (
                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                  Explore all of our{" "}
                  <Link
                    href="/service-areas"
                    className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                  >
                    service areas
                  </Link>{" "}
                  to see nearby locations we serve.
                </p>
              ) : null}

              {faq.question === "How do I book my date?" ? (
                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                  You can also go straight to our{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                  >
                    contact page
                  </Link>{" "}
                  to check availability for your event date.
                </p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="soft-card rounded-[2rem] p-8 text-center md:p-10">
            <h2 className="text-3xl">Still Have Questions?</h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-[var(--foreground)]">
              <p>
                We’d be happy to help you choose the right setup for your event.
              </p>

              <p>
                Reach out to check availability, compare packages, or ask about
                your event details.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-center">
                Check Availability
              </Link>

              <Link href="/packages" className="btn-secondary text-center">
                View Packages
              </Link>

              <a
                href={siteConfig.smsHref}
                className="text-center text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--soft-brown)] sm:self-center"
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
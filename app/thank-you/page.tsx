import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="soft-card-lg mx-auto max-w-2xl rounded-[2.5rem] px-8 py-14 text-center md:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:text-sm">
            Thank You
          </p>

          <h1 className="mt-4 text-5xl leading-[1.08] md:text-6xl">
            Your message has been sent
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">
            Thank you for reaching out to Little Hands Mobile Soft Play. We’ll
            get back to you as soon as possible.
          </p>

          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
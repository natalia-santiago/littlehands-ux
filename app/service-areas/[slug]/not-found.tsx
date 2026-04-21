import Link from "next/link";

export default function ServiceAreaNotFound() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="soft-card mx-auto max-w-3xl rounded-[2rem] px-8 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
            Service Area
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl">Area Not Found</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground)]">
            We couldn’t find that service area page. You can explore all of our
            available locations or contact us to ask if we serve your area.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/service-areas" className="btn-primary text-center">
              View Service Areas
            </Link>

            <Link href="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
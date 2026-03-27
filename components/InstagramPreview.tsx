import { siteConfig } from "@/lib/site";

const images = [
  "/images/setup-1.jpg",
  "/images/setup-2.jpg",
  "/images/setup-3.jpg",
];

export default function InstagramPreview() {
  return (
    <section className="section-padding pt-0">
      <div className="container-width">
        <div className="soft-card-lg rounded-[2.5rem] px-8 py-12 md:px-12 md:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:text-sm">
              Follow Along
            </p>

            <h2 className="mt-4 text-4xl leading-[1.08] md:text-6xl">
              See more on Instagram
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">
              Follow us for setup inspiration, event highlights, and beautiful
              soft play moments for little ones.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {images.map((image, index) => (
              <a
                key={image}
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className={`group overflow-hidden rounded-[2rem] fade-in-up ${
                  index === 0
                    ? "fade-in-delay-1"
                    : index === 1
                      ? "fade-in-delay-2"
                      : "fade-in-delay-3"
                }`}
              >
                <img
                  src={image}
                  alt={`Instagram preview ${index + 1}`}
                  className="h-[240px] w-full rounded-[2rem] object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Follow {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const images = [
  {
    src: "/images/setup-1.jpg",
    alt: "Soft play rental setup inspiration for a birthday or special event",
  },
  {
    src: "/images/setup-2.jpg",
    alt: "Luxury soft play setup for babies and toddlers by Little Hands Mobile Soft Play",
  },
  {
    src: "/images/setup-3.jpg",
    alt: "Elegant soft play event setup with beautiful styling for little ones",
  },
];

export default function InstagramPreview() {
  return (
    <section className="section-padding pt-0">
      <div className="container-width">
        <div className="soft-card-lg rounded-[2.5rem] px-8 py-12 md:px-12 md:py-14">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:text-sm">
              Follow Along
            </p>

            <h2 className="mt-4 text-4xl leading-[1.08] md:text-6xl">
              See more soft play inspiration on Instagram
            </h2>

            <div className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
              <p>
                Follow Little Hands Mobile Soft Play for setup inspiration,
                event highlights, and beautiful soft play moments for birthdays,
                baby showers, playdates, and special events.
              </p>

              <p className="mt-4">
                Our Instagram is a great place to explore more soft play ideas
                and see the style behind our luxury setups.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {images.map((image, index) => (
              <a
                key={image.src}
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="h-[240px] w-full rounded-[2rem] object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[var(--foreground)]/80">
              Follow us for more soft play inspiration and recent event setup
              highlights.
            </p>

            <div className="mt-6">
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
      </div>
    </section>
  );
}
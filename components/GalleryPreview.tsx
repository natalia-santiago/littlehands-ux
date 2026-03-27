import Link from "next/link";
import SectionTitle from "./SectionTitle";

const galleryImages = [
  "/images/setup-1.jpg",
  "/images/setup-2.jpg",
  "/images/setup-3.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle
          eyebrow="Gallery"
          title="A soft, beautiful setup for every celebration"
          description="From birthdays to baby showers, our setups are designed to feel elegant, welcoming, and fun for little ones and their families."
          center
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className={`soft-card-lg overflow-hidden rounded-[2rem] p-4 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] fade-in-up ${
                index === 0
                  ? "fade-in-delay-1"
                  : index === 1
                    ? "fade-in-delay-2"
                    : "fade-in-delay-3"
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={image}
                  alt={`Soft play gallery image ${index + 1}`}
                  className="h-[300px] w-full object-cover contrast-105 transition duration-300 hover:scale-[1.03] md:h-[380px]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-secondary">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-1_ykdxd9.jpg",
    alt: "Elegant soft play rental setup for a children's event by Little Hands Mobile Soft Play",
  },
  {
    src: "https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-2_gzctgr.jpg",
    alt: "Luxury soft play setup for babies and toddlers at a celebration in Goldsboro, North Carolina",
  },
  {
    src: "https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183452/setup-3_dsaudr.jpg",
    alt: "Beautiful soft play rental with ball pit and play elements for a birthday or baby shower",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <SectionTitle
            eyebrow="Gallery"
            title="Beautiful soft play setups for every celebration"
            description="Explore luxury soft play rentals designed for birthdays, baby showers, playdates, and special events. Each setup is styled to feel elegant, welcoming, and fun for little ones and their families."
            center
          />

          <div className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--foreground)]">
            <p>
              Browse a few of our soft play setups to get inspiration for your
              own event in Goldsboro and surrounding areas.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`soft-card-lg overflow-hidden rounded-[2rem] p-4 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] fade-in-up ${
                index === 0
                  ? "fade-in-delay-1"
                  : index === 1
                    ? "fade-in-delay-2"
                    : "fade-in-delay-3"
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  className="h-[300px] w-full object-cover contrast-105 transition duration-300 hover:scale-[1.03] md:h-[380px]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[var(--foreground)]">
            Want to see more setup inspiration before booking?
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/gallery" className="btn-secondary text-center">
              See More Setups
            </Link>

            <Link href="/contact" className="btn-primary text-center">
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
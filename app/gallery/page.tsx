import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View gallery images of luxury soft play setups by Little Hands Mobile Soft Play for babies and toddlers.",
  alternates: {
    canonical: "/gallery",
  },
};

const images = [
  "/images/setup-1.jpg",
  "/images/setup-2.jpg",
  "/images/setup-3.jpg",
];

export default function GalleryPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle
          eyebrow="Gallery"
          title="Take a look at our setups"
          description="Each setup is carefully designed to create a beautiful and fun experience for little ones."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className={`soft-card-lg overflow-hidden rounded-[2rem] p-4 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--card-shadow-lg)] ${
                index === 0
                  ? "fade-in-up fade-in-delay-1"
                  : index === 1
                    ? "fade-in-up fade-in-delay-2"
                    : "fade-in-up fade-in-delay-3"
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={src}
                  alt={`Soft play setup ${index + 1}`}
                  className="h-[300px] w-full object-cover contrast-105 transition duration-300 hover:scale-[1.03] md:h-[380px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
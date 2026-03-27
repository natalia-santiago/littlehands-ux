import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Little Hands Mobile Soft Play and our luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-width grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <SectionTitle
            eyebrow="About Us"
            title="Creating magical moments for little ones"
            description="Little Hands Mobile Soft Play provides luxury soft play setups designed for babies and toddlers. Our goal is to create a safe, stylish, and unforgettable experience for every event."
          />

          <div className="mt-8 space-y-5 text-[var(--foreground)]">
            <p className="leading-8">
              We specialize in creating beautiful play spaces that allow
              children to explore, play, and have fun in a safe environment.
            </p>

            <p className="leading-8">
              Whether you&apos;re hosting a birthday party, baby shower, or
              playdate, we bring everything directly to you and handle the full
              setup and takedown.
            </p>

            <p className="leading-8">
              Our soft play equipment is clean, modern, and designed with both
              safety and aesthetics in mind.
            </p>
          </div>
        </div>

        <div className="soft-card-lg overflow-hidden rounded-[2.25rem] p-4">
          <img
            src="/images/setup-1.jpg"
            alt="Soft play setup"
            className="h-[420px] w-full rounded-[1.6rem] object-cover contrast-105 md:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
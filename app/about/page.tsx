import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About Little Hands Mobile Soft Play in Goldsboro, NC",
  description:
    "Learn more about Little Hands Mobile Soft Play and our luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina and surrounding areas.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
          <div className="max-w-[40rem]">
            <SectionTitle
              eyebrow="About Us"
              title="About Little Hands Mobile Soft Play for Babies and Toddlers in Goldsboro, NC"
              description="Little Hands Mobile Soft Play provides luxury soft play rentals for babies and toddlers in Goldsboro, North Carolina and surrounding areas. We create elegant, welcoming setups that help families celebrate with ease."
              as="h1"
            />

            <div className="mt-8 space-y-5 text-[var(--foreground)]">
              <p className="leading-8">
                We specialize in soft play rentals designed to feel safe,
                stylish, and fun for babies and toddlers while also
                complementing the look and feel of your event. Whether you are
                planning a birthday party, baby shower, playdate, or another
                special celebration, we create a beautiful play space that feels
                polished, welcoming, and easy to enjoy.
              </p>

              <p className="leading-8">
                We bring everything directly to you and handle delivery, setup,
                and takedown from start to finish. All equipment is thoroughly
                cleaned and sanitized before every event so families can feel
                confident booking with us.
              </p>

              <p className="leading-8">
                Our equipment is clean, modern, and thoughtfully arranged to
                give little ones a beautiful place to explore, play, and enjoy
                the moment. You can explore our{" "}
                <Link
                  href="/gallery"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  gallery
                </Link>{" "}
                to see real event setups, or browse our{" "}
                <Link
                  href="/packages"
                  className="font-semibold text-[var(--soft-brown)] underline decoration-[0.08em] underline-offset-4 transition hover:opacity-80"
                >
                  soft play packages
                </Link>{" "}
                to find the right fit for your celebration.
              </p>

              <p className="leading-8">
                Our goal is to provide a luxury soft play rental experience in
                Goldsboro, NC that feels simple, polished, and memorable for
                both children and their families.
              </p>
            </div>
          </div>

          <div className="soft-card-lg overflow-hidden rounded-[2.25rem] p-4">
            <Image
              src="https://res.cloudinary.com/dwvmjpgxh/image/upload/q_auto/f_auto/v1778183451/setup-1_ykdxd9.jpg"
              alt="Luxury soft play rental setup for babies and toddlers in Goldsboro, North Carolina"
              width={900}
              height={1100}
              className="h-[420px] w-full rounded-[1.6rem] object-cover contrast-105 md:h-[520px]"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-xl">Safe for Little Ones</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
              Our soft play setups are designed specifically for babies and
              toddlers ages 0 to 5, creating a safe and comfortable space for
              play.
            </p>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-xl">Stylish and Elegant</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
              Each setup is carefully styled to match your event, adding a clean
              and elegant look that enhances your space.
            </p>
          </div>

          <div className="soft-card rounded-[1.75rem] p-6">
            <h2 className="text-xl">Stress-Free Experience</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/80">
              We handle delivery, setup, and takedown so you can focus on
              enjoying your event while we take care of everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
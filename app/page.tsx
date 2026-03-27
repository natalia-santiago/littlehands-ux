import Hero from "@/components/Hero";
import PackagesPreview from "@/components/PackagesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import ContactCTA from "@/components/ContactCTA";
import InstagramPreview from "@/components/InstagramPreview";
import SectionTitle from "@/components/SectionTitle";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-padding pt-4">
        <div className="container-width grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-2xl">
            <SectionTitle
              eyebrow="Why Families Choose Us"
              title="Safe, stylish, and stress-free fun"
              description="Little Hands Mobile Soft Play creates elegant soft play setups that help make your event feel special while keeping little ones entertained."
            />

            <div className="mt-10 space-y-5 text-[var(--foreground)]">
              <div className="soft-card fade-in-up fade-in-delay-1 rounded-[1.5rem] p-6 text-lg leading-8">
                Clean and thoughtfully arranged setups designed for babies and
                toddlers ages 0–5.
              </div>

              <div className="soft-card fade-in-up fade-in-delay-2 rounded-[1.5rem] p-6 text-lg leading-8">
                Perfect for birthdays, baby showers, playdates, and other
                memorable celebrations.
              </div>

              <div className="soft-card fade-in-up fade-in-delay-3 rounded-[1.5rem] p-6 text-lg leading-8">
                We handle delivery, setup, and takedown so you can relax and
                enjoy the day.
              </div>
            </div>
          </div>

          <div className="soft-card-lg fade-in-up fade-in-delay-2 overflow-hidden rounded-[2.25rem] p-4">
            <img
              src="/images/setup-2.jpg"
              alt="Beautiful soft play setup for children"
              className="h-[460px] w-full rounded-[1.6rem] object-cover contrast-105 md:h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2 md:pb-14">
        <div className="container-width">
          <div className="soft-card fade-in-up grid gap-8 rounded-[2rem] px-8 py-8 text-center md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-3xl text-[var(--soft-brown)]">Ages 0–5</p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Perfect for babies and toddlers
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">Setup Included</p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Delivery, setup, and takedown handled for you
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">Custom Themes</p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Optional styling for a more personalized event
              </p>
            </div>

            <div>
              <p className="text-3xl text-[var(--soft-brown)]">Goldsboro, NC</p>
              <p className="mt-2 text-base text-[var(--foreground)]">
                Serving nearby areas too
              </p>
            </div>
          </div>
        </div>
      </section>

      <PackagesPreview />
      <GalleryPreview />
      <InstagramPreview />
      <ContactCTA />
    </>
  );
}
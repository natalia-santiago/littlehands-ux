import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(126,102,87,0.08)] bg-[rgba(255,255,255,0.95)]">
      <div className="container-width py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-4xl">Little Hands Mobile Soft Play</h3>
            <p className="mt-5 max-w-sm text-base leading-8 text-[var(--foreground)]">
              Safe, stylish, and magical soft play setups for babies and
              toddlers. Perfect for birthdays, baby showers, playdates, and
              special events.
            </p>
          </div>

          <div>
            <h3 className="text-3xl">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-4 text-base font-medium text-[var(--foreground)]">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-3xl">Contact</h3>
            <div className="mt-5 flex flex-col gap-4 text-base leading-8 text-[var(--foreground)]">
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.instagramHandle}
              </a>
              <p>{siteConfig.location}</p>
              <p>{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(126,102,87,0.08)] pt-6 text-sm text-[var(--foreground)]">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
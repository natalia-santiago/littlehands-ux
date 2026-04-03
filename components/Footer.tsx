import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(126,102,87,0.08)] bg-[rgba(255,255,255,0.95)]">
      {/* 🔽 Reduced top padding from py-16 → pt-10 pb-14 */}
      <div className="container-width pt-10 pb-14">
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

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[rgba(126,102,87,0.08)] pt-6 text-sm text-[var(--foreground)] flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* 👇 Your credit */}
          <p className="opacity-70">
            Website by{" "}
            <a
              href="https://natalia-santiago-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-100"
            >
              Natalia Santiago
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

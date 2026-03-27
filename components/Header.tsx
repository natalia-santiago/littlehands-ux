"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(126,102,87,0.10)] bg-[rgba(252,248,244,0.92)] backdrop-blur">
      <div className="container-width flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[rgba(126,102,87,0.10)] md:h-14 md:w-14">
            <Image
              src="/images/logo.png"
              alt="Little Hands Mobile Soft Play logo"
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-3xl leading-none text-[var(--soft-brown)] md:text-4xl">
              Little Hands
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[var(--foreground)] md:text-xs">
              Mobile Soft Play
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--foreground)] transition hover:text-[var(--soft-brown)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={siteConfig.phoneHref} className="btn-primary">
            Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[rgba(126,102,87,0.10)] md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-[var(--soft-brown)]" />
            <span className="block h-0.5 w-5 bg-[var(--soft-brown)]" />
            <span className="block h-0.5 w-5 bg-[var(--soft-brown)]" />
          </div>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(126,102,87,0.08)] bg-white/95 md:hidden">
          <div className="container-width flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-sm font-semibold text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={siteConfig.phoneHref}
              className="btn-primary mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
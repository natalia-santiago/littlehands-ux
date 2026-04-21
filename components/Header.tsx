"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(126,102,87,0.10)] bg-[rgba(252,248,244,0.92)] backdrop-blur">
      <div className="container-width flex items-center justify-between gap-4 py-4 md:py-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 md:gap-4"
          aria-label="Little Hands Mobile Soft Play home"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[rgba(126,102,87,0.10)] md:h-14 md:w-14">
            <Image
              src="/images/logo.png"
              alt="Little Hands Mobile Soft Play logo"
              fill
              className="object-cover"
              sizes="56px"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="truncate text-3xl leading-none text-[var(--soft-brown)] md:text-4xl">
              Little Hands
            </span>
            <span className="mt-1 truncate text-[10px] uppercase tracking-[0.32em] text-[var(--foreground)] md:text-xs">
              Mobile Soft Play
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex xl:gap-10"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-sm text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(126,102,87,0.28)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(252,248,244,0.92)] ${
                  active
                    ? "text-[var(--soft-brown)]"
                    : "text-[var(--foreground)] hover:text-[var(--soft-brown)]"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[var(--primary-dark)] transition-all ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Check Availability
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[rgba(126,102,87,0.10)] transition hover:bg-[rgba(255,255,255,0.96)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(126,102,87,0.28)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(252,248,244,0.92)] md:hidden"
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-[3px] h-0.5 w-5 bg-[var(--soft-brown)] transition ${
                menuOpen ? "top-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-5 bg-[var(--soft-brown)] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[15px] h-0.5 w-5 bg-[var(--soft-brown)] transition ${
                menuOpen ? "top-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[rgba(126,102,87,0.08)] bg-white/95 md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="container-width flex flex-col py-4"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-2xl px-1 py-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(126,102,87,0.20)] ${
                    active
                      ? "text-[var(--soft-brown)]"
                      : "text-[var(--foreground)] hover:text-[var(--soft-brown)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary">
                Check Availability
              </Link>

              <a href={siteConfig.phoneHref} className="btn-secondary">
                Call {siteConfig.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
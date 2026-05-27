"use client";

import { useEffect, useMemo, useState } from "react";
import { mockups, sharedIcons } from "@/lib/mockups";

const recentCuts = [
  {
    src: "/tay-blendz/recent-cuts/recent-cut-01.png",
    alt: "Recent Tay Blendz haircut with a clean temple fade and sharp lineup"
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-02.png",
    alt: "Recent Tay Blendz haircut showing a fresh fade and clean edge-up"
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-03.png",
    alt: "Recent Tay Blendz haircut with detailed fade work"
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-04.png",
    alt: "Recent Tay Blendz haircut with a polished finish"
  }
];

export default function Home() {
  const mockup = mockups["auto-service"];
  const Icon = mockup.icon;
  const { CalendarDays, MapPin, Phone } = sharedIcons;
  const [scrolled, setScrolled] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);
  const secondaryCta = mockup.secondary?.trim() || "View Services";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setHeroOffset(Math.min(window.scrollY * 0.08, 34));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("js-reveal-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return () => document.documentElement.classList.remove("js-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("js-reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-reveal-ready");
    };
  }, []);

  const style = useMemo(
    () =>
      ({
        "--accent": mockup.accent,
        "--dark": mockup.dark,
        "--soft": mockup.soft
      }) as React.CSSProperties,
    [mockup]
  );

  return (
    <main className="min-h-screen bg-[#080d12] text-[#f4efe5]" style={style}>
      <div className="garage-shell overflow-hidden">
        <nav
          className={`sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-[#080d12]/88 px-4 py-2.5 text-[#f4efe5] transition sm:px-5 md:px-10 md:py-4 ${
            scrolled ? "nav-scrolled" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-md bg-[var(--accent)] text-[#080d12] shadow-[0_0_28px_rgba(242,181,68,.22)] md:size-10">
              <Icon className="size-4 md:size-[22px]" />
            </span>
            <div>
              <p className="text-sm font-black leading-tight md:text-lg">{mockup.business}</p>
              <p className="text-xs leading-tight text-[#d8d0c3]/78 md:text-sm">{mockup.town}</p>
            </div>
          </div>
          <div className="hidden items-center gap-5 text-sm font-semibold text-[#c8c0b2]/70 md:flex">
            <a href="#services">Services</a>
            <a href="#proof">Why Long&apos;s</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="premium-button whitespace-nowrap rounded-md bg-[var(--accent)] px-3 py-2 text-xs font-black text-[#080d12] sm:text-sm md:px-4" href="#contact">
            {mockup.cta}
          </a>
        </nav>

        <section
          className="hero-depth relative grid min-h-[610px] items-end bg-cover bg-center md:min-h-[680px]"
          style={{
            backgroundImage: mockup.image,
            backgroundPosition: `center calc(42% + ${heroOffset}px)`
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(242,181,68,.18),transparent_32%),linear-gradient(180deg,rgba(8,13,18,.36),rgba(8,13,18,.72)_42%,rgba(8,13,18,.97))]" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-20 text-[#f4efe5] md:px-8 md:pb-14 md:pt-24">
            <p className="motion-in mb-3 inline-flex rounded-md border border-[var(--accent)]/35 bg-[#0b1118]/75 px-3 py-2 text-sm font-black text-[var(--accent)] shadow-[0_0_30px_rgba(242,181,68,.12)] backdrop-blur">
              {mockup.eyebrow}
            </p>
            <p className="motion-in motion-delay-1 mb-5 inline-flex max-w-2xl rounded-md border border-white/15 bg-black/45 px-3 py-2 text-sm font-bold text-[#ede5d8] backdrop-blur">
              {mockup.proof}
            </p>
            <h1 className="motion-in motion-delay-2 max-w-4xl text-[2.65rem] font-black leading-[.98] md:text-7xl">
              {mockup.headline}
            </h1>
            <p className="motion-in motion-delay-3 mt-5 max-w-2xl text-base leading-7 text-[#e0d7c8] md:text-xl md:leading-8">
              {mockup.hero}
            </p>
            <div className="motion-in motion-delay-4 mt-7 flex flex-wrap gap-3">
              <a className="premium-button rounded-md bg-[var(--accent)] px-6 py-4 text-sm font-black text-[#080d12] shadow-[0_18px_40px_rgba(242,181,68,.22)]" href="#contact">
                {mockup.cta}
              </a>
              <a
                aria-label="View Services"
                className="premium-button secondary-button min-w-[150px] rounded-md border border-[#f2b544]/55 bg-[#0b1118]/80 px-6 py-4 text-center text-sm font-black text-[#f4efe5] shadow-[inset_0_0_0_1px_rgba(255,255,255,.04)] backdrop-blur"
                href="#services"
              >
                {secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b1118] px-5 py-4 text-[#f4efe5] md:px-8 md:py-5">
          <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3">
            {(mockup.trustFacts ?? []).map((fact, index) => (
              <div
                key={fact}
                className="reveal-card rounded-md border border-white/10 bg-[#121b25] p-3.5 shadow-[0_14px_34px_rgba(0,0,0,.22)] md:p-4"
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-sm font-black text-[#f4efe5]">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-[#080d12] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-card max-w-3xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]/80">
              Repair Services
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#f4efe5] md:text-5xl">
              One shop for cars, trucks, and small-engine equipment.
            </h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-7 md:grid-cols-4 md:gap-4">
            {mockup.services.map((service, index) => (
              <article
                key={service}
                className="service-card reveal-card rounded-md border border-white/10 bg-[#101821] p-4 shadow-[0_18px_40px_rgba(0,0,0,.2)] md:p-5"
                data-reveal
                style={{ transitionDelay: `${index * 130}ms` }}
              >
                <div className="mb-3 grid size-10 place-items-center rounded-md border border-[var(--accent)]/25 bg-[var(--accent)]/10 md:mb-5 md:size-11">
                  <Icon className="text-[var(--accent)]" size={22} />
                </div>
                <h3 className="text-lg font-black text-[#f4efe5] md:text-xl">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d8d0c3]/82">
                  {mockup.serviceDetails?.[index]}
                </p>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a1017] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-card" data-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]/85">
                HOW IT WORKS
              </p>
              <h2 className="mt-2 max-w-3xl text-3xl font-black text-[#f4efe5] md:text-5xl">
                Getting your repair scheduled is simple.
              </h2>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {[
                ["01", "Pick your service", "Auto repair, brakes, oil changes, or small-engine work — pick what you need."],
                ["02", "Find the shop", "Stop by 20 N Chestnut St in downtown Platteville, WI."],
                ["03", "Give us a call", "Dial 608-348-5636 to talk to the shop directly."],
                ["04", "Get back on the road", "We'll get you scheduled and your vehicle taken care of."]
              ].map(([number, title, copy], index) => (
                <article
                  key={title}
                  className="detail-card reveal-card rounded-md border border-white/10 bg-[#101821] p-4 shadow-[0_18px_42px_rgba(0,0,0,.24)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <p className="text-sm font-black text-[var(--accent)]">{number}</p>
                  <h3 className="mt-3 text-lg font-black text-[#f4efe5]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#d8d0c3]/84">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="proof"
          className="border-y border-white/10 bg-[#0c131b] px-5 py-14 md:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_.9fr]">
          <div className="reveal-card" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]/80">
              Trusted Local Service
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#f4efe5] md:text-5xl">
              Honest auto and small-engine repair in Platteville.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#d8d0c3]/82">
              Long&apos;s Car Care is a locally-owned and operated auto repair shop
              and service center on Chestnut Street, serving Platteville drivers
              with oil changes, brake service, auto repair, and small-engine repair.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { Icon: Phone, label: mockup.contact },
              { Icon: MapPin, label: mockup.address },
              { Icon: CalendarDays, label: mockup.cta }
            ].map(({ Icon: CardIcon, label }, index) => {
              return (
                <div
                  key={label ?? index}
                  className="reveal-card contact-card flex items-center gap-3 rounded-md border border-white/10 bg-[#121b25] p-4 shadow-[0_14px_34px_rgba(0,0,0,.22)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 130}ms` }}
                >
                  <CardIcon size={20} className="text-[var(--accent)]" />
                  <span className="font-bold text-[#f4efe5]">{label}</span>
                </div>
              );
            })}
          </div>
          </div>
        </section>

        <section id="contact" className="bg-[#080d12] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="reveal-card" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]/80">
              Schedule Service
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#f4efe5] md:text-5xl">
              Call Long&apos;s Car Care to schedule.
            </h2>
            <p className="mt-4 leading-7 text-[#d8d0c3]/82">
              Give us a call or stop by the shop on Chestnut Street &mdash; we&apos;ll
              get your vehicle taken care of.
            </p>
            <div className="mt-6 grid gap-3 text-lg font-black text-[#f4efe5]">
              <p>{mockup.contact}</p>
              <p>{mockup.address}</p>
            </div>
          </div>
          <form className="reveal-card grid gap-3 rounded-md border border-[var(--accent)]/18 bg-[linear-gradient(145deg,#121b25,#0b1118)] p-5 shadow-[0_28px_70px_rgba(0,0,0,.36),inset_0_1px_0_rgba(255,255,255,.04)] md:p-6" data-reveal>
            <input className="premium-input h-11 rounded-md border border-white/14 bg-[#080d12]/92 px-3 text-[#f4efe5] placeholder:text-[#d8d0c3]/55" placeholder="Name" />
            <input className="premium-input h-11 rounded-md border border-white/14 bg-[#080d12]/92 px-3 text-[#f4efe5] placeholder:text-[#d8d0c3]/55" placeholder="Phone" />
            <textarea
              className="premium-input min-h-24 rounded-md border border-white/14 bg-[#080d12]/92 px-3 py-2 text-[#f4efe5] placeholder:text-[#d8d0c3]/55"
              placeholder="What do you need help with?"
            />
            <button className="premium-button h-11 rounded-md bg-[var(--accent)] font-black text-[#080d12]">
              Request Service
            </button>
          </form>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0a1017] px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="reveal-card flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" data-reveal>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]/85">
                  Tay Blendz
                </p>
                <h2 className="mt-2 text-3xl font-black text-[#f4efe5] md:text-5xl">
                  Recent Cuts
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#d8d0c3]/82 md:text-base">
                Clean fades, sharp lineups, and finished work ready for the chair.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {recentCuts.map((cut, index) => (
                <figure
                  key={cut.src}
                  className="reveal-card overflow-hidden rounded-md border border-white/10 bg-[#101821] shadow-[0_18px_42px_rgba(0,0,0,.28)]"
                  data-reveal
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <img
                    alt={cut.alt}
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                    src={cut.src}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

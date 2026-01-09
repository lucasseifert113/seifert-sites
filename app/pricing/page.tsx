export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$$",
      blurb: "Perfect if you need a clean landing page that looks premium and gets leads.",
      features: [
        "One-page landing page",
        "Mobile-first design",
        "Basic SEO setup",
        "Fast load + clean layout",
        "Call-to-action section",
      ],
      cta: "Get Starter pricing",
      highlight: false,
    },
    {
      name: "Business",
      price: "$$$",
      blurb: "The main package. Multi-page site built to feel legit and convert visitors.",
      features: [
        "3–6 page website",
        "Premium dark design system",
        "Conversion-first layout",
        "SEO-ready structure",
        "Analytics + tracking setup",
      ],
      cta: "Book a call",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$$$$",
      blurb: "If you want the extra polish: motion, sections, and an “agency” feel.",
      features: [
        "Everything in Business",
        "Advanced animations (subtle, not cheesy)",
        "Copy cleanup / page refinement",
        "Priority turnaround",
        "Extra sections + custom components",
      ],
      cta: "Ask about Premium",
      highlight: false,
    },
  ];

  return (
    <main style={{ color: "white" }}>
      {/* HERO */}
      <section
        style={{
          padding: "96px 40px 56px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: 12,
            marginBottom: 16,
          }}
        >
          Pricing · Seifert Sites
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: -1.5,
          }}
        >
          Simple tiers.
          <br />
          <span style={{ color: "#ff7a1a" }}>Premium results.</span>
        </h1>

        <p
          style={{
            maxWidth: 720,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          I keep pricing straightforward. These are placeholder tiers so the site
          feels real. Swap the dollar signs for your exact pricing whenever you
          want.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section
        style={{
          padding: "0 40px 72px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              padding: 32,
              borderRadius: 24,
              background: tier.highlight
                ? "radial-gradient(800px 380px at 40% 0%, rgba(255,122,26,0.18), transparent 60%), rgba(255,255,255,0.06)"
                : "rgba(255,255,255,0.06)",
              border: tier.highlight
                ? "1px solid rgba(255,122,26,0.28)"
                : "1px solid rgba(255,255,255,0.12)",
              boxShadow: tier.highlight
                ? "0 20px 80px rgba(255,122,26,0.12)"
                : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {tier.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  right: 18,
                  padding: "8px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: 0.6,
                  textTransform: "uppercase",
                  background: "rgba(255,122,26,0.12)",
                  border: "1px solid rgba(255,122,26,0.30)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Most Popular
              </div>
            )}

            <h2 style={{ margin: 0, marginBottom: 8 }}>{tier.name}</h2>

            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: -0.8,
                marginBottom: 12,
              }}
            >
              {tier.price}
            </div>

            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              {tier.blurb}
            </p>

            <ul
              style={{
                marginTop: 18,
                paddingLeft: 18,
                color: "rgba(255,255,255,0.55)",
                display: "grid",
                gap: 8,
                lineHeight: 1.4,
              }}
            >
              {tier.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <a
              href="/contact"
              style={{
                display: "inline-block",
                width: "100%",
                marginTop: 22,
                textAlign: "center",
                padding: "14px 18px",
                borderRadius: 16,
                textDecoration: "none",
                fontWeight: 650,
                background: tier.highlight ? "#ff7a1a" : "rgba(255,255,255,0.08)",
                color: tier.highlight ? "#0b0c10" : "white",
                border: tier.highlight
                  ? "1px solid rgba(255,122,26,0.35)"
                  : "1px solid rgba(255,255,255,0.14)",
              }}
            >
              {tier.cta}
            </a>

            <p
              style={{
                marginTop: 12,
                fontSize: 12.5,
                color: "rgba(255,255,255,0.48)",
                lineHeight: 1.5,
              }}
            >
              {tier.name === "Starter"
                ? "Best for quick launches and simple offers."
                : tier.name === "Business"
                ? "Best for most businesses that want credibility + SEO."
                : "Best if you want extra polish and a higher-end vibe."}
            </p>
          </div>
        ))}
      </section>

      {/* FAQ / NOTES */}
      <section
        style={{
          padding: "56px 40px 96px",
          maxWidth: 1100,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 18, letterSpacing: -0.8 }}>
          Questions people actually ask
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <div
            style={{
              padding: 24,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Can I pay monthly?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Yes. I can do split payments depending on the package and timeline.
            </p>
          </div>

          <div
            style={{
              padding: 24,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Do you do hosting?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              I can set it up for you, or build it so you can manage it easily.
            </p>
          </div>

          <div
            style={{
              padding: 24,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>How fast can you deliver?</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              Depends on scope, but most projects are fast if content is ready.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            padding: 24,
            borderRadius: 20,
            background: "rgba(255,122,26,0.08)",
            border: "1px solid rgba(255,122,26,0.25)",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: 8 }}>
            Want me to lock in real pricing?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
            Tell me your target client type and your minimum project price, and
            I’ll rewrite these tiers so they feel premium (not like a cheap menu).
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <main style={{ color: "white" }}>
      {/* HERO */}
      <section
        style={{
          padding: "96px 40px 64px",
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
          Contact · Seifert Sites
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 24,
            letterSpacing: -1.5,
          }}
        >
          Let’s build something
          <br />
          <span style={{ color: "#ff7a1a" }}>that actually works.</span>
        </h1>

        <p
          style={{
            maxWidth: 640,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Tell me what you do, who your customer is, and what success looks like.
          I’ll take care of the rest.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section
        style={{
          padding: "0 40px 96px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {/* BOOK A CALL */}
        <div
          style={{
            padding: 32,
            borderRadius: 24,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Book a call</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
            Fastest way to get started. I’ll review your goals and give you a
            clear plan.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: 14,
              background: "#ff7a1a",
              color: "#0b0c10",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Add Calendly link
          </a>

          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Replace this button with your scheduling link.
          </p>
        </div>

        {/* EMAIL */}
        <div
          style={{
            padding: 32,
            borderRadius: 24,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Email</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
            Prefer async? Send details and I’ll get back to you.
          </p>

          <div
            style={{
              padding: "14px 18px",
              borderRadius: 14,
              background: "rgba(255,122,26,0.1)",
              border: "1px solid rgba(255,122,26,0.3)",
              fontWeight: 600,
              letterSpacing: 0.3,
            }}
          >
            you@seifertsites.com
          </div>

          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Swap this with your real email.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section
        style={{
          padding: "72px 40px",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 40, marginBottom: 16 }}>
          Serious projects only.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          If you want something clean, modern, and built to convert, we’ll get
          along just fine.
        </p>
      </section>
    </main>
  );
}

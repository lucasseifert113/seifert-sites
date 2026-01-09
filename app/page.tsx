export default function Home() {
  return (
    <main style={{ color: "white" }}>
      {/* HERO */}
      <section
        style={{
          padding: "96px 40px 72px",
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
          Seifert Sites · Web Design & Development
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 24,
            letterSpacing: -1.5,
          }}
        >
          Websites that look <span style={{ color: "#ff7a1a" }}>expensive</span>
          <br />
          and actually convert.
        </h1>

        <p
          style={{
            maxWidth: 640,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 36,
          }}
        >
          Seifert Sites builds modern, premium, and easy to navigate websites for businesses
          that want instant credibility. No templates. No clutter. Just sharp
          design and fast performance.
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          <a
            href="/contact"
            style={{
              padding: "14px 22px",
              borderRadius: 14,
              background: "#ff7a1a",
              color: "#0b0c10",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get a quote
          </a>

          <a
            href="/services"
            style={{
              padding: "14px 22px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              textDecoration: "none",
            }}
          >
            View services
          </a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section
        style={{
          padding: "72px 40px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {[
          {
            title: "Premium Design",
            text: "Attractive, minimal, customer-friendly layouts that instantly build trust.",
          },
          {
            title: "Fast & SEO-Ready",
            text: "Built with performance, accessibility, and clean structure from day one.",
          },
          {
            title: "Built to Convert",
            text: "Clear messaging and CTAs that guide visitors toward action.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              padding: 24,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h3 style={{ marginBottom: 8 }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section
        style={{
          padding: "72px 40px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 32, letterSpacing: -0.8 }}>
          How it works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          <div>
            <h3>01 — Strategy</h3>
            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              We define your goal, audience, and offer so the site has a clear
              purpose.
            </p>
          </div>
          <div>
            <h3>02 — Design</h3>
            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              Clean layouts, strong typography, and a premium visual system.
            </p>
          </div>
          <div>
            <h3>03 — Build & Launch</h3>
            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              Fast build, SEO basics, analytics, and a smooth launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "72px 40px 96px",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 40, marginBottom: 16 }}>
          Ready to look legit online?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 520,
            margin: "0 auto 32px",
          }}
        >
          If your site feels “fine,” that’s the problem. Let’s make it feel
          inevitable.
        </p>

        <a
          href="/contact"
          style={{
            padding: "16px 28px",
            borderRadius: 16,
            background: "#ff7a1a",
            color: "#0b0c10",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book a call
        </a>
      </section>
    </main>
  );
}

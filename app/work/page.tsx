export default function WorkPage() {
  const projects = [
    {
      title: "Client Project One",
      category: "Business Website",
      description:
        "A clean multi-page site designed to feel premium and guide visitors into booking.",
      tags: ["Multi-page", "Dark premium", "Conversion-first"],
      status: "Placeholder",
    },
    {
      title: "Client Project Two",
      category: "Landing Page",
      description:
        "A single-page build focused on one offer, one CTA, and fast lead capture.",
      tags: ["Landing page", "Fast", "Straight to the point"],
      status: "Placeholder",
    },
    {
      title: "Client Project Three",
      category: "Redesign",
      description:
        "A redo that replaced clutter with a modern system and better hierarchy.",
      tags: ["Redesign", "Better UX", "Cleaner copy flow"],
      status: "Placeholder",
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
          Work · Seifert Sites
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: -1.5,
          }}
        >
          Proof.
          <br />
          <span style={{ color: "#ff7a1a" }}>Not promises.</span>
        </h1>

        <p
          style={{
            maxWidth: 760,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Real case studies go here. For now, this page is built as a clean
          template so you can drop in screenshots, results, and before/after
          details when you have them.
        </p>
      </section>

      {/* PROJECT GRID */}
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
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              padding: 28,
              borderRadius: 24,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}
          >
            {/* Fake screenshot area */}
            <div
              style={{
                height: 160,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.10)",
                marginBottom: 18,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  padding: "7px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,122,26,0.12)",
                  border: "1px solid rgba(255,122,26,0.28)",
                }}
              >
                {p.status}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "baseline",
                marginBottom: 8,
              }}
            >
              <h2 style={{ margin: 0, fontSize: 20 }}>{p.title}</h2>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: 0.7,
                }}
              >
                {p.category}
              </span>
            </div>

            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
              {p.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginTop: 14,
              }}
            >
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "7px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.70)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: 18,
                textDecoration: "none",
                fontWeight: 650,
                color: "#0b0c10",
                background: "#ff7a1a",
                padding: "12px 14px",
                borderRadius: 14,
              }}
            >
              Build something like this
            </a>
          </div>
        ))}
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
          Want your business to look like this?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 640,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Most websites feel like they were made to “exist.” Yours should feel
          like it was made to win. Let’s build it.
        </p>

        <a
          href="/contact"
          style={{
            padding: "16px 28px",
            borderRadius: 16,
            background: "#ff7a1a",
            color: "#0b0c10",
            fontWeight: 650,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Book a call
        </a>
      </section>
    </main>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: "Landing Pages",
      text:
        "Single-page sites built for one goal: leads. Perfect for offers, coaches, campaigns, or local services that need to convert fast.",
      bullets: [
        "Hero + value prop + CTA",
        "Mobile-first layout",
        "Fast load times",
        "Basic SEO structure",
      ],
    },
    {
      title: "Business Websites",
      text:
        "Multi-page websites that make your business feel legitimate, organized, and trustworthy the moment someone lands on it.",
      bullets: [
        "3–6 core pages",
        "Clean navigation",
        "Conversion-first layout",
        "SEO-ready structure",
      ],
    },
    {
      title: "Redesigns",
      text:
        "If your site feels dated, cluttered, or forgettable, I’ll redo it into something sharp, modern, and confident.",
      bullets: [
        "Visual refresh",
        "Better hierarchy",
        "Cleaner copy flow",
        "Improved UX",
      ],
    },
  ];

  const addons = [
    {
      title: "SEO + Performance",
      text:
        "Not gimmicks. Just the stuff that actually matters for ranking and speed.",
    },
    {
      title: "Analytics Setup",
      text:
        "Tracking so you know what’s working instead of guessing.",
    },
    {
      title: "Copy Cleanup",
      text:
        "Tighten your messaging so it sounds confident, not generic.",
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
          Services · Seifert Sites
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: -1.5,
          }}
        >
          What I build.
          <br />
          <span style={{ color: "#ff7a1a" }}>And why it works.</span>
        </h1>

        <p
          style={{
            maxWidth: 760,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          I don’t sell “websites.” I build clean, modern systems that make your
          business look credible and guide people toward action.
        </p>
      </section>

      {/* CORE SERVICES */}
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
        {services.map((s) => (
          <div
            key={s.title}
            style={{
              padding: 32,
              borderRadius: 24,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 10 }}>{s.title}</h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {s.text}
            </p>

            <ul
              style={{
                paddingLeft: 18,
                color: "rgba(255,255,255,0.55)",
                display: "grid",
                gap: 6,
                lineHeight: 1.5,
              }}
            >
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

            {/* ADD ONS */}
            <section
              style={{
                padding: "0 40px 96px",
                maxWidth: 1100,
                margin: "0 auto",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Add-ons</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                  marginTop: 12,
                }}
              >
                {addons.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      padding: 20,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <strong>{a.title}</strong>
                    <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.7)" }}>{a.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        );
      }

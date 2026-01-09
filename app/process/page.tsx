export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Strategy",
      text:
        "We get clear on your offer, who you’re selling to, and what you want visitors to do. If this part is messy, the website becomes noise.",
    },
    {
      num: "02",
      title: "Design",
      text:
        "Apple-ish, clean layout. Dark premium system. Strong hierarchy so people instantly understand what you do and why you’re better.",
    },
    {
      num: "03",
      title: "Build",
      text:
        "Fast, modern code. Mobile-first. SEO structure baked in. No bloated plugins or template junk slowing you down.",
    },
    {
      num: "04",
      title: "Launch",
      text:
        "We ship it. Tracking/analytics get set up. You get a checklist so you’re not guessing what to do after it’s live.",
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
          Process · Seifert Sites
        </p>

        <h1
          style={{
            fontSize: 56,
            lineHeight: 1.05,
            marginBottom: 18,
            letterSpacing: -1.5,
          }}
        >
          Clean process.
          <br />
          <span style={{ color: "#ff7a1a" }}>No chaos.</span>
        </h1>

        <p
          style={{
            maxWidth: 760,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          You’re not hiring me for “a website.” You’re hiring me to make your
          business look credible and get you more leads. This is how we ship fast
          without it turning into a mess.
        </p>
      </section>

      {/* STEPS */}
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
        {steps.map((s) => (
          <div
            key={s.num}
            style={{
              padding: 28,
              borderRadius: 24,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(255,122,26,0.10)",
                border: "1px solid rgba(255,122,26,0.25)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 12,
                letterSpacing: 0.6,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Step {s.num}
            </div>

            <h2 style={{ margin: 0, marginBottom: 10 }}>{s.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
              {s.text}
            </p>
          </div>
        ))}
      </section>

      {/* WHAT YOU GET */}
      <section
        style={{
          padding: "56px 40px",
          maxWidth: 1100,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 18, letterSpacing: -0.8 }}>
          What you get at the end
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "A premium design system",
              text: "Fonts, spacing, buttons, and layout that makes your business feel legit instantly.",
            },
            {
              title: "Speed that actually matters",
              text: "Lightweight build and clean structure so the site feels instant.",
            },
            {
              title: "A site built to convert",
              text: "Clear messaging and CTA placement so visitors take action.",
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
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}
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
          Want this done fast and done right?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 620,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          If you’re serious about looking premium online, let’s talk. I’ll tell
          you what you need, what you don’t, and what’ll move the needle.
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

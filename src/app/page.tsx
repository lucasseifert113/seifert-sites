const portfolioImage =
  "https://raw.githubusercontent.com/lucasseifert113/seifert-sites/main/ChatGPT%20Image%20Jul%2017%2C%202026%2C%2001_28_24%20PM.png";

const primaryLinks = [
  {
    label: "Book on TheCut",
    detail: "Choose a service and reserve your chair",
    href: "https://book.thecut.co/",
    external: true,
  },
  {
    label: "Instagram",
    detail: "See recent cuts and new work",
    href: "https://www.instagram.com/tay.belndz.0/",
    external: true,
  },
  {
    label: "Call or Text",
    detail: "(608) 732-8721",
    href: "tel:+16087328721",
    external: false,
  },
  {
    label: "Get Directions",
    detail: "45 N 3rd Street, Platteville, WI",
    href: "https://www.google.com/maps/search/?api=1&query=45+N+3rd+Street+Platteville+WI",
    external: true,
  },
];

export default function Home() {
  return (
    <main className="tay-site">
      <header className="tay-nav">
        <a className="tay-wordmark" href="#top" aria-label="Tay Blendz home">
          <span className="tay-mark">TB</span>
          <span>
            <strong>Tay Blendz</strong>
            <small>Platteville, Wisconsin</small>
          </span>
        </a>
        <a className="nav-book" href="https://book.thecut.co/" target="_blank" rel="noreferrer">
          Book Now
        </a>
      </header>

      <section
        id="top"
        className="tay-hero"
        style={{
          background:
            "radial-gradient(circle at 78% 34%, rgba(215,168,79,.28), transparent 20rem), linear-gradient(125deg, #070706 0%, #11100d 55%, #221a0d 100%)",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "clamp(-5rem, 2vw, 2rem)",
            top: "50%",
            transform: "translateY(-50%) rotate(-8deg)",
            fontFamily: "Georgia, serif",
            fontSize: "clamp(14rem, 34vw, 36rem)",
            fontWeight: 900,
            lineHeight: 0.7,
            letterSpacing: "-0.16em",
            color: "rgba(215,168,79,.09)",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          TB
        </div>
        <div className="hero-content">
          <p className="eyebrow">Modern cuts. Clean fades. Sharp finish.</p>
          <h1>
            Walk in clean.<span>Leave sharper.</span>
          </h1>
          <p className="hero-copy">
            Tay The Barber delivers modern cuts and fades in Platteville, with every appointment tailored to your style.
          </p>
          <div className="hero-actions">
            <a className="gold-button" href="https://book.thecut.co/" target="_blank" rel="noreferrer">
              Book on TheCut
            </a>
            <a className="ghost-button" href="#work">
              Preview My Work
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <span>45 N 3rd Street</span>
          <span>Platteville, WI</span>
          <span>(608) 732-8721</span>
        </div>
      </section>

      <section className="link-section" aria-labelledby="connect-heading">
        <div className="section-heading">
          <p>Everything in one place</p>
          <h2 id="connect-heading">Book, follow, or reach Tay directly.</h2>
        </div>
        <div className="link-grid">
          {primaryLinks.map((link, index) => (
            <a
              className="link-card"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span className="link-number">0{index + 1}</span>
              <span className="link-copy">
                <strong>{link.label}</strong>
                <small>{link.detail}</small>
              </span>
              <span className="link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-panel">
          <p className="section-label">Tay The Barber</p>
          <h2>Four years sharpening the craft.</h2>
          <p>
            I am a Platteville barber focused on modern cuts, clean fades, and details that fit the person in the chair. Every cut is built around your look, your routine, and the style you want to leave with.
          </p>
          <a href="tel:+16087328721">Call or text (608) 732-8721</a>
        </div>
        <div
          className="about-photo-wrap"
          style={{
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            background:
              "radial-gradient(circle at 50% 36%, rgba(215,168,79,.22), transparent 17rem), repeating-linear-gradient(135deg, rgba(255,255,255,.025) 0 1px, transparent 1px 16px), #0b0a08",
          }}
        >
          <div style={{ width: "min(78%, 460px)", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div
              style={{
                margin: "0 auto 1.5rem",
                display: "grid",
                width: "clamp(9rem, 24vw, 14rem)",
                aspectRatio: "1",
                placeItems: "center",
                border: "1px solid rgba(215,168,79,.7)",
                borderRadius: "50%",
                color: "#d7a84f",
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-.08em",
              }}
            >
              TB
            </div>
            <p style={{ margin: 0, color: "#d7a84f", fontSize: ".72rem", fontWeight: 900, letterSpacing: ".24em", textTransform: "uppercase" }}>
              Precision · Style · Confidence
            </p>
            <h3 style={{ margin: "1rem 0 0", fontFamily: "Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 500, lineHeight: .95 }}>
              Built around your look.
            </h3>
          </div>
          <span>Platteville barber</span>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading work-heading">
          <p>Preview of my work</p>
          <h2>Recent cuts.</h2>
        </div>
        <figure style={{ margin: 0, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", borderRadius: "18px", background: "#111" }}>
          <img
            src={portfolioImage}
            alt="Tay Blendz portfolio featuring textured flow, taper fade, curl taper, and clean lineup"
            loading="eager"
            decoding="sync"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </figure>
      </section>

      <section className="final-cta">
        <p>Ready for the chair?</p>
        <h2>Book your next cut.</h2>
        <div className="hero-actions final-actions">
          <a className="gold-button" href="https://book.thecut.co/" target="_blank" rel="noreferrer">
            Book on TheCut
          </a>
          <a className="ghost-button" href="tel:+16087328721">
            Call or Text Tay
          </a>
        </div>
      </section>

      <footer className="tay-footer">
        <div>
          <strong>Tay Blendz</strong>
          <span>Modern cuts and fades in Platteville, Wisconsin.</span>
        </div>
        <a href="https://www.instagram.com/tay.belndz.0/" target="_blank" rel="noreferrer">
          @tay.belndz.0
        </a>
      </footer>
    </main>
  );
}

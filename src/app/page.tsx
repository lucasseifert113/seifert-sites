const recentCuts = [
  {
    src: "/tay-blendz/recent-cuts/recent-cut-01.png?v=3",
    alt: "Tay Blendz haircut with a clean temple fade and sharp lineup",
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-02.png?v=3",
    alt: "Tay Blendz haircut with a fresh fade and clean edge-up",
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-03.png?v=3",
    alt: "Tay Blendz haircut showing detailed fade work",
  },
  {
    src: "/tay-blendz/recent-cuts/recent-cut-04.png?v=3",
    alt: "Tay Blendz haircut with a polished finished look",
  },
];

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

        <a
          className="nav-book"
          href="https://book.thecut.co/"
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </header>

      <section id="top" className="tay-hero">
        <img
          className="hero-photo"
          src={recentCuts[0].src}
          alt="Fresh haircut by Tay Blendz"
          loading="eager"
          decoding="sync"
        />
        <div className="hero-overlay" />
        <div className="hero-grain" />

        <div className="hero-content">
          <p className="eyebrow">Modern cuts. Clean fades. Sharp finish.</p>
          <h1>
            Walk in clean.
            <span>Leave sharper.</span>
          </h1>
          <p className="hero-copy">
            Tay The Barber delivers modern cuts and fades in Platteville, with
            every appointment tailored to your style.
          </p>

          <div className="hero-actions">
            <a
              className="gold-button"
              href="https://book.thecut.co/"
              target="_blank"
              rel="noreferrer"
            >
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
            I am a Platteville barber focused on modern cuts, clean fades, and
            details that fit the person in the chair. Every cut is built around
            your look, your routine, and the style you want to leave with.
          </p>
          <a href="tel:+16087328721">Call or text (608) 732-8721</a>
        </div>

        <div className="about-photo-wrap">
          <img
            src={recentCuts[1].src}
            alt="Detailed fade by Tay Blendz"
            loading="eager"
            decoding="sync"
          />
          <span>Platteville barber</span>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading work-heading">
          <p>Preview of my work</p>
          <h2>Recent cuts.</h2>
        </div>

        <div className="cuts-grid">
          {recentCuts.map((cut, index) => (
            <figure className={`cut-card cut-${index + 1}`} key={cut.src}>
              <img
                src={cut.src}
                alt={cut.alt}
                loading="eager"
                decoding="sync"
              />
              <figcaption>
                <span>0{index + 1}</span>
                <strong>Tay Blendz</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p>Ready for the chair?</p>
        <h2>Book your next cut.</h2>
        <div className="hero-actions final-actions">
          <a
            className="gold-button"
            href="https://book.thecut.co/"
            target="_blank"
            rel="noreferrer"
          >
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
        <a
          href="https://www.instagram.com/tay.belndz.0/"
          target="_blank"
          rel="noreferrer"
        >
          @tay.belndz.0
        </a>
      </footer>
    </main>
  );
}

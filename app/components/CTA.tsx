import Link from "next/link";

export default function CTA() {
  return (
    <section className="sectionTight">
      <div className="container">
        <div
          className="card"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <h2 className="h2" style={{ marginBottom: 8 }}>Ready to look premium?</h2>
          <p className="muted">Let’s build something that feels inevitable.</p>
          <div className="btnRow">
            <Link className="btnPrimary" href="/contact">Book a call</Link>
            <Link className="btnGhost" href="/work">See work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

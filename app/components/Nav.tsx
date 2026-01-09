import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(7, 8, 11, 0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 38,
                height: 38,
                display: "grid",
                placeItems: "center",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Image src="/logo.png" alt="Seifert Sites" width={28} height={28} />
            </div>
            <span style={{ fontWeight: 650 }}>Seifert Sites</span>
          </Link>

          <nav style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/services" style={{ textDecoration: "none", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Services</Link>
            <Link href="/work" style={{ textDecoration: "none", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Work</Link>
            <Link href="/process" style={{ textDecoration: "none", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Process</Link>
            <Link href="/pricing" style={{ textDecoration: "none", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Pricing</Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "rgba(255,255,255,0.68)", fontSize: 14 }}>Contact</Link>
          </nav>

          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              fontSize: 14,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255, 122, 26, 0.35)",
              background: "linear-gradient(180deg, rgba(255, 122, 26, 0.18), rgba(255, 122, 26, 0.06))",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}

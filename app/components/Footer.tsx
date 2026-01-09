import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        padding: 18,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(7, 8, 11, 0.6)",
        backdropFilter: "blur(14px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 650 }}>
            <Image src="/logo.png" alt="" width={22} height={22} />
            <span>Seifert Sites</span>
          </div>

          <div style={{ display: "flex", gap: 14, color: "rgba(255,255,255,0.52)" }}>
            <Link href="/services" style={{ textDecoration: "none" }}>Services</Link>
            <Link href="/process" style={{ textDecoration: "none" }}>Process</Link>
            <Link href="/pricing" style={{ textDecoration: "none" }}>Pricing</Link>
          </div>

          <div style={{ color: "rgba(255,255,255,0.52)", fontSize: 13 }}>
            © {new Date().getFullYear()} Seifert Sites
          </div>
        </div>
      </div>
    </footer>
  );
}

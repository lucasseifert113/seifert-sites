export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
        <div style={{ marginTop: 18 }}>{children}</div>
      </div>
    </section>
  );
}

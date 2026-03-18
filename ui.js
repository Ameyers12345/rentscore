export function Shell({ children }) {
  return <div className="shell"><div className="container">{children}</div></div>;
}

export function Navbar() {
  return (
    <div className="nav">
      <a href="/" className="brand">
        <span className="brand-mark" />
        <span>RentScore</span>
      </a>
      <div className="nav-links">
        <a className="pill" href="#features">Features</a>
        <a className="pill" href="#passport">Passport</a>
        <a className="pill" href="#dashboard">Dashboard</a>
      </div>
      <div className="nav-actions">
        <a className="btn ghost" href="/login">Log in</a>
        <a className="btn brand" href="/signup">Join waitlist + MVP</a>
      </div>
    </div>
  );
}

export function Section({ id, title, lead, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </section>
  );
}

export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

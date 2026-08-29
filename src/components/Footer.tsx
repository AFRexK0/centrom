export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">CENTROM</div>
        <div className="footer-domains">centrom.studio · centrom.com</div>
        <div className="footer-meta">© {year} Centrom · all systems nominal</div>
      </div>
    </footer>
  )
}

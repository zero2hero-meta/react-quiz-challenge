const footerLinks = [
  {
    title: "Project",
    links: [
      { href: "#", label: "React Quiz Challenge" },
      { href: "#", label: "Workshop Overview" },
      { href: "#", label: "Question Bank" },
      { href: "#", label: "Debugging Guide" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "#", label: "React Components" },
      { href: "#", label: "TypeScript Props" },
      { href: "#", label: "useState" },
      { href: "#", label: "useEffect" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Getting Started" },
      { href: "#", label: "Common Bugs" },
      { href: "#", label: "Browser DevTools" },
      { href: "#", label: "React DevTools" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Accessibility" },
      { href: "#", label: "License" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", shortLabel: "Fb" },
  { label: "Instagram", href: "#", shortLabel: "Ig" },
  { label: "LinkedIn", href: "#", shortLabel: "In" },
  { label: "Twitter", href: "#", shortLabel: "X" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerLinks.map((section) => (
            <nav aria-label={section.title} key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-divider" />

        <div className="footer-actions">
          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="social-link"
                href={link.href}
                key={link.label}
              >
                {link.shortLabel}
              </a>
            ))}
          </div>

          <div className="footer-resource-links">
            <a className="resource-button" href="#">
              Workshop Notes
            </a>
            <a className="resource-button resource-button--dark" href="#">
              Source Code
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} React Quiz Challenge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

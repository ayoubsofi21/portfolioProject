const LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-text">© {year} Ayoub Sofi</p>
          <p className="text-xs text-text-muted mt-1">Built with React &amp; Laravel mindset 🇲🇦</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={scrollTo(link.id)}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/ayoubsofi21"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayoub-sofi-72895a290/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

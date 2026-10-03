import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeMenuOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    const desktopQuery = window.matchMedia('(min-width: 681px)');
    function closeMenuOnDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }

    window.addEventListener('keydown', closeMenuOnEscape);
    desktopQuery.addEventListener('change', closeMenuOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeMenuOnEscape);
      desktopQuery.removeEventListener('change', closeMenuOnDesktop);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          jordan<span>.</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          {links.map(({ label, href }) => {
            const sectionId = href.slice(1);
            return (
              <a
                className={`nav-link${activeSection === sectionId ? ' is-active' : ''}`}
                href={href}
                aria-current={activeSection === sectionId ? 'location' : undefined}
                key={sectionId}
                onClick={closeMenu}
              >
                {label}
              </a>
            );
          })}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

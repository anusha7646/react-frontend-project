function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="wordmark footer-wordmark" href="#home">
          jordan<span>.</span>
        </a>
        <p>Thoughtful work, made with care.</p>
        <div className="footer-links">
          <a href="mailto:hello@jordanlee.design">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Jordan Lee</span>
      </div>
    </footer>
  );
}

export default Footer;

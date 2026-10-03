function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-content container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> Independent designer & developer</p>
          <h1 id="hero-title">
            Thoughtful digital
            <br />
            work, <span>made human.</span>
          </h1>
          <p className="hero-description">
            I&apos;m Jordan — a product designer and frontend developer partnering
            with good people to make useful things for the web.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#about">
              A little about me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in Brooklyn, NY</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>Working everywhere</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract illustration of a digital workspace">
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-card art-card-back" />
          <div className="art-card art-card-front">
            <div className="art-card-top">
              <span className="art-brand">goodkind</span>
              <span className="art-menu" aria-hidden="true">•••</span>
            </div>
            <div className="art-message">A little progress<br />goes a long way.</div>
            <div className="art-progress"><span /></div>
            <div className="art-card-footer">
              <span>YOUR WEEK</span>
              <span>04 / 07 DAYS</span>
            </div>
          </div>
          <div className="art-sticker" aria-hidden="true">GOOD<br />THINGS<br />TAKE TIME <span>✳</span></div>
          <div className="art-caption"><span /> A little more thoughtful, by design.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

export default Hero;

function About() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="section-intro">
          <p className="eyebrow">A bit about me</p>
          <h2 id="about-title">Design-minded.<br /><span>Detail-driven.</span></h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I bring design and code together to make digital experiences that
            feel as good as they work.
          </p>
          <p>
            Over the last eight years, I&apos;ve helped ambitious teams turn
            early ideas into clear, useful products. I love getting close to the
            problem, making the complicated feel simple, and sweating the small
            details that make the whole thing click.
          </p>
          <p>
            I work best as a thoughtful partner: asking good questions, sharing
            work early, and making space for the people who will use what we
            build.
          </p>
          <a className="text-link about-link" href="#contact">
            More about working together <span aria-hidden="true">↗</span>
          </a>
          <div className="about-facts">
            <div><strong>08<span>+</span></strong><span>Years making<br />digital things</span></div>
            <div><strong>24</strong><span>Projects made<br />with good people</span></div>
            <div><strong>06</strong><span>Time zones<br />collaborated in</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

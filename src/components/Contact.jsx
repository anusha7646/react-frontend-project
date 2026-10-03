import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (feedback) setFeedback('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFeedback(
      `Thanks, ${formData.name.trim()}! This demo does not send messages. Email hello@jordanlee.design to get in touch.`,
    );
    setFormData(initialForm);
  }

  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2 id="contact-title">Let&apos;s make<br /><span>something matter.</span></h2>
          <p>
            Have a project, a question, or just want to say hello? My inbox is
            always open.
          </p>
          <a className="contact-email" href="mailto:hello@jordanlee.design">
            hello@jordanlee.design <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-availability"><span className="availability-dot" /> Available for select projects</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">A little about your project</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="What are you working on?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
            />
          </div>
          <button className="button button-light" type="submit">
            Send a note <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note" role="status" aria-live="polite">
            {feedback || 'This demo form gives you feedback in the browser; it does not send or store your message.'}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import ServiceCard from './ServiceCard.jsx';
import services from '../data/services.js';

function Services() {
  return (
    <section className="services-section section-shell" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What I can help with</p>
            <h2 id="services-title">Good work starts<br /><span>with good thinking.</span></h2>
          </div>
          <p className="section-heading-note">
            From the first sketch to the final detail, I bring clarity and care
            to every part of the process.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

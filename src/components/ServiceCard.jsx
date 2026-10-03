function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span className="service-arrow" aria-hidden="true">↗</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="tag-list" aria-label="Related skills">
        {service.tags.slice(0, 3).map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ServiceCard;

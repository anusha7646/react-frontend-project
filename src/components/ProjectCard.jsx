function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <span className="project-year">{project.year}</span>
      </div>
      <div className="project-details">
        <div className="project-title-row">
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-card-arrow" aria-hidden="true">↗</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">
          {project.tags.slice(0, 3).map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <button className="project-open-button" type="button" onClick={() => onOpen(project)}>
          View project <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;

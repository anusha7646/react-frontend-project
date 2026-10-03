import { useEffect, useRef } from 'react';

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onCancel={(event) => {
        event.preventDefault();
        dialogRef.current.close();
      }}
      onClick={handleBackdropClick}
    >
      {project && (
        <article className="project-dialog-content">
          <button
            className="dialog-close"
            type="button"
            aria-label="Close project details"
            onClick={() => dialogRef.current.close()}
          >
            <span aria-hidden="true">×</span>
          </button>
          <img className="dialog-image" src={project.image} alt={project.imageAlt} />
          <div className="dialog-copy">
            <p className="project-category">{project.category} <span>·</span> {project.year}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
            <p className="dialog-overview">{project.overview}</p>
            <div className="dialog-meta">
              <div>
                <h3>My role</h3>
                <p>{project.role}</p>
              </div>
              <div>
                <h3>The outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </div>
            <div className="tag-list">
              {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <a className="button button-primary dialog-contact" href="#contact" onClick={() => dialogRef.current.close()}>
              Have a similar project? Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      )}
    </dialog>
  );
}

export default ProjectDetails;

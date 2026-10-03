import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetails from './ProjectDetails.jsx';
import SearchBar from './SearchBar.jsx';
import ServiceCard from './ServiceCard.jsx';

const filters = ['All work', 'Product', 'Web', 'Brand'];

function Projects({ searchTerm, onSearchChange, results }) {
  const isSearching = searchTerm.trim().length > 0;
  const [activeFilter, setActiveFilter] = useState('All work');
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleResults = activeFilter === 'All work'
    ? results
    : results.filter((result) => result.type === 'project' && result.discipline === activeFilter);

  function clearSearch() {
    onSearchChange('');
    setActiveFilter('All work');
  }

  return (
    <section className="projects-section section-shell" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">A few things I&apos;ve made</p>
            <h2 id="projects-title">Selected work,<br /><span>made with purpose.</span></h2>
          </div>
          <p className="section-heading-note">
            A small collection of collaborations, ideas, and details I&apos;m
            especially proud of.
          </p>
        </div>

        <div className="projects-tools">
          <p className="search-hint">Looking for something in particular?</p>
          <SearchBar value={searchTerm} onChange={onSearchChange} />
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects by discipline">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
              type="button"
              key={filter}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="results-heading" aria-live="polite" aria-atomic="true">
          {(isSearching || activeFilter !== 'All work') && visibleResults.length > 0 && (
            <p>
              {visibleResults.length} {visibleResults.length === 1 ? 'result' : 'results'}
              {isSearching && <> for “{searchTerm.trim()}”</>}
              {activeFilter !== 'All work' && <> in {activeFilter}</>}
            </p>
          )}
        </div>

        {visibleResults.length > 0 ? (
          <div className="projects-grid">
            {visibleResults.map((result) =>
              result.type === 'service' ? (
                <ServiceCard service={result} key={`${result.type}-${result.id}`} />
              ) : (
                <ProjectCard project={result} onOpen={setSelectedProject} key={`${result.type}-${result.id}`} />
              ),
            )}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <span aria-hidden="true">⌕</span>
            <h3>No results found</h3>
            <p>Try a different keyword or category, or reset the filters to see all projects.</p>
            <button className="text-link empty-state-button" type="button" onClick={clearSearch}>
              Reset filters <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
      </div>
      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;

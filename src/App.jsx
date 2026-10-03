import { useMemo, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import projects from './data/projects.js';
import services from './data/services.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) {
      return projects.map((project) => ({ ...project, type: 'project' }));
    }

    const projectResults = projects
      .filter((project) =>
        [project.title, project.category, project.description, ...project.tags]
          .join(' ')
          .toLowerCase()
          .includes(keyword),
      )
      .map((project) => ({ ...project, type: 'project' }));

    const serviceResults = services
      .filter((service) =>
        [service.title, service.description, ...service.tags]
          .join(' ')
          .toLowerCase()
          .includes(keyword),
      )
      .map((service) => ({ ...service, type: 'service' }));

    return [...projectResults, ...serviceResults];
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          results={searchResults}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

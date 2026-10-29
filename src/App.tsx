import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import type { Project } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-[#2c67ed] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Big Name & Typewriter */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* About Me Section: Profile, Education, Experience, Statistics */}
        <About />

        {/* Portfolio Section: Clean Tabs for Projects and Tech Stack (Certifications removed) */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Contact Section: Form & Social Links */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project In-Depth Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* CV Document Viewer & Print Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}

export default App;

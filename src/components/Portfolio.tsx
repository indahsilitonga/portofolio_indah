import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { 
  FolderKanban, 
  Layers, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Code2, 
  Database, 
  Workflow, 
  BrainCircuit, 
  Wrench, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'techstack'>('projects');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState<string>('All');

  // Helper icon selector for skill categories
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2c67ed]" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-emerald-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      default:
        return <Layers className="w-5 h-5 text-[#2c67ed]" />;
    }
  };

  const projectCategories = ['All', 'AI & QA Evaluation', 'Full SDLC & QA Automation', 'Frontend Development'];

  const filteredProjects = projectCategoryFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(projectCategoryFilter.toLowerCase()) || projectCategoryFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2c67ed] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>Showcase &amp; Skills</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Portfolio &amp; Capabilities
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Explore verified projects and comprehensive technical competencies in SQA and software engineering.
          </p>
        </div>

        {/* 2 Clean Tabs: Projects & Tech Stack */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'projects'
                  ? 'bg-[#2c67ed] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects ({PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('techstack')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'techstack'
                  ? 'bg-[#2c67ed] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Tech Stack</span>
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        <AnimatePresence mode="wait">
          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectCategoryFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      projectCategoryFilter === cat
                        ? 'bg-blue-50 text-[#2c67ed] border border-[#2c67ed] font-semibold shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#2c67ed] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Glowing highlight line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2c67ed] border border-blue-200">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {project.metricsBadge}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#2c67ed] transition-colors mb-2">
                        {project.title}
                      </h3>

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#2c67ed]" />
                          {project.period}
                        </span>
                        {project.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#2c67ed]" />
                            {project.location}
                          </span>
                        )}
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Highlights bullets preview */}
                      <ul className="space-y-1.5 mb-6">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer: Tech tags + View Details Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-500">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-[#2c67ed] text-slate-700 hover:text-white border border-slate-200 hover:border-[#2c67ed] transition-all duration-200 cursor-pointer shadow-xs"
                      >
                        <span>View In-Depth Testing &amp; Architecture Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: TECH STACK */}
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SKILL_CATEGORIES.map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items with Level Bars & Notes */}
                    <div className="space-y-3.5 mt-5">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-800">
                              {skill.name}
                            </span>
                            {skill.note && (
                              <span className="font-mono text-[10px] text-slate-500">
                                {skill.note}
                              </span>
                            )}
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                              className="h-full rounded-full bg-gradient-to-r from-[#2c67ed] to-[#5286ff]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

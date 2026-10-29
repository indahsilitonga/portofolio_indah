import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/portfolioData';
import { X, Calendar, MapPin, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-slate-800"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2c67ed] border border-blue-200">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              {project.metricsBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            {project.title}
          </h3>

          {/* Meta (Period & Location) */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#2c67ed]" />
              {project.period}
            </span>
            {project.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#2c67ed]" />
                {project.location}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Overview &amp; Purpose
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Test Cases */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2c67ed]" />
              <span>Key Responsibilities &amp; Testing Highlights</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-6 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#2c67ed]" />
              <span>Technologies &amp; Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium font-mono bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#2c67ed] hover:bg-[#1e50c4] text-white shadow-sm transition-all"
            >
              Discuss Project
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

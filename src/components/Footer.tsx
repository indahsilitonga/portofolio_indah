import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 text-slate-600 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 items-center justify-between">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2c67ed] to-[#5286ff] text-white font-bold text-base shadow-sm">
                IS
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Software Engineering Technology graduate from Institut Teknologi Del with focus on Software Quality Assurance (Manual &amp; Selenium), System Validation, and Modern Frontend Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase text-slate-800 tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#2c67ed] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2c67ed] transition-colors">About Me</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#2c67ed] transition-colors">Experience &amp; Education</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#2c67ed] transition-colors">Portfolio &amp; Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2c67ed] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase text-slate-800 tracking-wider">
              Connect Directly
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#2c67ed] hover:text-[#2c67ed] text-slate-600 shadow-xs transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 text-slate-600 shadow-xs transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#2c67ed] hover:text-[#2c67ed] text-slate-600 shadow-xs transition-colors"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              Laguboti, North Sumatra, Indonesia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} Indah Silitonga. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Designed with React + Tailwind CSS + Framer Motion</span>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors ml-2 shadow-xs cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

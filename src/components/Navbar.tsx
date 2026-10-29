import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience & Edu', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3 px-5 sm:px-7'
            : 'bg-white/70 backdrop-blur-sm border-slate-200/70 py-4 px-5 sm:px-7 shadow-xs'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2c67ed] to-[#5286ff] text-white font-bold text-lg shadow-md shadow-[#2c67ed]/25 group-hover:scale-105 transition-transform duration-200">
              <span>IS</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight flex items-center gap-1.5 text-base sm:text-lg">
                <span>Indah Silitonga</span>
                <ShieldCheck className="w-4 h-4 text-[#2c67ed]" />
              </div>
              <div className="text-[11px] text-slate-500 font-mono hidden sm:block">
                Junior SQA &middot; IT Del
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-[#2c67ed] hover:bg-blue-50/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-[#2c67ed]" />
              <span>View CV</span>
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2c67ed] hover:bg-[#1f50c4] text-white shadow-md shadow-[#2c67ed]/25 hover:shadow-lg hover:shadow-[#2c67ed]/40 transition-all duration-200 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-[#2c67ed] border border-slate-200 cursor-pointer"
              title="View CV"
            >
              <FileDown className="w-4 h-4 text-[#2c67ed]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-[#2c67ed] border border-slate-200 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 p-5 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-[#2c67ed] hover:bg-blue-50/70 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  <FileDown className="w-4 h-4 text-[#2c67ed]" />
                  <span>View CV Document</span>
                </button>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[#2c67ed] text-white shadow-md shadow-[#2c67ed]/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

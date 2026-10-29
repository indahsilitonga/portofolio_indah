import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#2c67ed]/10 to-blue-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Subtle clean grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide flex items-center gap-1.5">
                <span>{PERSONAL_INFO.status}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 inline" />
              </span>
            </div>

            {/* Big Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.15]">
              <span>Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#2c67ed] to-[#1d4ed8]">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="h-10 sm:h-12 flex items-center mb-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 flex items-center">
                <span className="text-slate-500 mr-2">I am a</span>
                <Typewriter
                  words={PERSONAL_INFO.roles}
                  typingSpeed={80}
                  deletingSpeed={45}
                  pauseTime={1900}
                  className="text-[#2c67ed] font-bold"
                />
              </h2>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Software Engineering Technology graduate from <strong className="text-slate-900 font-semibold">Institut Teknologi Del</strong> with hands-on expertise in manual testing, test case development, and basic Selenium automation. Experienced in requirements analysis, system validation, and evaluating AI outputs with analytical precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#2c67ed] hover:bg-[#1f50c4] text-white shadow-md shadow-[#2c67ed]/25 hover:shadow-lg hover:shadow-[#2c67ed]/40 transition-all duration-200 group active:scale-95"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#2c67ed]" />
                <span>View &amp; Download CV</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[#2c67ed] hover:bg-blue-50 border border-blue-200 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#2c67ed]" />
                {PERSONAL_INFO.location}
              </span>
              <span className="hidden sm:inline text-slate-300">&bull;</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                BKN Intern Alum &amp; IT Del
              </span>
            </div>
          </motion.div>

          {/* Right Column: Clean & Professional Portrait Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              {/* Outer decorative card */}
              <div className="p-3 sm:p-4 rounded-3xl bg-white border border-slate-200 shadow-xl">
                
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
                  <img
                    src="/indah-silitonga.jpg"
                    alt="Indah Silitonga - Junior Software Quality Assurance & Tech Enthusiast"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Overlaid Badge at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <span>Indah Silitonga</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2c67ed]" />
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <GraduationCap className="w-3 h-3 text-[#2c67ed]" />
                          <span>Institut Teknologi Del</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-[#2c67ed] border border-blue-200">
                        GPA 3.34
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-card tags underneath the photo */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-bold text-slate-800">SQA Specialist</div>
                    <div className="text-[10px] text-slate-500">Manual &amp; Automation</div>
                  </div>
                  <div className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-bold text-[#2c67ed]">BKN Alum</div>
                    <div className="text-[10px] text-slate-500">Frontend Intern</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Dedicated Statistics Grid — Fully Decoupled & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2c67ed]/60 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <span className="text-[#2c67ed]">{stat.value}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500">{stat.unit}</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

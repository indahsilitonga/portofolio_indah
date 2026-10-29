import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Users, 
  CheckCircle, 
  BarChart3, 
  Target,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeExpTab, setActiveExpTab] = useState<'work' | 'organization'>('work');

  const filteredExperiences = EXPERIENCES.filter(
    (exp) => exp.type === activeExpTab
  );

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      {/* Background soft accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2c67ed] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Background, Education &amp; Experience
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Dedicated Software Engineering Technology graduate combining analytical QA rigor with modern frontend development capabilities.
          </p>
        </div>

        {/* Profile Bio Card & Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-sm mb-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Foto Profil with Clean Frame */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 p-1.5 shadow-md">
                  <img
                    src="/indah-silitonga.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-slate-900">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-[#2c67ed] font-mono font-semibold mt-0.5">Software Engineering Technology &middot; IT Del</p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2c67ed]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Comprehensive Bio Text & Testing Mindset */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2c67ed] uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-[#2c67ed]" />
                <span>Professional Summary &amp; Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Bridging Software Testing Rigor with User-Centric Engineering
              </h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Core QA & Dev Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Analytical Quality Assurance</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Expertise in edge case identification, test case design, and basic Selenium automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle className="w-5 h-5 text-[#2c67ed] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Frontend &amp; Architecture</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Experience building enterprise React + TS systems during BKN government internship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Statistics Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#2c67ed]" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Statistik Project &amp; Kualitas</h3>
            </div>
            <span className="text-xs text-slate-500">Verifiable Academic &amp; Project Metrics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2c67ed] hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2c67ed] mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">41+</div>
              <div className="text-sm font-bold text-slate-800 mt-1">Test Cases / Skenario</div>
              <p className="text-xs text-slate-500 mt-1">
                Eksperimen komparasi RAG vs RAFT dengan evaluasi distractor documents.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">23+</div>
              <div className="text-sm font-bold text-slate-800 mt-1">Manual &amp; Selenium Tests</div>
              <p className="text-xs text-slate-500 mt-1">
                Validasi fungsional menyeluruh pada sistem pemesanan tiket kafe.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">6</div>
              <div className="text-sm font-bold text-slate-800 mt-1">RAGAS Quality Metrics</div>
              <p className="text-xs text-slate-500 mt-1">
                Faithfulness, relevancy, precision, recall, correctness &amp; similarity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">3.34</div>
              <div className="text-sm font-bold text-slate-800 mt-1">GPA / Indeks Prestasi</div>
              <p className="text-xs text-slate-500 mt-1">
                Bachelor of Applied Science in Software Engineering, Institut Teknologi Del.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education & Experience Dual Section */}
        <div id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Riwayat Pendidikan (Education) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-blue-50 text-[#2c67ed]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Riwayat Pendidikan</h3>
            </div>

            <div className="flex-1 p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                {/* School Name & Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {EDUCATION.institution}
                    </h4>
                    <p className="text-sm text-[#2c67ed] font-semibold mt-0.5">
                      {EDUCATION.degree}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#2c67ed] border border-blue-200 whitespace-nowrap">
                    GPA {EDUCATION.gpa} / {EDUCATION.gpaScale}
                  </span>
                </div>

                {/* Timeline & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {EDUCATION.location}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-[#2c67ed]" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 hover:text-[#2c67ed] hover:border-blue-200 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Institution Highlight footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-slate-600">Laguboti, Toba, Sumut</span>
                <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Accredited Program
                </span>
              </div>
            </div>
          </motion.div>

          {/* Pengalaman (Experience: Work & Organization) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Header with Switcher Tabs */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-blue-50 text-[#2c67ed]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Pengalaman</h3>
              </div>

              {/* Work vs Organization Toggle */}
              <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium">
                <button
                  onClick={() => setActiveExpTab('work')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeExpTab === 'work'
                      ? 'bg-[#2c67ed] text-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Work Experience</span>
                </button>

                <button
                  onClick={() => setActiveExpTab('organization')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeExpTab === 'organization'
                      ? 'bg-[#2c67ed] text-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Organisasi ({EXPERIENCES.filter(e => e.type === 'organization').length})</span>
                </button>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              {filteredExperiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm relative overflow-hidden group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#2c67ed] transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-medium text-slate-700 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shrink-0 self-start">
                      <Calendar className="w-3 h-3 text-[#2c67ed]" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2c67ed] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Pills */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-blue-50 text-[#2c67ed] border border-blue-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

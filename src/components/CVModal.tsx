import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0"
        >
          {/* Top Bar for Screen (Hidden when Printing) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#2c67ed]" />
              <h2 className="text-lg font-bold text-slate-900">Curriculum Vitae — Indah Silitonga</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2c67ed] text-white hover:bg-[#1e50c4] transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="font-sans leading-relaxed text-slate-800 text-sm">
            {/* Header */}
            <header className="text-center pb-6 border-b border-slate-300">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                INDAH SILITONGA
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-600">
                <span>Laguboti, North Sumatra</span>
                <span>•</span>
                <span>081264835461</span>
                <span>•</span>
                <span>silitongaindah91@gmail.com</span>
              </div>
              <div className="mt-1 text-xs text-[#2c67ed] font-medium">
                LinkedIn: linkedin.com/in/indah-silitonga-853834311
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-700 text-justify leading-relaxed">
                Software Engineering Technology graduate from Institut Teknologi Del with hands-on experience in manual testing, test case development, and basic Selenium automation through academic projects. Experienced in requirements analysis, system validation, and evaluating software outputs. Detail-oriented, analytical, and eager to contribute to software quality assurance while continuously developing testing skills.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700">
                <p>
                  <strong>Software Testing:</strong> Manual Testing, Test Case Development, Functional Testing, Selenium (Basic)
                </p>
                <p>
                  <strong>Programming &amp; Frontend:</strong> TypeScript, React, Tailwind CSS, shadcn/ui
                </p>
                <p>
                  <strong>Requirements &amp; Modeling:</strong> BPMN, Use Case Diagram, ERD, WBS
                </p>
                <p>
                  <strong>Database:</strong> MySQL, SQL Server, MongoDB, Supabase/pgvector
                </p>
                <p>
                  <strong>AI &amp; Evaluation:</strong> RAG, RAFT, RAGAS
                </p>
                <p>
                  <strong>Tools:</strong> Figma, Balsamiq, Canva, draw.io, Bizagi Modeler, StarUML, Power Designer, Jupyter Notebook, Tableau, Postman, Trello, Jira, Notion
                </p>
                <p>
                  <strong>Methodologies:</strong> Agile (Scrum), Waterfall
                </p>
                <p>
                  <strong>Languages:</strong> Indonesian (Native), English (Intermediate)
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Work Experience
              </h2>
              <div className="mt-2">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Frontend Developer Intern | Badan Kepegawaian Negara (BKN), Republic of Indonesia</span>
                  <span className="font-normal text-slate-600">Aug 2025 – Dec 2025 | East Jakarta</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Developed user interface components for an integrated project management system using React and TypeScript.</li>
                  <li>Implemented UI designs using Tailwind CSS and shadcn/ui.</li>
                </ul>
              </div>
            </section>

            {/* Relevant Projects */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Relevant Projects
              </h2>

              {/* Project 1 */}
              <div className="mt-2">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Benchmarking RAG vs. RAFT for Legal Question Answering</span>
                  <span className="font-normal text-slate-600">Jan 2026 – Jul 2026</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Compared RAG and RAFT across three experimental scenarios: RAG, RAG with distractors, and RAFT with distractors, using 41 test cases per scenario.</li>
                  <li>Collected and processed Indonesian Village Regulation (Perdes) documents to support legal question answering.</li>
                  <li>Developed retrieval pipelines using vector databases and embedding models.</li>
                  <li>Evaluated model performance using six RAGAS metrics: Faithfulness, Answer Relevancy, Context Precision, Context Recall, Answer Correctness, and Semantic Answer Similarity.</li>
                  <li>Analyzed system robustness when retrieval included distractor documents.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mt-3">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Live Music Ticket Booking System for Ataraxia Café</span>
                  <span className="font-normal text-slate-600">Jan 2025 – Jun 2025 | Balige, North Sumatra</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Designed user interfaces and interactive prototypes using Figma.</li>
                  <li>Modeled business processes using BPMN and Use Case Diagrams, and designed the database structure using ERD.</li>
                  <li>Created a Work Breakdown Structure (WBS) for project planning.</li>
                  <li>Developed 23 manual test cases and performed basic Selenium automation to validate selected system functionalities.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="mt-3">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Visitor Management System</span>
                  <span className="font-normal text-slate-600">Jan 2024 – Jun 2024</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Designed the user interface and prototype for visitor registration and management.</li>
                  <li>Modeled business processes using BPMN and Use Case Diagrams, and structured the database using ERD.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="mt-2">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Institut Teknologi Del</span>
                  <span className="font-normal text-slate-600">Sep 2022 – Aug 2026 | Laguboti, North Sumatra</span>
                </div>
                <div className="text-xs text-slate-800 mt-0.5">
                  Bachelor of Applied Science in Software Engineering Technology | <strong>GPA: 3.34/4.00</strong>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  <strong>Relevant Coursework:</strong> Software Testing, Software Requirements Analysis, User Interface Design, Project Management, Database Systems, Machine Learning, Data Analytics, Data Science.
                </div>
              </div>
            </section>

            {/* Organizational Experience */}
            <section className="mt-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Organizational Experience
              </h2>
              <div className="mt-2">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Creative Division Head | Software Engineering Student Association</span>
                  <span className="font-normal text-slate-600">Sep 2024 – Jul 2025</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Led the creative division by delegating design tasks and coordinating with other divisions.</li>
                  <li>Managed Instagram content and produced event posters and videos.</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                  <span>Creative Division Member | Software Engineering Student Association</span>
                  <span className="font-normal text-slate-600">Aug 2023 – Sep 2024</span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-slate-700">
                  <li>Created posters, social media content, and event documentation videos.</li>
                </ul>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

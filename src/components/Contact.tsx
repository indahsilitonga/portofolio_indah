import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  Clock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Junior SQA Opportunity',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message with sleek feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2c67ed', '#60a5fa', '#93c5fd', '#38bdf8', '#0f172a'],
        });
      } catch (err) {
        // Confetti fallback
      }

      // Reset form after a few moments
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          role: 'Junior SQA Opportunity',
          message: '',
        });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white">
      {/* Background soft ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2c67ed] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2c67ed]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Have an open role in Software Quality Assurance or an exciting tech project? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Status Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="text-base font-bold text-slate-900">Status: Open for Employment</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Currently open for Junior SQA and Manual/Automation QA Tester. Willing to work on-site, hybrid, or remote.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#2c67ed]" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-50 text-[#2c67ed]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-slate-800 group-hover:text-[#2c67ed] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone &amp; WhatsApp</div>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="Chat WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-50 text-[#2c67ed]">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">LinkedIn Profile</div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-800 group-hover:text-[#2c67ed] transition-colors"
                  >
                    {PERSONAL_INFO.linkedinHandle}
                  </a>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-slate-100 text-slate-600">
                <MapPin className="w-5 h-5 text-[#2c67ed]" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Location Base</div>
                <div className="text-sm font-bold text-slate-800">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Clean Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#2c67ed]" />
                <h3 className="text-xl font-bold text-slate-900">Send Direct Message</h3>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out, {formData.name || 'there'}! I have received your inquiry regarding <strong>{formData.role}</strong> and will get back to you shortly.
                  </p>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    <span>Follow Up via WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-[#2c67ed]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-[#2c67ed]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Subject / Role Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subject / Role Category
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-slate-900 text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="Junior SQA Opportunity">Junior Software Quality Assurance (SQA) Role</option>
                      <option value="QA Automation Project">Automated &amp; Manual QA Testing Project</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message <span className="text-[#2c67ed]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Indah, we are interested in discussing an opportunity for a Junior SQA position..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#2c67ed] hover:bg-[#1f50c4] text-white shadow-md shadow-[#2c67ed]/25 hover:shadow-lg hover:shadow-[#2c67ed]/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

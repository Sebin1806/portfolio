import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('+91 9342813276');
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Send form data directly to sebinsebin180606@gmail.com via FormSubmit endpoint
      const response = await fetch('https://formsubmit.co/ajax/sebinsebin180606@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // Fallback if canvas-confetti unavailable
        }
      } else {
        // Fallback: mailto link directly to sebinsebin180606@gmail.com
        window.location.href = `mailto:sebinsebin180606@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback: mailto link directly to sebinsebin180606@gmail.com
      window.location.href = `mailto:sebinsebin180606@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal animation="rotate-in">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span className="text-[#DC2626] font-mono text-3xl sm:text-5xl md:text-6xl">11.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-500">
                GET IN TOUCH
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#DC2626] via-red-600 to-rose-700 rounded-full mt-4" />
          </div>
        </ScrollReveal>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info Cards (5 Cols) */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5">
            <div className="space-y-6">
            
            <div className="glass-panel rounded-3xl p-8 space-y-6 hover:border-red-500/50 transition-all">
              <h3 className="text-xl font-bold text-red-400 mb-2">Contact Details</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Messages sent here deliver directly to my inbox (<strong className="text-red-400 font-mono">sebinsebin180606@gmail.com</strong>).
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="p-3 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email Inbox</span>
                    <span className="text-sm font-semibold font-mono text-white group-hover:text-red-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <div
                  onClick={handleCopyPhone}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-red-600/20 border border-red-500/40 text-red-500 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                      <span className="text-sm font-semibold font-mono text-white group-hover:text-red-400 transition-colors">
                        +91 9342813276
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white transition-colors">
                    {phoneCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                  <div className="p-3 rounded-xl bg-[#F97316]/20 border border-[#F97316]/40 text-[#FB923C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
                </div>
              </div>

            {/* Social Links Panel: GitHub, LinkedIn, LeetCode */}
            <div className="glass-panel rounded-3xl p-6 flex items-center justify-around">
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5 text-xs text-slate-300 hover:text-[#FB7185] transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#F43F5E]/50 transition-all">
                  <GithubIcon className="w-5 h-5 text-[#FB7185]" />
                </div>
                <span className="font-mono">GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5 text-xs text-slate-300 hover:text-[#0A66C2] transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#0A66C2]/50 transition-all">
                  <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                </div>
                <span className="font-mono">LinkedIn</span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/sebin1806/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5 text-xs text-slate-300 hover:text-[#FFA116] transition-colors group cursor-pointer"
              >
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-[#FFA116]/50 transition-all">
                  <LeetcodeIcon className="w-5 h-5 text-[#FFA116]" />
                </div>
                <span className="font-mono">LeetCode</span>
              </a>
            </div>

            </div>
          </ScrollReveal>

          {/* Right Contact Form (7 Cols) */}
          <ScrollReveal animation="fade-left" delay={200} className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Delivered to Sebin!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been sent to <strong className="text-[#F59E0B]">sebinsebin180606@gmail.com</strong>. Sebin will review and reply to your email shortly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-2xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>

                  <a
                    href={`mailto:sebinsebin180606@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Follow-up')}&body=${encodeURIComponent(`Hi Sebin,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-semibold bg-gradient-to-r from-red-600 to-rose-700 text-white hover:opacity-90 transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#EF4444] mb-1">Send a Message</h3>
                  <p className="text-xs text-slate-400">
                    Submissions deliver directly to <strong className="text-red-400 font-mono">sebinsebin180606@gmail.com</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. AI Internship / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Sebin, we would love to discuss an AI Engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-101 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending message to sebinsebin180606@gmail.com...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Sebin S</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

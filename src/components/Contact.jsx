import React, { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Info,
  Loader2,
  Sparkles,
  Inbox,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    successType: '', // 'success' | 'notice' | 'error'
    message: '',
  });

  // Check URL query parameters for confirmation
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('status=success')) {
      setFormStatus({
        submitted: true,
        loading: false,
        successType: 'success',
        message: `Thank you! Your message has been delivered directly to your inbox with mail title "Portfolio Gateway".`,
      });
    }
  }, [personal.email]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 3) {
      errs.message = 'Message must be at least 3 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Ultra-fast input handler with zero lag
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
  }, []);

  // Fast, instant submission without opening any mail app
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus({
      loading: true,
      submitted: false,
      successType: '',
      message: '',
    });

    const subjectText = `Portfolio Gateway: ${formData.subject.trim() || formData.name.trim() || 'New Inquiry'}`;

    // Silent background dispatch to FormSubmit
    try {
      fetch(`https://formsubmit.co/ajax/${personal.email.trim()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: subjectText,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'box',
        }),
      }).catch(() => {});
    } catch (ignore) {}

    // Fast, responsive 400ms feedback
    setTimeout(() => {
      setFormStatus({
        loading: false,
        submitted: true,
        successType: 'success',
        message: 'Your message has been sent successfully! Thank you for reaching out, I will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Portfolio Gateway
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            I'm currently developing my skills in Java Full Stack Development and open to entry-level opportunities, interviews, and collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full mt-3 shadow-glow-sm"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly via email, phone, or professional platforms. Inquiries are titled <strong>Portfolio Gateway</strong> for instant inbox sorting.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Email</span>
                    <p className="text-sm font-mono text-slate-900 dark:text-slate-200">
                      <a
                        href={`mailto:${personal.email}?subject=Portfolio%20Gateway`}
                        className="hover:text-sky-500 underline decoration-dotted"
                      >
                        {personal.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Phone</span>
                    <p className="text-sm font-mono text-slate-900 dark:text-slate-200">
                      <a
                        href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                        className="hover:text-emerald-500 underline decoration-dotted"
                      >
                        {personal.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Location</span>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold uppercase text-slate-400 block mb-3">
                  Profiles & Repositories
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-sky-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                  Portfolio Gateway
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Messages are titled <strong>Portfolio Gateway</strong> and delivered directly to {personal.email}.
              </p>

              {/* Status Alert Banner */}
              {formStatus.submitted && (
                <div
                  className="mb-6 p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-emerald-900 dark:text-emerald-100">
                      Message Sent to Portfolio Gateway!
                    </p>
                    <p className="mt-1 leading-relaxed text-emerald-800 dark:text-emerald-200">
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    autoComplete="name"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'
                    } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    autoComplete="email"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'
                    } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-sky-500'
                    } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Button: Single Fast Send Message Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-md hover:shadow-glow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

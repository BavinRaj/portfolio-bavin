import React, { useState, useEffect } from 'react';
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
  Inbox
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
    successType: '', // 'success' | 'error'
    message: '',
  });

  // Check URL query parameters for confirmation
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('status=success')) {
      setFormStatus({
        submitted: true,
        loading: false,
        successType: 'success',
        message: `Thank you! Your message has been sent directly to ${personal.email}.`,
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
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    setFormStatus({
      loading: true,
      submitted: false,
      successType: '',
      message: '',
    });

    // After submission dispatches to the invisible iframe
    setTimeout(() => {
      setFormStatus({
        loading: false,
        submitted: true,
        successType: 'success',
        message: `Message sent! Your inquiry has been forwarded directly to ${personal.email}. Please check your inbox (or Spam folder if it is the first time).`,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/60 dark:bg-[#0f172a]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            I'm currently developing my skills in Java Full Stack Development and I'm open to opportunities, collaborations, and interesting projects.
          </p>
          <div className="w-12 h-1 bg-sky-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#131d33] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Feel free to connect via email, phone, or professional platforms. All incoming inquiries will be forwarded directly to my inbox.
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
                        href={`mailto:${personal.email}`}
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

              {/* Direct Mail Option Card */}
              <div className="p-3.5 rounded-xl bg-sky-50/80 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-sky-700 dark:text-sky-300">
                  <Inbox className="w-4 h-4 text-sky-500" />
                  <span>Instant Mail Option</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Want to email directly without submitting the form?
                </p>
                <a
                  href={`mailto:${personal.email}?subject=Developer%20Opportunity&body=Hi%20Bavin,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20...`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Click here to open your Email App</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#131d33] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. Messages are forwarded directly to {personal.email}.
              </p>

              {/* Status Alert Banner */}
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-xl border text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200 ${
                    formStatus.successType === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200'
                  }`}
                >
                  {formStatus.successType === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {formStatus.successType === 'success' ? 'Message Sent!' : 'Notice'}
                    </p>
                    <p className="mt-1 leading-relaxed">{formStatus.message}</p>
                  </div>
                </div>
              )}

              {/* Hidden iframe for seamless non-reloading form delivery */}
              <iframe
                name="formsubmit_target"
                id="formsubmit_target"
                title="formsubmit_target"
                className="hidden"
                style={{ display: 'none' }}
              />

              <form
                action={`https://formsubmit.co/${personal.email.trim()}`}
                method="POST"
                target="formsubmit_target"
                onSubmit={handleFormSubmit}
                noValidate
                className="space-y-4"
              >
                {/* FormSubmit Configuration Fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_subject"
                  value={
                    formData.subject
                      ? `[Portfolio Contact] ${formData.subject}`
                      : `[Portfolio Contact] Message from ${formData.name || 'Visitor'}`
                  }
                />
                <input type="hidden" name="_replyto" value={formData.email} />

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

                {/* Subject (Optional) */}
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

                {/* Buttons row */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-md hover:shadow-glow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Send via Default Email App */}
                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(
                      `Hi Bavin,\n\n${formData.message || 'I would like to connect regarding an opportunity.'}\n\nFrom: ${
                        formData.name || 'Visitor'
                      } (${formData.email || 'Email'})`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                    title="Send using default desktop or phone mail app"
                  >
                    <Mail className="w-4 h-4 text-sky-500" />
                    <span>Email App</span>
                  </a>

                  {/* Send via Gmail Web in 1 click */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry – Bavin M'
                    )}&body=${encodeURIComponent(
                      `Hi Bavin,\n\n${formData.message || 'I would like to connect with you regarding an opportunity.'}\n\nRegards,\n${
                        formData.name || 'Visitor'
                      }\n${formData.email || ''}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 transition-colors"
                    title="Compose directly in Gmail Web"
                  >
                    <ExternalLink className="w-4 h-4 text-rose-500" />
                    <span>Open in Gmail</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

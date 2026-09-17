'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { siteConfig } from '@/config/site';

const budgetList = [
  'Less $5K',
  '$5K - $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K+',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10K - $25K',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.message.trim()) errors.message = 'Please tell us about your project';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Website Inquiry (${formData.budget})`,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again later.');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$10K - $25K',
        message: '',
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err: unknown) {
      setSubmitStatus('error');
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again later.';
      setErrorMessage(msg);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
              CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212] mb-3 sm:mb-4">
              Let’s Talk.
            </h2>
            <p className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed mb-6 sm:mb-8 max-w-[360px]">
              Got questions or ready to start your next digital project? Let’s bring your idea to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="bg-[#f0f2f5] p-4 sm:p-5 rounded-[20px] flex flex-col justify-between border border-gray-100 min-h-[120px] sm:min-h-[130px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#121212] shadow-xs">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ed1e3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#666666] uppercase tracking-wider mb-0.5">
                    /CHAT TO SALES
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xs sm:text-sm font-extrabold text-[#121212] hover:text-[#ed1e3a] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="bg-[#f0f2f5] p-4 sm:p-5 rounded-[20px] flex flex-col justify-between border border-gray-100 min-h-[120px] sm:min-h-[130px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#121212] shadow-xs">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ed1e3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#666666] uppercase tracking-wider mb-0.5">
                    /CALL US
                  </h4>
                  <a
                    href={`tel:${siteConfig.phoneNumber}`}
                    className="text-xs sm:text-sm font-extrabold text-[#121212] hover:text-[#ed1e3a] transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#121212] text-white p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight mb-6 sm:mb-8 leading-snug">
              Define your Goals and areas where <span className="text-[#ed1e3a]">Sanock®</span> can add value to your Business
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-[#1c1c1c] border border-neutral-800 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ed1e3a] transition-all"
                />
                {formErrors.name && <p className="text-xs text-[#ed1e3a] mt-1">{formErrors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className="w-full bg-[#1c1c1c] border border-neutral-800 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ed1e3a] transition-all"
                  />
                  {formErrors.email && <p className="text-xs text-[#ed1e3a] mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className="w-full bg-[#1c1c1c] border border-neutral-800 rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ed1e3a] transition-all"
                  />
                  {formErrors.phone && <p className="text-xs text-[#ed1e3a] mt-1">{formErrors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 sm:mb-3">
                  Estimated Budget *
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {budgetList.map((option) => {
                    const isSelected = formData.budget === option;
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData((prev) => ({ ...prev, budget: option }))}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#ed1e3a] text-white shadow-xs'
                            : 'bg-[#1c1c1c] text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-[#1c1c1c] border border-neutral-800 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ed1e3a] transition-all resize-none"
                />
                {formErrors.message && <p className="text-xs text-[#ed1e3a] mt-1">{formErrors.message}</p>}
              </div>

              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold bg-white text-[#121212] rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg group cursor-pointer"
                >
                  {submitStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      Submit Response
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ed1e3a] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs transition-transform duration-300 group-hover:translate-x-0.5">
                        <HiArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-medium">
                  ✓ Response submitted successfully! Our team will contact you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-medium">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

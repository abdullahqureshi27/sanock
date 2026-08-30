import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiXMark, HiBars3 } from 'react-icons/hi2';
import axios from 'axios';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#values' },
  {
    label: 'Core Services',
    href: '#services',
    subItems: [
      { label: 'Visual Identity & Logo', href: '#services' },
      { label: 'Website Design & Dev', href: '#services' },
      { label: 'UI/UX & App Design', href: '#services' },
    ],
  },
  { label: "FAQ's", href: '#faqs' },
  { label: 'Insights', href: '#work' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceOptions = [
  'Website Design & Development',
  'Visual Identity & Logo',
  'UI/UX & App Design',
  'Custom Web Application',
  'Website Maintenance & Support',
];

const budgetOptions = [
  'Less $5K',
  '$5K - $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K+',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [modalForm, setModalForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development',
    budget: '$10K - $25K',
    message: '',
  });
  const [modalStatus, setModalStatus] = useState('idle');
  const [modalError, setModalError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'services', 'work', 'values', 'process', 'faqs', 'contact'];
      const headerOffset = 260;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen || modalOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen, modalOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    setMenuOpen(false);
    setModalOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!modalForm.name.trim() || !modalForm.email.trim() || !modalForm.phone.trim()) {
      setModalError('Please fill in all required fields.');
      return;
    }
    setModalStatus('loading');
    setModalError('');

    try {
      await axios.post('/api/contact', {
        name: modalForm.name,
        email: modalForm.email,
        phone: modalForm.phone,
        subject: `Modal Inquiry: ${modalForm.service} (${modalForm.budget})`,
        message: modalForm.message || 'Submitted via Talk With Agents popup modal.',
      });
      setModalStatus('success');
      setModalForm({
        name: '',
        email: '',
        phone: '',
        service: 'Website Design & Development',
        budget: '$10K - $25K',
        message: '',
      });
      setTimeout(() => {
        setModalStatus('idle');
        setModalOpen(false);
      }, 3000);
    } catch (err) {
      setModalStatus('error');
      setModalError(err.response?.data?.message || 'Something went wrong. Please try again.');
      setTimeout(() => setModalStatus('idle'), 4000);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs'
            : 'bg-white/90 md:bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-3.5 sm:px-6 md:px-10 flex items-center justify-between h-[64px] sm:h-[76px]">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#BE1623] text-white flex items-center justify-center font-black text-sm sm:text-xl shadow-xs transition-transform duration-300 group-hover:scale-105">
              M
            </div>
            <span className="text-lg sm:text-2xl font-black tracking-tight text-[#121212] group-hover:text-[#BE1623] transition-colors">
              MANXEL
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Work', href: '#work' },
              { label: 'Values', href: '#values' },
              { label: 'Process', href: '#process' },
              { label: 'FAQs', href: '#faqs' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#121212] font-bold'
                    : 'text-[#4f4f4f] hover:text-[#121212]'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#BE1623] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold text-[#121212] bg-[#fdf2f4] border border-[#fecdd3] rounded-full hover:bg-[#fee2e2] transition-all duration-300 shadow-xs group cursor-pointer"
            >
              <span>Talk With Agents</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#BE1623] text-white flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
                <HiArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </span>
            </button>

            <a
              href="tel:+923001234567"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#BE1623] hover:bg-[#a5131e] text-white flex items-center justify-center shadow-xs transition-transform duration-300 hover:scale-105 shrink-0"
              aria-label="Call Now"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-[#121212] bg-[#f0f2f5] hover:bg-[#e4e7ec] rounded-full transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <HiBars3 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[350px] h-full bg-white text-[#000000] shadow-[0px_10px_50px_0px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between p-[15px] border-b border-[rgba(190,22,36,0.25)]">
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#BE1623] text-white flex items-center justify-center font-black text-xs">
                      M
                    </div>
                    <span className="font-extrabold text-lg tracking-tight text-[#121212]">MANXEL</span>
                  </a>

                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1 text-[#BE1623] hover:opacity-80 transition-opacity cursor-pointer"
                    aria-label="Close menu"
                  >
                    <svg width="18" height="18" viewBox="0 0 26.163 26.163">
                      <rect width="36" height="2.2" fill="#BE1623" transform="translate(0.707) rotate(45)"></rect>
                      <rect width="36" height="2.2" fill="#BE1623" transform="translate(0 25.456) rotate(-45)"></rect>
                    </svg>
                  </button>
                </div>

                <div className="p-[15px]">
                  <ul className="m-0 p-0 list-none mb-4">
                    {navItems.map((item) => (
                      <li key={item.label} className="border-b border-[rgba(190,22,36,0.25)]">
                        {item.subItems ? (
                          <div>
                            <button
                              onClick={() => setServicesOpen(!servicesOpen)}
                              className="w-full flex items-center justify-between py-[10px] text-[1.05rem] font-semibold text-[#000000] hover:text-[#BE1623] transition-colors cursor-pointer text-left"
                            >
                              <span>{item.label}</span>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 16 16"
                                className={`transition-transform duration-300 ${
                                  servicesOpen ? 'rotate-180' : ''
                                }`}
                              >
                                <path
                                  d="M13.8558 4L15 5.1898L8.76423 11.6704C8.66431 11.7748 8.54549 11.8577 8.41461 11.9143C8.28373 11.9709 8.14337 12 8.00162 12C7.85986 12 7.71951 11.9709 7.58863 11.9143C7.45775 11.8577 7.33893 11.7748 7.23901 11.6704L1 5.1898L2.14418 4.00112L8 10.0836L13.8558 4Z"
                                  fill="#000000"
                                />
                              </svg>
                            </button>
                            <AnimatePresence>
                              {servicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pb-[10px]"
                                >
                                  {item.subItems.map((sub) => (
                                    <a
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={(e) => handleNavClick(e, sub.href)}
                                      className="block py-[6px] px-[10px] text-[14px] text-[#4f4f4f] hover:text-[#BE1623] transition-colors border-b border-[rgba(190,22,36,0.15)] last:border-0"
                                    >
                                      {sub.label}
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="block py-[10px] text-[1.05rem] font-semibold text-[#000000] hover:text-[#BE1623] transition-colors"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center gap-[5px] hover:gap-[10px] transition-all duration-300 cursor-pointer group"
                    >
                      <span className="bg-[#BE1623] py-[10px] px-[22px] rounded-[60px] font-semibold border border-[#BE1623] text-[14px] text-white block">
                        Get A Quote
                      </span>
                      <span className="border border-[#BE1623] bg-[#BE1623] w-[40px] h-[40px] min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-white">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-[15px] border-t border-[rgba(190,22,36,0.15)] text-[12px] text-gray-500 flex items-center justify-between">
                <span>© {new Date().getFullYear()} Manxel Studio</span>
                <a href="tel:+923001234567" className="text-[#BE1623] font-bold">
                  +92 300 1234567
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-[760px] max-h-[92vh] bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-y-auto"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0f2f5] hover:bg-[#e2e5e9] text-[#121212] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <HiXMark className="w-5 h-5" />
              </button>

              <div className="mb-6 sm:mb-8 pr-8">
                <span className="text-xs font-bold text-[#BE1623] uppercase tracking-wider block mb-1.5">
                  Let’s Get Started
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight leading-tight">
                  This Could Be the Start of Something Incredible!
                </h3>
              </div>

              <form onSubmit={handleModalSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Full name *"
                      value={modalForm.name}
                      onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                      required
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus:border-[#BE1623]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email *"
                      value={modalForm.email}
                      onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                      required
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus:border-[#BE1623]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number *"
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                      required
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus:border-[#BE1623]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4f4f4f] mb-2">
                    Select Service *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setModalForm({ ...modalForm, service: srv })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          modalForm.service === srv
                            ? 'bg-[#BE1623] text-white shadow-xs'
                            : 'bg-[#f0f2f5] text-[#4f4f4f] hover:bg-[#e4e7ec]'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4f4f4f] mb-2">
                    Estimated Budget *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setModalForm({ ...modalForm, budget: b })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          modalForm.budget === b
                            ? 'bg-[#BE1623] text-white shadow-xs'
                            : 'bg-[#f0f2f5] text-[#4f4f4f] hover:bg-[#e4e7ec]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <textarea
                    rows="3"
                    placeholder="Tell us about Project..."
                    value={modalForm.message}
                    onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                    className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus:border-[#BE1623] resize-none"
                  />
                </div>

                {modalError && (
                  <p className="text-xs text-[#BE1623] font-medium">{modalError}</p>
                )}
                {modalStatus === 'success' && (
                  <p className="text-xs text-green-600 font-bold">✓ Thank you! We received your inquiry.</p>
                )}

                <button
                  type="submit"
                  disabled={modalStatus === 'loading'}
                  className="w-full py-3.5 sm:py-4 bg-[#121212] hover:bg-[#BE1623] text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                >
                  {modalStatus === 'loading' ? 'Submitting...' : 'Submit Response'}
                  <HiArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

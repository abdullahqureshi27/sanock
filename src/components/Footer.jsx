import { FaWhatsapp } from 'react-icons/fa';

const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'FAQS', href: '#faqs' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
];

export default function Footer() {
  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#0d0d0d] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 relative overflow-hidden w-full m-0 p-0 border-0">
        
        <img
          src="/assets/images/footerimage.webp"
          alt="footer glow"
          className="absolute bottom-0 right-0 pointer-events-none w-[700px] max-w-full h-[220px] object-cover object-right-bottom z-0 opacity-80"
        />

        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
            
            <div className="sm:col-span-2 lg:col-span-8">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, '#home')}
                className="inline-flex items-center gap-2.5 sm:gap-3 group mb-4 sm:mb-5"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#ed1e3a] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-md">
                  M
                </div>
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white group-hover:text-[#ed1e3a] transition-colors">
                  MANXEL
                </span>
              </a>
              <p className="text-xs sm:text-sm md:text-[16px] text-white/60 max-w-[460px] leading-relaxed mb-0">
                Manxel has successfully delivered impactful digital experiences and brand technology for forward-thinking companies, offering original concepts, fast delivery, and polished visuals.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs sm:text-sm md:text-[15px] text-white/50 mb-3 sm:mb-5 font-normal">
                /Navigation
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-base sm:text-lg font-semibold text-white hover:text-[#ed1e3a] transition-colors duration-200 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs sm:text-sm md:text-[15px] text-white/50 mb-3 sm:mb-5 font-normal">
                /Socials
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-semibold text-white hover:text-[#ed1e3a] transition-colors duration-200 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-10 sm:pt-16 text-xs sm:text-sm text-[#a1a1a1]">
            <p>©{new Date().getFullYear()} Manxel Studio</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0 flex items-end justify-center select-none pb-2">
          <span className="text-[clamp(40px,15vw,220px)] font-black tracking-[-0.04em] leading-none text-white/[0.035] select-none uppercase whitespace-nowrap">
            MANXEL
          </span>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ed1e3a] hover:bg-[#d3122c] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute right-14 sm:right-16 bg-[#121212] text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none border border-neutral-800">
            Chat With Us
          </span>
        </a>
      </div>
    </>
  );
}

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const clientLogos = [
  { name: 'GMS', src: '/assets/images/slides-logo1.svg', h: 'h-7 sm:h-9 md:h-10' },
  { name: 'GSK', src: '/assets/images/slides-logo2.svg', h: 'h-6 sm:h-7 md:h-8' },
  { name: 'Alpago Properties', src: '/assets/images/slides-logo3.svg', h: 'h-5 sm:h-6 md:h-6' },
  { name: 'S.S. Lootah Trading', src: '/assets/images/slides-logo4.svg', h: 'h-7 sm:h-8 md:h-9' },
  { name: 'The Tower Plaza Hotel', src: '/assets/images/slides-logo5.svg', h: 'h-7 sm:h-8 md:h-9' },
  { name: 'ADCP', src: '/assets/images/slides-logo6.svg', h: 'h-8 sm:h-10 md:h-12' },
];

const faqs = [
  {
    q: 'What is our approach to logo design?',
    a: 'Our process begins with brand discovery and strategy, ensuring every logo aligns with your business goals and audience.',
  },
  {
    q: 'What kind of design tasks can I request?',
    a: 'You can request custom logo designs, brand visual identities, modern websites, UI/UX design, app interfaces, and comprehensive digital brand systems.',
  },
  {
    q: 'Why do our logos build trust with customers?',
    a: 'A cohesive, professional, and strategically engineered visual identity instantly establishes credibility, enhances customer recall, and positions your brand with distinct market authority.',
  },
  {
    q: 'How is long-term brand growth considered in our designs?',
    a: 'We design with scalability in mind—ensuring visual assets translate seamlessly across future product lines, web apps, global campaigns, and changing digital platforms.',
  },
  {
    q: 'What role do brand values play in our logo design?',
    a: 'Your brand values dictate our color harmony, typography choices, and design architecture so your identity authentically resonates with your target demographic.',
  },
  {
    q: 'What value does our logo design bring to your business?',
    a: 'We deliver measurable business value through elevated perceived brand prestige, higher consumer trust, and clear competitive differentiation in crowded markets.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="faqs" className="bg-white overflow-hidden" ref={sectionRef}>
      <div className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-14 overflow-hidden w-full relative flex select-none border-b border-gray-100">
        <div className="flex items-center gap-[50px] sm:gap-[80px] md:gap-[110px] shrink-0 pr-[50px] sm:pr-[80px] md:pr-[110px] animate-infinite-scroll">
          {clientLogos.map((logo, idx) => (
            <div key={`l1-${idx}`} className="flex items-center justify-center shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`${logo.h} w-auto object-contain max-w-[130px]`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[50px] sm:gap-[80px] md:gap-[110px] shrink-0 pr-[50px] sm:pr-[80px] md:pr-[110px] animate-infinite-scroll" aria-hidden="true">
          {clientLogos.map((logo, idx) => (
            <div key={`l2-${idx}`} className="flex items-center justify-center shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`${logo.h} w-auto object-contain max-w-[130px]`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[50px] sm:gap-[80px] md:gap-[110px] shrink-0 pr-[50px] sm:pr-[80px] md:pr-[110px] animate-infinite-scroll" aria-hidden="true">
          {clientLogos.map((logo, idx) => (
            <div key={`l3-${idx}`} className="flex items-center justify-center shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`${logo.h} w-auto object-contain max-w-[130px]`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
              FAQ’S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212] mb-3 sm:mb-5">
              You Ask, <br />
              We Answer
            </h2>
            <p className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed max-w-[360px]">
              Everything you need to know about our design and engineering subscription services.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className={`p-4 sm:p-6 rounded-[18px] sm:rounded-[22px] cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#f0f2f5] shadow-xs'
                      : 'bg-[#f8f9fa] hover:bg-[#f0f2f5]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-[#121212] tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#ed1e3a] text-white' : 'bg-white text-[#121212]'
                    }`}>
                      <span className="text-base sm:text-lg font-bold leading-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 sm:pt-4 text-xs sm:text-sm md:text-[15px] text-[#4f4f4f] leading-relaxed border-t border-gray-200/60 mt-3 sm:mt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  {
    icon: '/assets/images/core-values-icon1.svg',
    title: 'Transparent Costs',
    desc: 'Clear design and engineering pricing with no hidden surprises or unexpected fees.',
    activeDots: 1,
  },
  {
    icon: '/assets/images/core-values-icon2.svg',
    title: 'Quick Delivery',
    desc: 'Concepts, interactive prototypes, and production updates delivered efficiently on time.',
    activeDots: 2,
  },
  {
    icon: '/assets/images/core-values-icon3.svg',
    title: 'Open Design Requests',
    desc: 'Submit ideas, refinements, and feature requests with flexible agile sprints.',
    activeDots: 3,
  },
  {
    icon: '/assets/images/core-values-icon4.svg',
    title: 'Organized Workflow',
    desc: 'Track project milestones, direct feedback, and sprint deliverables with total clarity.',
    activeDots: 4,
  },
  {
    icon: '/assets/images/core-values-icon5.svg',
    title: 'High-End Execution',
    desc: 'Digital products created with meticulous attention to detail, performance, and purpose.',
    activeDots: 5,
  },
  {
    icon: '/assets/images/core-values-icon6.svg',
    title: 'Creative Solutions',
    desc: 'We engineer digital systems that solve real identity, conversion, and growth challenges.',
    activeDots: 6,
  },
];

const steps = [
  {
    num: '01',
    title: 'Brand Discovery',
    desc: 'We understand your brand values, audience, goals, and vision to define a clear creative direction.',
  },
  {
    num: '02',
    title: 'Research & Insight',
    desc: 'Market research and competitor analysis inform strategic design decisions and positioning for long-term brand relevance.',
  },
  {
    num: '03',
    title: 'Concept Development',
    desc: 'Initial logo concepts and digital wireframes are explored through sketches aligning with brand purpose, vision, and identity.',
  },
  {
    num: '04',
    title: 'Design Refinement',
    desc: 'Selected concepts are refined with precision and clarity to ensure consistency, scalability, usability, and strength.',
  },
  {
    num: '05',
    title: 'Feedback & Iteration',
    desc: 'Your feedback guides collaborative revisions, improving and finalizing the design thoughtfully, efficiently, and with purpose.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [isProcessHovered, setIsProcessHovered] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="values" className="py-12 sm:py-16 md:py-24 bg-white" ref={sectionRef}>
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
                CORE VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212]">
                The Value You Get
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed max-w-[420px]"
            >
              Clarity in cost, speed in delivery, and thoughtful design that helps brands stand out and leave a lasting impression.
            </motion.p>
          </div>

          <div className="bg-[#f0f2f5] p-3 sm:p-6 md:p-8 rounded-[28px] sm:rounded-[36px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  className="bg-white p-5 sm:p-6 md:p-7 rounded-[20px] sm:rounded-[24px] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <img src={v.icon} alt={v.title} className="w-8 h-8 sm:w-9 sm:h-9" />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 6 }).map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            dotIdx < v.activeDots
                              ? 'bg-[#ed1e3a]'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#121212] tracking-tight mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4f4f4f] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        id="process"
        onMouseEnter={() => setIsProcessHovered(true)}
        onMouseLeave={() => setIsProcessHovered(false)}
        className={`py-12 sm:py-16 md:py-24 border-t transition-all duration-700 ease-in-out cursor-default ${
          isProcessHovered
            ? 'bg-[#000000] border-neutral-900 text-white'
            : 'bg-[#f8f9fa] border-gray-100 text-[#121212]'
        }`}
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
          
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5 transition-colors duration-500 ${
                  isProcessHovered
                    ? 'bg-neutral-800 text-white border border-neutral-700'
                    : 'bg-[#121212] text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
                WORKFLOW
              </span>

              <h2
                className={`text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-3 sm:mb-5 transition-colors duration-500 ${
                  isProcessHovered ? 'text-white' : 'text-[#121212]'
                }`}
              >
                The Action Behind <span className="text-[#ed1e3a]">Process</span>
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-[380px] transition-colors duration-500 ${
                  isProcessHovered ? 'text-gray-300' : 'text-[#4f4f4f]'
                }`}
              >
                A disciplined, iterative methodology engineered to bring clarity, velocity, and high impact to every client engagement.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`p-5 sm:p-7 rounded-[20px] sm:rounded-[24px] border shadow-xs flex items-start gap-4 sm:gap-6 transition-all duration-500 ${
                    isProcessHovered
                      ? 'bg-[#141414] border-neutral-800 text-white hover:bg-[#1a1a1a]'
                      : 'bg-white border-gray-200/70 text-[#121212] hover:shadow-md'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-black text-[#ed1e3a] tracking-tight shrink-0 font-mono">
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-extrabold tracking-tight mb-1.5 transition-colors duration-500 ${
                        isProcessHovered ? 'text-white' : 'text-[#121212]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${
                        isProcessHovered ? 'text-gray-300' : 'text-[#4f4f4f]'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md">
                <div className="bg-[#121212] text-white p-5 sm:p-7 flex items-start gap-4 sm:gap-6 border border-neutral-800">
                  <span className="text-2xl sm:text-3xl font-black text-[#ed1e3a] tracking-tight shrink-0 font-mono">
                    06
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight mb-1.5">
                      Final Delivery
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      The final design systems and digital assets are delivered in multiple production formats for seamless digital and print execution.
                    </p>
                  </div>
                </div>

                <div className="bg-[#ed1e3a] text-white py-3.5 sm:py-4 px-6 flex items-center justify-between">
                  <img
                    src="/assets/images/action-icon.svg"
                    alt="Star Icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow"
                  />
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-widest hover:underline"
                  >
                    Get Started
                  </a>
                  <img
                    src="/assets/images/action-icon.svg"
                    alt="Star Icon"
                    className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

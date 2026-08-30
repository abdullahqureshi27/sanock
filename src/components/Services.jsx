import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: '/assets/images/what-we-do-icon1.svg',
    title: 'Visual Identity',
    desc: 'Elevate your identity: sharp positioning, cohesive visuals, real impact.',
    tags: ['Logo Design', 'Brand Recognition', 'Distinct Signatures'],
    image: '/assets/images/what-we-deo-01.webp',
  },
  {
    icon: '/assets/images/what-we-do-icon2.svg',
    title: 'Web Design',
    desc: 'We design modern websites that combine usability, performance, and visual clarity across all devices.',
    tags: ['Brand Alignment', 'Strategic Clarity', 'Purpose Driven'],
    image: '/assets/images/what-we-deo-02.webp',
  },
  {
    icon: '/assets/images/what-we-do-icon3.svg',
    title: 'App Design',
    desc: 'We create intuitive app interfaces that deliver seamless user experiences and functional digital interactions.',
    tags: ['Unified Presence', 'Visual Cohesion', 'Cross Platform'],
    image: '/assets/images/what-we-deo-03.webp',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212]">
              What We Do
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed max-w-[400px]"
          >
            We build the visual foundation every strong brand needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-[#f0f2f5] p-2.5 sm:p-3 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-white rounded-[20px] sm:rounded-[26px] p-5 sm:p-6 sm:min-h-[290px] flex flex-col justify-between">
                <div>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6"
                  />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#121212] tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f4f4f] leading-relaxed mb-4 sm:mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-gray-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#f0f2f5] text-[10px] sm:text-xs font-semibold text-[#121212]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a] shrink-0"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] sm:rounded-[26px] overflow-hidden mt-2.5 sm:mt-3 aspect-[16/11] sm:aspect-[4/3] bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

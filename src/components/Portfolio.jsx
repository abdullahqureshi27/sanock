import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  { title: 'EGR', category: 'Logo Design', image: '/assets/images/featured-work-06.webp' },
  { title: 'Babylon Vision Properties', category: 'Logo Design', image: '/assets/images/featured-work-01.webp' },
  { title: 'Al Tariq Perfume', category: 'Logo Design', image: '/assets/images/featured-work-02.webp' },
  { title: 'V&CO Real Estate', category: 'Logo Design', image: '/assets/images/featured-work-04.webp' },
  { title: 'Rhythmic', category: 'Logo Design', image: '/assets/images/featured-work-08.webp' },
  { title: 'Asta Clinic', category: 'Logo Design', image: '/assets/images/featured-work-05.webp' },
  { title: 'West Asia Project Solution', category: 'Logo Design', image: '/assets/images/featured-work-03.webp' },
  { title: 'K2M Pro', category: 'Logo Design', image: '/assets/images/featured-work-07.webp' },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="work" className="py-12 sm:py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212]">
              Featured Work
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed max-w-[420px]"
          >
            A glimpse into brands we helped elevate with clarity and purposeful logo design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.05 }}
              className="relative rounded-[22px] sm:rounded-[30px] overflow-hidden bg-[#f0f2f5] group shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 ease-out md:group-hover:scale-105 md:group-hover:blur-[3px]"
                />
              </div>

              <div className="absolute inset-x-3.5 sm:inset-x-6 bottom-3.5 sm:bottom-6 p-4 sm:p-5 rounded-[18px] sm:rounded-[22px] bg-white shadow-xl flex items-center justify-between gap-4 transition-all duration-400 ease-out translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#121212] tracking-tight leading-snug truncate">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-normal text-[#777777] block mt-0.5">
                    {project.category}
                  </span>
                </div>

                <div className="shrink-0">
                  <img
                    src="/assets/images/featured-icon.svg"
                    alt="Featured Link"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-[8px]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiCheckBadge } from 'react-icons/hi2';

const clientReviews = [
  {
    video: '/assets/videos/video-01.mp4',
    name: 'Haitham Galal',
    company: 'Tower Plaza',
    avatar: 'H',
  },
  {
    video: '/assets/videos/video-02.mp4',
    name: 'Huzefa Vorajee',
    company: 'Evolve Tax',
    avatar: 'HV',
  },
  {
    video: '/assets/videos/video-03.mp4',
    name: 'Abdul Latif',
    company: 'Veneto Clinic',
    avatar: 'AL',
  },
  {
    video: '/assets/videos/video-04.mp4',
    name: 'Victor',
    company: 'Alpha Omega Traders',
    avatar: 'V',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] text-white text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1e3a]"></span>
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212]">
              The Choice of Top Brands
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed max-w-[400px]"
          >
            Real video feedback from founders, executives, and leaders who partner with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clientReviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-[#f0f2f5] p-3.5 sm:p-5 rounded-[22px] sm:rounded-[28px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121212] text-white flex items-center justify-center font-black text-xs shadow-xs">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#121212] tracking-tight">{review.name}</h4>
                      <HiCheckBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ed1e3a]" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-[#666666]">{review.company}</p>
                  </div>
                </div>

                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ed1e3a] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>

              <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden aspect-[4/3] bg-black shadow-inner">
                <video
                  src={review.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
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

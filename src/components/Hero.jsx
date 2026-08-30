import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const stats = [
  { value: '19', suffix: '+', label: 'Years Experience' },
  { value: '800', suffix: '+', label: 'Clients Served' },
  { value: '80', suffix: '+', label: 'Dedicated Team' },
  { value: '400', suffix: '+', label: 'Projects Delivered' },
];

const videosColumn1 = [
  '/assets/videos/video-01.mp4',
  '/assets/videos/video-02.mp4',
  '/assets/videos/video-03.mp4',
  '/assets/videos/video-04.mp4',
];

const videosColumn2 = [
  '/assets/videos/video-03.mp4',
  '/assets/videos/video-04.mp4',
  '/assets/videos/video-01.mp4',
  '/assets/videos/video-02.mp4',
];

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f4] border border-[#fecdd3] text-[#121212] text-xs sm:text-[13px] font-semibold tracking-tight">
                <span className="w-2 h-2 rounded-full bg-[#ed1e3a] animate-pulse"></span>
                <span>Join <strong className="text-[#ed1e3a] font-extrabold">1000+</strong> Happy Clients today!</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.2rem,4vw,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#121212] mb-3 sm:mb-4"
            >
              Shaping Bold Brands For The <span className="text-[#666666]">Digital Age.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#4f4f4f] leading-relaxed mb-6 sm:mb-8 max-w-[440px]"
            >
              We Design impactful logos and digital identities for modern brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, '#services')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white bg-[#ed1e3a] hover:bg-[#d3122c] rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Our Services</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#ed1e3a] flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
                  <HiArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#121212] bg-[#f0f2f5] hover:bg-[#e4e7ec] border border-gray-200 rounded-full transition-all duration-300 group"
              >
                <span>Book Free Call</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#121212] text-white flex items-center justify-center text-xs shadow-xs transition-transform group-hover:translate-x-0.5">
                  <HiArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
            >
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f0f2f5] p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] text-center border border-gray-100 flex flex-col justify-center min-h-[86px] sm:min-h-[96px]"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-[#121212] tracking-tight leading-none mb-1">
                    {item.value} <span className="text-[#ed1e3a]">{item.suffix}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-semibold text-[#666666] leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

          <div className="lg:col-span-7 relative mt-6 lg:mt-0">
            <div className="relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[640px] overflow-hidden">
              
              <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

              <div className="grid grid-cols-2 gap-3 sm:gap-5 h-full max-w-[580px] ml-auto">
                
                <div className="overflow-hidden relative h-full">
                  <div className="flex flex-col gap-3 sm:gap-5 animate-marquee-up">
                    {[...videosColumn1, ...videosColumn1].map((src, i) => (
                      <div
                        key={`col1-${i}`}
                        className="rounded-[20px] sm:rounded-[28px] overflow-hidden aspect-[9/15] bg-black shadow-lg shrink-0 border border-gray-100"
                      >
                        <video
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden relative h-full pt-6 sm:pt-10">
                  <div className="flex flex-col gap-3 sm:gap-5 animate-marquee-down">
                    {[...videosColumn2, ...videosColumn2].map((src, i) => (
                      <div
                        key={`col2-${i}`}
                        className="rounded-[20px] sm:rounded-[28px] overflow-hidden aspect-[9/15] bg-black shadow-lg shrink-0 border border-gray-100"
                      >
                        <video
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

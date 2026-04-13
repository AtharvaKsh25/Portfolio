import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden px-[2rem] md:px-[4rem]">
      
      {/* Background Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-text-main rounded-[40%_60%_70%_30%] blur-[80px] md:blur-[120px] pointer-events-none opacity-40 mix-blend-overlay"
      />

      {/* Top Left Text */}
      <div className="absolute top-[2rem] left-[2rem] md:top-[3rem] md:left-[4rem] text-small">
        B.E. AI & DS '26
      </div>

      {/* Top Right Icon (Theme pointer) */}
      <div className="absolute top-[2rem] right-[2rem] md:top-[3rem] md:right-[4rem] cursor-pointer" onClick={toggleTheme}>
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted hover:text-text-main transition-colors"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted hover:text-text-main transition-colors"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        )}
      </div>

      {/* Central Huge Typography */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-start justify-center mt-[-4rem]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-huge m-0 text-text-main font-display tracking-tighter leading-[0.85] mix-blend-difference">
            ATHARVA<br />
            KSHIRSAGAR
          </h1>
        </motion.div>
      </div>

      {/* Bottom Right Description text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute right-[2rem] md:right-[4rem] bottom-[8rem] md:bottom-[6rem] max-w-xs md:max-w-sm text-gray-300 font-sans text-sm md:text-base leading-relaxed hidden sm:block"
      >
        DevOps & Cloud Intern with hands-on experience in AWS architecture design, CI/CD automation, and reliable infrastructure management.
      </motion.div>

      {/* Bottom Interface HUD */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-[2rem] left-[2rem] md:bottom-[3rem] md:left-[4rem] right-[2rem] md:right-[4rem] flex justify-between items-end"
      >
        <div className="flex gap-4 text-small">
          <a href="/RESUME11.pdf" target="_blank" rel="noreferrer" download className="hover:text-text-main transition-colors">
            RESUME
          </a>
          <span>/</span>
          <a href="https://github.com/AtharvaKsh25" target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors">
            GITHUB
          </a>
          <span>/</span>
          <a href="https://linkedin.com/in/AtharvaKshirsagar" target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors">
            LINKEDIN
          </a>
        </div>

        <a href="#about" className="text-small hover:text-text-main transition-colors flex items-center gap-2">
          SCROLL TO EXPLORE <span className="animate-bounce">↓</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

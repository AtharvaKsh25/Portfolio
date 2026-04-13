import { motion } from 'framer-motion';

const Navbar = () => {
  const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference px-[1rem] md:px-[2rem]">
      <div className="max-w-[1400px] mx-auto py-6 flex justify-between items-center text-text-main">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter uppercase"
        >
          <a href="#">Atharva.dev</a>
        </motion.div>
        
        <div className="hidden md:flex gap-10">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-small hover:opacity-70 transition-opacity"
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

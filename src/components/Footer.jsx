import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-[1rem] md:px-[2rem] border-t border-border-base bg-bg-dark relative z-10">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-small">
          © {new Date().getFullYear()} Atharva Kshirsagar. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/AtharvaKsh25" className="text-text-muted hover:text-text-main transition-colors p-3 border border-transparent hover:border-border-hover rounded-full">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/atharva-kshirsagar-4449b4259/" className="text-text-muted hover:text-text-main transition-colors p-3 border border-transparent hover:border-border-hover rounded-full">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

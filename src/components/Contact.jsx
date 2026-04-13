import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen relative px-[1rem] md:px-[2rem] py-24 flex flex-col justify-center border-t border-border-base">
      <div className="max-w-[1400px] mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-small mb-8">What's Next?</span>
          
          <h2 className="text-huge mb-16 uppercase">
            Let's Talk
          </h2>
          
          <p className="text-medium text-text-muted max-w-2xl mb-16 leading-relaxed">
            I'm always open to discussing new opportunities, infrastructure projects, or tech collaborations. Hit me up.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:kshirsagaratharva250@gmail.com"
              className="btn-primary"
            >
              Say Hello
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a 
              href="tel:+918668600273"
              className="p-4 border border-border-hover hover:border-white transition-colors flex items-center justify-center font-display text-text-main"
            >
              +91 8668600273
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

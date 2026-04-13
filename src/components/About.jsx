import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen relative px-[1rem] md:px-[2rem] py-24 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-12 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-large"
          >
            About
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 space-y-6 text-text-muted text-medium leading-relaxed"
        >
          <p>
            I am a DevOps/SRE Engineer and a final year student pursuing a B.E. in Artificial Intelligence & Data Science at Dr. D. Y. Patil Institute of Technology.
          </p>
          <p>
            Currently working as a Technical Intern at IAMOPS, I specialize in designing and managing scalable cloud infrastructures on AWS, building robust CI/CD pipelines, and ensuring system reliability through advanced monitoring and observability stacks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 md:col-start-8"
        >
          <h3 className="text-small mb-6 text-text-main pb-4 border-b border-border-base">Core Competencies</h3>
          <ul className="space-y-4 font-sans text-lg text-gray-300">
            {[
              "AWS Cloud Architecture",
              "DevOps & CI/CD Pipelines",
              "Docker Containerization",
              "Observability & Monitoring",
              "Python & Data Science"
            ].map((area, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-text-main rounded-full"></span> {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

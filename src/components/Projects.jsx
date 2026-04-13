import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AWS 3-Tier Architecture Deployment",
      description: "Designed and deployed a 3-tier architecture (frontend, backend, database) on AWS. Containerized components using Docker and developed CI/CD pipelines with Jenkins/GitHub Actions. Managed RDS, ECR, and set up Prometheus/Grafana for monitoring, along with VPC networking and security groups.",
      techStack: ["AWS S3/ECS/RDS", "Docker", "Jenkins & GitHub Actions", "Prometheus & Grafana"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Jarvis - Intelligent Chatbot",
      description: "Developed an intelligent chatbot using Python, NLP (NLTK, TensorFlow), and WhatsApp API to automate daily tasks, reminders, and information retrieval. Integrated emotion-aware responses and voice I/O accessibility features.",
      techStack: ["Python", "Machine Learning", "NLTK & TensorFlow", "WhatsApp API"],
      github: "https://github.com/AtharvaKsh25/Jarvis",
      demo: "https://demo.com"
    },
    {
      title: "AI-Powered Trading Bot",
      description: "Participated in a Hackathon to build an AI-powered trading bot, leveraging machine learning algorithms to analyze market trends and execute informed trades.",
      techStack: ["Python", "Pandas", "Machine Learning", "API Integration"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative px-[1rem] md:px-[2rem] py-24 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-end justify-between border-b border-border-base pb-8"
        >
          <h2 className="text-large m-0">Projects</h2>
          <span className="text-small hidden md:block">Selected Works</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid md:grid-cols-12 gap-8 items-center border border-border-base p-8 md:p-16 hover:bg-text-main/5 transition-colors"
            >
              <div className="md:col-span-8 flex flex-col justify-center">
                <h3 className="text-medium font-bold mb-6 text-text-main group-hover:text-text-muted transition-colors uppercase font-display">{project.title}</h3>
                <p className="text-text-muted text-lg mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 font-sans text-sm text-gray-300 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 border border-border-base rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-4 flex md:justify-end gap-6 items-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 border border-border-hover hover:border-white transition-colors rounded-full text-text-main">
                  <FaGithub size={24} />
                </a>
                {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 border border-border-hover hover:bg-text-main hover:text-black transition-colors rounded-full text-text-main">
                  <ExternalLink size={24} />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

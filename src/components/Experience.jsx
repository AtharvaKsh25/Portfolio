import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[1rem] md:px-[2rem]">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-border-base pb-8 flex items-end justify-between"
        >
          <h2 className="text-large m-0">Experience</h2>
          <span className="text-small hidden md:block">Career</span>
        </motion.div>

        <div className="flex flex-col mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border-base hover:bg-text-main/5 px-4 transition-colors"
          >
            <div className="md:col-span-3">
              <div className="text-small mb-2">IAMOPS</div>
              <div className="text-text-muted font-mono text-sm">Jan 2026 - Present</div>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-medium font-bold mb-4 text-text-main uppercase font-display">DevOps/SRE Engineer (Technical Intern)</h3>
              <ul className="space-y-3 text-text-muted text-lg leading-relaxed">
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Deployed and managed applications on AWS (EC2, ECS, S3, VPC).</li>
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Built CI/CD pipelines using Jenkins and GitHub Actions.</li>
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Containerized applications using Docker and managed images via ECR.</li>
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Implemented monitoring using Prometheus, Grafana, and New Relic.</li>
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Configured uptime monitoring and alerting systems securely via NAT.</li>
              </ul>
              
              <div className="mt-8 flex">
                <a href="https://github.com/AtharvaKsh25/devops-sre-showcase" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-text-main transition-colors border border-border-hover px-5 py-2.5 rounded-full hover:bg-text-main/5">
                  <FaGithub size={16} /> View Showcase Repository
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border-base hover:bg-text-main/5 px-4 transition-colors"
          >
            <div className="md:col-span-3">
              <div className="text-small mb-2">Arise Vishwa Society</div>
              <div className="text-text-muted font-mono text-sm">Jan 2025 - Feb 2025</div>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-medium font-bold mb-4 text-text-main uppercase font-display">App Development Intern</h3>
              <ul className="space-y-3 text-text-muted text-lg leading-relaxed">
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Developed a comprehensive student application emphasizing social responsibility.</li>
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Integrated external APIs and managed version control collaboratively via GitHub.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-border-base hover:bg-text-main/5 px-4 transition-colors"
          >
            <div className="md:col-span-3">
              <div className="text-small mb-2">Godrej</div>
              <div className="text-text-muted font-mono text-sm">Sep 2024 - Oct 2024</div>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-medium font-bold mb-4 text-text-main uppercase font-display">Data Analytics Intern</h3>
              <ul className="space-y-3 text-text-muted text-lg leading-relaxed">
                <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-text-main rounded-full flex-shrink-0"></span> Handled data visualization and internal educational analytics using Power BI.</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-border-base pb-8 flex items-end justify-between"
        >
          <h2 className="text-large m-0">Education</h2>
          <span className="text-small hidden md:block">Academics</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="border border-border-base p-8 hover:bg-text-main/5 transition-colors">
            <div className="text-small mb-4 text-text-muted">2026 Expected</div>
            <h3 className="text-xl font-bold text-text-main uppercase font-display mb-2">B.E. in AI & Data Science</h3>
            <p className="text-text-muted font-sans">Dr. D. Y. Patil Institute of Technology<br/>CGPA: 8.80 / 10</p>
          </motion.div>
          
          <motion.div className="border border-border-base p-8 hover:bg-text-main/5 transition-colors">
            <div className="text-small mb-4 text-text-muted">2022</div>
            <h3 className="text-xl font-bold text-text-main uppercase font-display mb-2">12th Grade (HSC)</h3>
            <p className="text-text-muted font-sans">Gayatri English Medium School & Jr College<br/>Percentage: 88.17%</p>
          </motion.div>
          
          <motion.div className="border border-border-base p-8 hover:bg-text-main/5 transition-colors">
            <div className="text-small mb-4 text-text-muted">2020</div>
            <h3 className="text-xl font-bold text-text-main uppercase font-display mb-2">10th Grade (CBSE)</h3>
            <p className="text-text-muted font-sans">Priyadarshini High School<br/>Percentage: 88.00%</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

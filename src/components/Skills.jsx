import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    { title: "Cloud", skills: "AWS (EC2, S3, RDS, ECS, ECR, Lambda, VPC)" },
    { title: "DevOps", skills: "Docker, Jenkins, GitHub Actions, Agile, Scrum" },
    { title: "Monitoring", skills: "Prometheus, Grafana, New Relic, Uptime Robot" },
    { title: "Infra & Sys", skills: "Linux, Networking (Subnets, Security Groups, NAT)" },
    { title: "Programming", skills: "Python, Pandas, SQL, OOP, API Development" }
  ];

  return (
    <section id="skills" className="py-24 relative px-[1rem] md:px-[2rem]">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-border-base pb-8 flex items-end justify-between"
        >
          <h2 className="text-large m-0">Skills</h2>
          <span className="text-small hidden md:block">Toolkit</span>
        </motion.div>

        <div className="flex flex-col">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-border-base hover:bg-text-main/5 px-4 transition-colors"
            >
              <div className="md:col-span-3 text-medium uppercase font-display">{category.title}</div>
              <div className="md:col-span-9 text-lg text-text-muted font-sans">{category.skills}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

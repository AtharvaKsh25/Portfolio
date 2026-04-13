import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { name: "AWS Cloud Essentials", status: "Certified", desc: "Covers Core Networking, Compute, S3 Storage, Databases & Security." },
    { name: "AWS Knowledge: Serverless", status: "Certified", desc: "Proficiency in API Gateway and AWS Lambda." },
    { name: "AWS Knowledge: Events & Workflows", status: "Certified", desc: "Proficiency in EventBridge, SNS, SQS." },
    { name: "AWS Networking Core", status: "Certified", desc: "Amazon VPC, Route 53 setup and cloud networking." },
    { name: "Machine Learning", status: "Certified", desc: "Expertise in Regression and Classification." },
    { name: "Best Communicator Award", status: "Award", desc: "Recognized for confidence and excellent communication." }
  ];

  return (
    <section id="certifications" className="py-24 relative px-[1rem] md:px-[2rem]">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-border-base pb-8 flex items-end justify-between"
        >
          <h2 className="text-large m-0">Leadership & Certs</h2>
          <span className="text-small hidden md:block">Accolades</span>
        </motion.div>

        {/* Positions of Responsibility */}
        <div className="mb-20">
          <h3 className="text-medium font-bold text-text-main uppercase font-display mb-8">Positions of Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="border border-border-base p-8 hover:bg-text-main/5 transition-colors">
              <h4 className="text-xl font-bold text-text-main mb-2">Event Manager</h4>
              <div className="text-small mb-4 text-blue-400">Sanskriti Club</div>
              <p className="text-text-muted font-sans text-sm leading-relaxed">
                Led logistics, budgeting, and coordination for cultural events, fostering teamwork and strong communication under pressure.
              </p>
            </motion.div>
            <motion.div className="border border-border-base p-8 hover:bg-text-main/5 transition-colors">
              <h4 className="text-xl font-bold text-text-main mb-2">Vice President</h4>
              <div className="text-small mb-4 text-green-400">Byteminds Society</div>
              <p className="text-text-muted font-sans text-sm leading-relaxed">
                Organized technical events, AI seminars, and coding challenges while mentoring junior members and maintaining department inclusivity.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Certifications List */}
        <h3 className="text-medium font-bold text-text-main uppercase font-display mb-8">Certifications & Awards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-border-base p-8 hover:bg-text-main/5 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-small mb-4 text-text-muted">{cert.status}</div>
                <h3 className="text-lg font-bold text-text-main uppercase font-display mb-4 group-hover:text-text-muted transition-colors">
                  {cert.name}
                </h3>
              </div>
              <p className="text-text-muted font-sans text-sm">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

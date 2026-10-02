import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading label="02 / Technical stack" title="What I build with" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={grid}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                data-cursor-hover
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/40 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-medium text-text">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                  {cat.description}
                </p>
                <p className="mt-3 font-mono text-xs text-accent-green font-medium">{cat.level}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-text-muted bg-bg/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

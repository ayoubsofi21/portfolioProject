import { motion } from "framer-motion";
import { experience } from "../data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Experience() {
  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-semibold"
        >
          My journey
        </motion.h2>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <ul className="space-y-10">
            {experience.map((step, i) => (
              <motion.li
                key={step.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent" />
                <p className="font-mono text-xs text-text-muted">{step.period}</p>
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <h3 className="text-text font-medium">{step.title}</h3>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      step.type === "education"
                        ? "border-accent-blue/40 text-accent-blue"
                        : "border-accent-green/40 text-accent-green"
                    }`}
                  >
                    {step.type === "education" ? "Education" : "Work"}
                  </span>
                </div>
                {step.place && (
                  <p className="mt-0.5 text-sm text-text-secondary">{step.place}</p>
                )}
                {step.description && (
                  <p className="mt-1.5 text-sm text-text-secondary leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

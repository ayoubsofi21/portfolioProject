import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading label="03 / Selected work" title="Selected projects" italicWord="projects" />
        </motion.div>

        <div className="mt-14 grid gap-6">
          {featured && (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <ProjectCard project={featured} featured onOpen={setActiveProject} />
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <ProjectCard project={project} onOpen={setActiveProject} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-2xl border border-border bg-card p-8 max-h-[85vh] overflow-y-auto shadow-2xl shadow-black/20 dark:shadow-black/60"
            >
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 text-text-secondary hover:text-text"
              >
                <X size={18} />
              </button>

              <p className="font-mono text-xs text-text-muted">{activeProject.number}</p>
              <h3 className="mt-1 text-2xl font-medium text-text">{activeProject.title}</h3>
              <span
                className={`inline-block mt-2 text-[10px] font-mono px-2 py-1 rounded-full border ${
                  activeProject.status === "Completed"
                    ? "border-accent-green/40 text-accent-green"
                    : "border-accent-blue/40 text-accent-blue"
                }`}
              >
                {activeProject.status}
              </span>

              <p className="mt-5 text-sm text-text-secondary leading-relaxed">
                {activeProject.description}
              </p>

              <div className="mt-5">
                <p className="font-mono text-xs text-text-muted mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center gap-5">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent transition-colors"
                >
                  <GithubIcon size={16} /> View Code
                </a>
                {activeProject.demo && (
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

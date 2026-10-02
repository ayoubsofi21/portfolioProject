import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

function AbstractVisual({ seed = 0 }) {
  return (
    <div className="relative w-full h-full min-h-[180px] overflow-hidden rounded-xl bg-gradient-to-br from-card to-bg-secondary border border-border">
      <div
        className="absolute w-40 h-40 rounded-full bg-accent/20 blur-2xl"
        style={{
          top: `${10 + seed * 8}%`,
          left: `${20 + seed * 6}%`,
        }}
      />

      <div
        className="absolute w-28 h-28 rounded-full bg-accent-green/15 blur-2xl"
        style={{
          bottom: `${8 + seed * 5}%`,
          right: `${15 + seed * 4}%`,
        }}
      />

      <div className="absolute inset-0 bg-grid opacity-40" />
    </div>
  );
}

function ProjectCard({ project, featured = false, onOpen }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      data-cursor-hover
      className={`group rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 transition-all ${
        featured ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      {/* PROJECT IMAGE */}
      <div
        className={`relative overflow-hidden bg-bg-secondary ${
          featured ? "h-64 md:h-full min-h-[320px]" : "h-52"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <AbstractVisual seed={project.id} />
        )}
      </div>

      {/* PROJECT CONTENT */}
      <div className="p-6 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-text-muted">
              {project.number}
            </p>

            <h3 className="mt-1 text-lg font-medium text-text">
              {project.title}
            </h3>
          </div>

          <span
            className={`shrink-0 text-[10px] font-mono px-2 py-1 rounded-full border ${
              project.status === "Completed"
                ? "border-accent-green/40 text-accent-green"
                : "border-accent-blue/40 text-accent-blue"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
          >
            <GithubIcon size={15} />
            Code
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}

          <button
            onClick={() => onOpen(project)}
            className="ml-auto inline-flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all"
          >
            Details
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
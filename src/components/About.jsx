import { motion } from "framer-motion";
import { Mail, ArrowUpRight, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-accent-green/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-6 flex flex-col justify-center"
        >
        

          <motion.p
            variants={item}
            className="mt-0 text-text-secondary"
          >
            Hello, I&apos;m Ayoub Sofi
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Full Stack
            <br />

            <span className="bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-sm text-text-muted"
          >
            Laravel • React • PHP • MySQL
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 text-text-secondary max-w-xl leading-relaxed"
          >
            I design and build modern, scalable web applications with clean
            architecture, intuitive interfaces, and reliable backend systems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/assets/Ayoub_Sofi_CV.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text hover:border-accent/50 transition-colors"
            >
              Download CV
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="https://github.com/ayoubsofi21"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
            >
              <GithubIcon size={16} />
              GitHub
              <ArrowUpRight size={12} />
            </a>

            <a
              href="https://www.linkedin.com/in/ayoub-sofi-72895a290/"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
            >
              <LinkedinIcon size={16} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>

            <a
              href="mailto:ayoubsofi03@gmail.com"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text transition-colors"
            >
              <Mail size={16} />
              Email
              <ArrowUpRight size={12} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="md:col-span-6 flex justify-center md:justify-end w-full"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-none">
            
            {/* Decorative border */}
            <div className="absolute -inset-3 sm:-inset-4 border border-border rounded-2xl rotate-2" />

            {/* Image container */}
            <div className="relative w-full h-[480px] sm:h-[550px] md:h-[600px] lg:h-[560px] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl shadow-black/20">
              <img
                src="/assets/GVCF.jpg"
                alt="Portrait of Ayoub Sofi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
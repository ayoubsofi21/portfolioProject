import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { contactInfo } from "../data/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, "")}` },
  { icon: GithubIcon, label: "GitHub", value: contactInfo.github, href: contactInfo.githubUrl },
  { icon: LinkedinIcon, label: "LinkedIn", value: contactInfo.linkedin, href: contactInfo.linkedinUrl },
];

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <SectionHeading
            label="04 / Contact"
            title="Let's build something great together"
            italicWord="great"
          />
          <p className="mt-5 text-text-secondary max-w-lg leading-relaxed">
            I&apos;m currently open to freelance projects, contract opportunities, internships,
            and full-time roles. If you have a project or opportunity in mind, I&apos;d be happy
            to discuss it.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-5"
          >
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor-hover
                className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-accent/40 shadow-sm hover:shadow-md transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <item.icon size={17} />
                </span>
                <span>
                  <span className="block font-mono text-xs text-text-muted">{item.label}</span>
                  <span className="block text-sm text-text mt-0.5">{item.value}</span>
                </span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

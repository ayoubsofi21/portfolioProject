const TECHS = [
  "Laravel", "React.js", "PHP", "MySQL", "REST API",
  "Tailwind CSS", "JavaScript", "Git", "GitHub", "Vite", "Linux", "Full Stack",
];

function TechMarquee() {
  // Duplicate the list once so the looped translateX(-50%) is seamless.
  const items = [...TECHS, ...TECHS];

  return (
    <div className="marquee-track border-y border-border bg-bg-secondary py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((tech, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-mono text-sm text-text-muted whitespace-nowrap">{tech}</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;

// Reusable heading used at the top of each major section.
// label -> small mono eyebrow (only shown when the content is genuinely sequential)
// title -> main heading, with optional italic serif word(s) via `italic`
function SectionHeading({ label, title, italicWord, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  // Split the title on the italic word so we can style just that part.
  const parts = italicWord ? title.split(italicWord) : [title];

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="font-mono text-xs tracking-wide text-accent/80">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-text max-w-xl">
        {italicWord ? (
          <>
            {parts[0]}
            <span className="font-serif italic font-normal text-accent">{italicWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
    </div>
  );
}

export default SectionHeading;

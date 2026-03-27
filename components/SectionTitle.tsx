type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:text-sm">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-4xl leading-[1.08] md:text-6xl">{title}</h2>

      {description ? (
        <p className="mt-6 text-lg leading-8 text-[var(--foreground)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
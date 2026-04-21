type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  as?: "h1" | "h2";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  as = "h2",
}: SectionTitleProps) {
  const HeadingTag = as;

  return (
    <div
      className={`w-full ${
        center ? "text-center" : "max-w-[760px]"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--foreground)] md:mb-4 md:text-sm">
          {eyebrow}
        </p>
      ) : null}

      <HeadingTag className="text-4xl leading-[1.06] md:text-6xl">
        {title}
      </HeadingTag>

      {description ? (
        <p
          className={`mt-5 text-lg leading-8 text-[var(--foreground)] ${
            center ? "mx-auto max-w-[980px]" : "max-w-[680px]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
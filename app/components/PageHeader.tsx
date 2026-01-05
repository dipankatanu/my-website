export default function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <header className="space-y-4">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
          {eyebrow}
        </div>
      ) : null}

      <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-5xl">
        {title}
      </h1>

      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--text)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

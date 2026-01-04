export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? <p className="text-gray-600">{subtitle}</p> : null}
    </header>
  );
}

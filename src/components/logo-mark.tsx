export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M4 6 18 20 4 34Z" fill="var(--color-primary)" />
      <path d="M18 6 32 20 18 34Z" fill="var(--color-accent)" />
    </svg>
  );
}

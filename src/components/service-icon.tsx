const icons = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" />
    </>
  ),
  partnership: (
    <>
      <circle cx="8.5" cy="10" r="3.5" />
      <circle cx="15.5" cy="10" r="3.5" />
      <path d="M4 19c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4" />
      <path d="M11 19c.6-2.6 2.4-4 4.5-4s3.9 1.4 4.5 4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10" />
      <path d="M11 20V4" />
      <path d="M18 20v-7" />
      <path d="M3 20h18" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
} as const;

export type ServiceIconName = keyof typeof icons;

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
        aria-hidden="true"
      >
        {icons[name]}
      </svg>
    </div>
  );
}

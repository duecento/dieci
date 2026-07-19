export default function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2c0 3.5 1 6.5 2.5 8.5S19 13.5 22 14c-3.5 0-6.5 1-8.5 2.5S12 20.5 12 24c0-3.5-1-6.5-2.5-8.5S5 13.5 2 13c3.5 0 6.5-1 8.5-2.5S12 5.5 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

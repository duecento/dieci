"use client";

export default function WhatsAppButton() {
  const href = ["https://wa.me/", "4479401", "42248"].join("");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex h-[54px] cursor-pointer items-center gap-2.5 rounded-full bg-[#25D366] py-0 pl-3.5 pr-5 shadow-[0_6px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true" className="shrink-0">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.697-1.812A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.13 16.94c-.27.75-1.34 1.38-1.87 1.46-.48.07-1.06.1-1.71-.11-.39-.12-.9-.29-1.55-.57-2.73-1.18-4.51-3.93-4.65-4.11-.14-.18-1.11-1.47-1.11-2.81 0-1.33.7-1.99.95-2.26.24-.27.53-.34.71-.34.18 0 .35.001.51.008.16.007.38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.27.45-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.19 1.36.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.27.14.44.2.51.32.07.11.07.66-.2 1.42z"
          fill="#fff"
        />
      </svg>
      <span className="font-heading text-sm font-semibold leading-tight text-white">
        Message us
        <br />
        on WhatsApp
      </span>
    </a>
  );
}

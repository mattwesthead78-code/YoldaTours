import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#081614" />
      <path
        d="M16 6c6 4 9 9 9 14 0 5-3.5 8-9 8s-9-3-9-8c0-5 3-10 9-14z"
        fill="none"
        stroke="#d4a017"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M16 8v18"
        fill="none"
        stroke="#2f7a62"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeaderMark() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <LeafMark className="size-11 shrink-0 rounded-md" />;
  }
  return (
    <img
      src="/images/logo-icon.png"
      alt=""
      className="size-11 shrink-0 rounded-md object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)]"
      onError={() => setFailed(true)}
    />
  );
}

export function BrandLogo({
  to = "/",
  onClick,
  compact = false,
}: {
  to?: "/";
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2.5 tracking-tight"
    >
      <HeaderMark />
      {compact ? (
        <span className="sr-only">Yolda Tours</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.25rem] font-medium">Yolda</span>
          <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.22em] text-muted sm:inline">
            Tours
          </span>
        </span>
      )}
    </Link>
  );
}

export function BrandLockup({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <LeafMark className={cn("mx-auto size-40", className)} />;
  }
  return (
    <img
      src="/images/logo.png"
      alt="Yolda Tours"
      className={cn(
        "mx-auto w-full max-w-[7rem] rounded-2xl object-cover shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]",
        className,
      )}
      onError={() => setFailed(true)}
    />
  );
}

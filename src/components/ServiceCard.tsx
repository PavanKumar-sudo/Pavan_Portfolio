import React from "react";

export type Service = {
  id: string;
  name: string;
  description: string;
  /** Skill proficiency in percentage (0-100) */
  proficiency: number;
  /** Lucide-react icon or any React node */
  icon: React.ReactNode;
  /** Tailwind gradient classes for accent background */
  gradient: string;
  /** Optional small label shown near the percentage (e.g. Frontend, Backend) */
  label?: string;
};

type ServiceCardProps = {
  service: Service;
  index?: number;
  onViewDetails?: () => void;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index = 0,
  onViewDetails,
}) => {
  const clampedProficiency = Math.min(100, Math.max(0, service.proficiency));

  return (
    <article
      className="group relative h-full animate-fade-in"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Glow ring */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-purple-500/30 via-blue-500/25 to-teal-400/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glassmorphism card */}
      <div
        className={[
          "relative flex h-full flex-col rounded-3xl border border-white/40 bg-white/70 p-5 shadow-soft-lg backdrop-blur-2xl transition-all duration-500",
          "sm:p-6 lg:p-7",
          "hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)]",
          "bg-gradient-to-br",
          service.gradient,
        ].join(" ")}
      >
        {/* Top meta row */}
        <div className="mb-5 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500/90 via-fuchsia-500/90 to-amber-400/90 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </span>
            <span className="tracking-wide">
              {service.label ?? "Core Skill"}
            </span>
          </div>
        </div>

        {/* Title & description */}
        <div className="space-y-2.5">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            {service.name}
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            {service.description}
          </p>
        </div>

        {/* Skill bar */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
            <span>Skill level</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.28)] group-hover:shadow-[0_0_0_6px_rgba(52,211,153,0.35)] transition-shadow duration-300" />
              <span>Advanced</span>
            </span>
          </div>

          <div className="relative h-2.5 overflow-hidden rounded-full bg-slate-100/80">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/60 via-cyan-400/70 to-sky-500/80 opacity-60" />
            <div
              className="relative h-full w-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 transition-all duration-700 ease-out group-hover:shadow-[0_0_16px_rgba(56,189,248,0.65)]"
              style={{ width: `${clampedProficiency}%` }}
            />
          </div>
        </div>

        {/* Micro-interaction footer */}
        <div className="mt-5 flex items-center justify-between text-[11px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors" />
            Available for projects
          </span>
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-1 text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <span className="h-1 w-1 rounded-full bg-current animate-pulse" />
            View details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;



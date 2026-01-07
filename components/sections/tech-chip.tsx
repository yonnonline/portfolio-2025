"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TechChipProps = {
  label: string;
  popover: string[];
};

// 호버 시 관련 기술 목록을 보여주는 칩
export function TechChip({ label, popover }: TechChipProps) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className={cn(
        "group relative inline-flex cursor-default items-center gap-2 rounded-full border border-foreground/60 px-2.5 py-1.5 text-4xl sm:text-5xl transition",
        "hover:shadow-lg hover:border-accent focus-within:border-accent"
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
    >
      {label}
      <span
        className={cn(
          "absolute left-1/2 top-full z-10 mt-3 w-max -translate-x-1/2 rounded-2xl border border-border/70 bg-background/95 px-4 py-3 text-sm text-foreground/80 shadow-xl backdrop-blur-xl transition-all duration-200",
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0"
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">Stack</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {popover.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
            >
              {item}
            </span>
          ))}
        </div>
      </span>
    </span>
  );
}

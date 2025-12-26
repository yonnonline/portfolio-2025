"use client";

import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DrawerSide = "left" | "right" | "center";
type Motion = "slide" | "fade";
type Size = "sm" | "md" | "lg" | "full";

const sizeClass: Record<Size, string> = {
  sm: "max-w-md",
  md: "max-w-[520px]",
  lg: "max-w-2xl",
  full: "max-w-full",
};

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  motion?: Motion;
  title?: string;
  description?: string;
  children: ReactNode;
  showOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  size?: Size;
};

// 드로어 컴포넌트: 좌/우/센터, 슬라이드/페이드, 오버레이 닫기 옵션, 사이즈 설정
export default function Drawer({
  open,
  onClose,
  side = "right",
  motion = "slide",
  title,
  description,
  children,
  showOverlay = true,
  closeOnOverlayClick = true,
  size = "lg",
}: DrawerProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const slideClosed =
    side === "left"
      ? "-translate-x-full"
      : side === "right"
      ? "translate-x-full"
      : "scale-95 opacity-0";

  const slideOpen = "translate-x-0 opacity-100 scale-100";

  const motionClasses =
    motion === "slide"
      ? open
        ? slideOpen
        : slideClosed
      : open
      ? "opacity-100"
      : "opacity-0";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-start justify-end lg:items-stretch">
      {showOverlay && (
        <div
          className={cn(
            "absolute inset-0 bg-black/30 transition-opacity duration-300",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          aria-hidden
          onClick={closeOnOverlayClick ? onClose : undefined}
        />
      )}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Drawer"}
        className={cn(
          "pointer-events-auto relative m-0 flex h-full w-full flex-col overflow-hidden border border-border/70 bg-background/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.4,0.14,0.3,1)]",
          sizeClass[size],
          side === "left" && "ml-0 mr-auto",
          side === "center" && "mx-auto rounded-2xl",
          motionClasses
        )}
      >
        <div className="flex items-start justify-between gap-3 border-b border-border/60 px-5 py-4">
          <div className="space-y-1">
            {title ? (
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                {title}
              </p>
            ) : null}
            {description ? (
              <p className="text-xs text-foreground/60">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}

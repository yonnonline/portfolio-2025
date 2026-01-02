"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DrawerSide = "left" | "right" | "center";
type Motion = "slide" | "fade";
type Size = "sm" | "md" | "lg" | "full";

const sizeClass: Record<Size, string> = {
  sm: "max-w-sm",
  md: "max-w-xl",
  lg: "max-w-3xl",
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
  size = "lg"
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [currentSize, setCurrentSize] = useState<Size>(size);

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

  // props size 변경 시 내부 상태 동기화
  useEffect(() => {
    setCurrentSize(size);
  }, [size]);

  // 드로어 열릴 때 body 스크롤 잠금 + 스크롤바 너비만큼 패딩 추가
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const currentPadding = parseFloat(getComputedStyle(body).paddingRight) || 0;
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
      }
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    }

    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-end lg:items-stretch",
        !open && "pointer-events-none"
      )}
      aria-hidden={!open}
    >
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
          sizeClass[currentSize],
          side === "left" && "ml-0 mr-auto",
          side === "center" && "mx-auto rounded-2xl",
          motionClasses
        )}
        ref={drawerRef}
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentSize((prev) => (prev === "full" ? size : "full"))}
              className="rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {currentSize === "full" ? "기본 보기" : "전체 화면"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Size = "sm" | "md";

const sizeMap: Record<Size, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10"
};

// 테마 전환 버튼 (헤더 공용 사용)
export default function ThemeToggle({ size = "md" }: { size?: Size }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground/60 shadow-inner",
          sizeMap[size]
        )}
        aria-hidden
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group inline-flex items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        sizeMap[size]
      )}
      aria-label="테마 전환"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition group-hover:rotate-6" />
      ) : (
        <MoonStar className="h-5 w-5 transition group-hover:-rotate-6" />
      )}
    </button>
  );
}

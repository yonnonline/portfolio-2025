import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" }
];

// 고정형 헤더 컴포넌트
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-base font-semibold uppercase tracking-[0.36em] transition hover:text-accent"
          aria-label="홈으로 이동"
        >
          FRNT·PUB — 2025
        </Link>
        <nav className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 transition hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle size="sm" />
          <Link
            href="#contact"
            className="hidden rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

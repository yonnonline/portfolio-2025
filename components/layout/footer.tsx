import Link from "next/link";

// 사이트 하단 정보
export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-foreground/70 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">Portfolio 2025</p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em]">
            <Link href="mailto:hello@example.com" className="hover:text-foreground">
              Email
            </Link>
            <span className="h-[1px] w-6 bg-foreground/30" aria-hidden />
            <Link href="https://www.linkedin.com" className="hover:text-foreground">
              LinkedIn
            </Link>
            <span className="h-[1px] w-6 bg-foreground/30" aria-hidden />
            <Link href="https://github.com" className="hover:text-foreground">
              GitHub
            </Link>
          </div>
        </div>
        <p className="text-xs text-foreground/60">
          © {new Date().getFullYear()} 프론트엔드 퍼블리셔 포트폴리오 — 인터랙션 중심 퍼블리싱과 접근성 개선에 집중합니다.
        </p>
      </div>
    </footer>
  );
}

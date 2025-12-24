import Link from "next/link";

// 문의 섹션: CTA 제공
export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-gradient-to-b from-background/70 via-background/50 to-background px-5 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">Let&apos;s build</p>
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          프로젝트를 함께 만들 준비가 되어 있습니다.
        </h2>
        <p className="text-sm text-foreground/70">
          요구사항 정의부터 인터랙션 구현, SEO 최적화까지 전 과정을 함께 설계합니다. 프로덕션 배포 이후에도
          퍼포먼스/접근성 지표를 모니터링할 수 있도록 가이드합니다.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="mailto:hello@example.com"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-xl transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            메일 보내기
          </Link>
          <Link
            href="https://cal.com"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            미팅 예약
          </Link>
        </div>
      </div>
    </section>
  );
}

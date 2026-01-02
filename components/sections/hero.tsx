import Link from "next/link";
import { TechChip } from "./tech-chip";

// 히어로 섹션: 첫 화면 인트로
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          {/* 상단 좌측: 프로필 박스 + 헤드라인 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-accent/20 via-background to-background/80 shadow-inner" />
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-semibold leading-[1.2] sm:text-5xl sm:leading-[1.2]">
                  <TechChip label="웹 퍼블리싱" popover={["HTML", "CSS", "JavaScript"]} />
                  을 기반으로{" "}
                  <TechChip label="프론트엔드" popover={["Next.js", "React", "TypeScript"]} /> 영역까지 <br />
                  확장하고 있는 권영원입니다.
                </h1>
                <p className="text-sm text-foreground/60">
                  시맨틱 마크업과 구조적 사고를 바탕으로 컴포넌트 단위의 UI를 구현합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 하단 우측: 소개 문장 + CTA */}
          <div className="grid place-items-start sm:place-items-end">
            <div className="w-full space-y-4 sm:space-y-5 text-left sm:text-right">
              <div className="space-y-3">
                <p className="font-display text-2xl font-semibold leading-tight text-foreground sm:text-[28px]">
                  2022년도부터 메가스터디교육<span className="text-sm">(현 넥스트스터디)</span> 공무원사업본부 퍼블리싱팀에서 <br/>인터랙션과 접근성을 병행하며 레이아웃 중심의 퍼블리싱을 담당하고 있습니다.
                </p>
                <p className="text-sm text-foreground/70">
                  구성·마크업·스타일·상호작용까지 일관된 톤으로 정리합니다. 반응형(1200/1024/768/576)과 다크모드,
                  SEO/OG 메타 설계를 기본 전제로 작업합니다.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-3 sm:justify-end">
                <Link
                  href="#projects"
                  className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-background shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

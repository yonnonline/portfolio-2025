import Link from "next/link";

// 히어로 섹션: 첫 화면 인트로
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          {/* 좌측: 프로필 + 헤드라인 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-accent/20 via-background to-background/80 shadow-inner" />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Frontend Publisher</p>
                <p className="font-display text-xl font-semibold text-foreground">Portfolio 2025</p>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
                인터랙션과 퍼포먼스를{" "}
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/60 px-2 py-1 text-3xl sm:text-4xl">
                  창조
                </span>
                하고,
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/60 px-2 py-1 text-3xl sm:text-4xl">
                  원칙
                </span>
                을 지키는 퍼블리싱을 만듭니다.
              </h1>
              <p className="text-sm text-foreground/60">
                타이포와 레이아웃만으로도 시선을 사로잡는 간결한 스타일, 과감한 스케일 대비를 유지합니다.
              </p>
            </div>
          </div>

          {/* 우측: 소개 문장 + 링크 */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-sm font-semibold text-foreground/60">(01)</span>
              <div className="space-y-3">
                <p className="font-display text-2xl font-semibold leading-tight text-foreground sm:text-[28px]">
                  10년 이상의 퍼블리싱 경험을 바탕으로, 최근 3년은 인터랙션 중심의 프로젝트에 집중했습니다. 현재는
                  독립 퍼블리셔로 새로운 프로젝트를 찾고 있습니다.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground">
                  <Link href="#projects" className="underline-offset-4 transition hover:underline">
                    Projects
                  </Link>
                  <Link href="#workflow" className="underline-offset-4 transition hover:underline">
                    Workflow
                  </Link>
                  <Link href="#contact" className="underline-offset-4 transition hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-border/80" />
            <div className="flex items-center gap-3 text-sm text-foreground/70">
              <span className="text-foreground/60">(02)</span>
              <p>선별 작업물과 사이드 패널 상세 구성을 아래에서 확인하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

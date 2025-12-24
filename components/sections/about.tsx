// 소개 섹션: 역할과 가치
export function AboutSection() {
  const highlights = [
    "접근성 준수와 가독성을 고려한 마크업",
    "디자인 시스템과 토큰 기반의 스타일 일관성",
    "코어 웹 바이탈 대응을 위한 경량화/최적화"
  ];

  return (
    <section id="about" className="border-t border-border/60 bg-background/90 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/50">About</p>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              퍼블리싱 방향성: <span className="text-foreground/70">타이포·레이아웃으로 무드를 만들고</span> 섹션
              모듈화로 확장성을 확보합니다.
            </h2>
            <div className="space-y-3 text-sm text-foreground/70">
              <p>
                모든 스크립트 주석은 한글로 기록하며, 퍼포먼스/접근성 체크리스트를 설계 초기부터 병행합니다. 라우트
                그룹과 사이드 패널 레이아웃을 기반으로 상세 페이지 확장을 고려합니다.
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">
                Typographic Layout · Interaction Ready · A11y
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-background to-background/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-foreground/60">
                <span>Principle {idx + 1}</span>
                <span className="h-[1px] w-8 bg-foreground/40" aria-hidden />
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed">{item}</p>
              <p className="mt-3 text-xs text-foreground/60">
                재사용성보다 모듈화에 집중하여 섹션 단위의 독립성과 확장성을 확보합니다.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

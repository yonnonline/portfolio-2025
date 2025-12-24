// 워크플로우 섹션: 작업 방식 소개
export function WorkflowSection() {
  const steps = [
    {
      title: "IA·섹션 모듈화",
      body: "app/(group) 라우팅과 컴포넌트 단위 설계를 함께 정의하여 유지보수를 단순화합니다.",
      detail: "One Page + Side Panel + 상세 뷰를 라우트 그룹으로 계층화"
    },
    {
      title: "스타일 토큰 설계",
      body: "Tailwind 커스텀 스크린(1200/1024/768/576)과 CSS 변수 기반의 테마를 정의합니다.",
      detail: "다크모드 변수 · 타이포 스케일 · 레이아웃 간격 설계"
    },
    {
      title: "품질 점검",
      body: "Lighthouse, a11y 체크, 메타데이터/OG/슬러그 확인을 배포 전 체크리스트로 둡니다.",
      detail: "실측 기반으로 FID/LCP/CLS, 접근성 준수 여부를 검증"
    }
  ];

  return (
    <section id="workflow" className="border-t border-border/60 bg-background/70 px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">Workflow</p>
            <h2 className="font-display text-3xl font-semibold leading-tight">레이아웃 중심 퍼블리싱 프로세스</h2>
          </div>
          <p className="text-xs text-foreground/60">* 스크립트 주석은 한글로 유지해 가독성을 높입니다.</p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background to-background/70 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-foreground/60">
                <span>Step {idx + 1}</span>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-foreground">Layout</span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-tight">{step.title}</p>
              <p className="mt-2 text-sm text-foreground/70">{step.body}</p>
              <p className="mt-2 text-xs text-foreground/60">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

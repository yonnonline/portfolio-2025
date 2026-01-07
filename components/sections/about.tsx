// 소개 섹션: 자기소개, 경력 요약, 역할, 관심사, 기술 스택
export function AboutSection() {
  const roles = [
    "시맨틱 마크업, 접근성, 반응형 UI 구현",
    "디자인 시안 기반 퍼블리싱 및 컴포넌트화",
    "유지보수를 고려한 구조 및 CSS 설계"
  ];

  const interests = [
    "웹퍼블리싱 관점의 컴포넌트 설계",
    "React 기반 UI 상태 관리",
    "SEO, 성능 최적화"
  ];

  const workValues = [
    "단기 구현보다 장기 유지보수를 우선합니다.",
    "퍼블리싱과 개발의 경계를 자연스럽게 연결하는 역할을 지향합니다.",
    "디자인 의도를 코드로 정확히 옮기는 것을 중요하게 생각합니다."
  ];

  const stacks = {
    Publishing: ["HTML5", "CSS", "JavaScript", "Responsive", "Accessibility"],
    Frontend: ["React", "Next.js", "TypeScript"],
    Tools: ["VSCode", "Figma", "Git"]
  };

  return (
    <section id="about" className="border-t border-border/60 bg-background/90 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">About</p>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                안녕하세요. 권영원입니다.
              </h2>
              <p className="text-base text-foreground/85">
                웹 퍼블리셔로 커리어를 시작해, 구조적인 마크업과 접근성을 기반으로 UI를 구현해왔습니다.
                <br className="hidden sm:block" /> 최근에는 React와 Next.js 환경에서 컴포넌트 단위의 설계와
                상태 관리에 관심을 두고 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Career Summary</p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                (주)메가스터디교육 <span className="text-sm text-foreground/70">(현 넥스트스터디)</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  소속: 공무원사업본부 퍼블리싱팀
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  근무 기간: 2022.08 - 현재
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  주요 업무: 사내 서비스 구축 및 운영
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-background to-background/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Roles</p>
            <ul className="mt-4 space-y-2 text-base text-foreground/85">
              {roles.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-background to-background/70 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Interests</p>
            <ul className="mt-4 space-y-2 text-base text-foreground/85">
              {interests.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Tech Stack</p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {Object.entries(stacks).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <p className="text-base font-semibold text-foreground">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border/70 bg-gradient-to-br from-background to-background/70 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">Work Values</p>
          <ul className="mt-4 space-y-2 text-base text-foreground/85">
            {workValues.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

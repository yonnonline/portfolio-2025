"use client";

import Drawer from "@/components/drawer/drawer";
import { useDrawerQuery } from "@/lib/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    title: "Interactive Landing",
    slug: "interactive-landing",
    tag: "모션 퍼블리싱",
    summary: "GSAP 기반 마이크로 인터랙션과 반응형 그리드",
    detail: "히어로 모션 + 스크롤 씬 · 사이드 패널 상세"
  },
  {
    title: "Design System Docs",
    slug: "design-system-docs",
    tag: "문서화",
    summary: "shadcn 컴포넌트 커스터마이징 + 토큰 기반 스타일 가이드",
    detail: "토큰/컴포넌트 가이드라인 · a11y 체크리스트"
  },
  {
    title: "SEO-first Blog",
    slug: "seo-first-blog",
    tag: "퍼포먼스",
    summary: "메타데이터, OG, 슬러그 전략을 포함한 블로그",
    detail: "App Router 슬러그/OG 이미지 자동화"
  }
];

// 프로젝트 목록 섹션: 사이드 패널 상세 보기 포함
export function ProjectsSection() {
  const { drawerId, openDrawer, closeDrawer } = useDrawerQuery({ key: "project", baseHash: "projects" });
  const activeProject = projects.find((project) => project.slug === drawerId);

  return (
    <section id="projects" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/60">Projects</p>
            <h2 className="font-display text-3xl font-semibold leading-tight">선별 작업물 · 확장 가능한 패널 설계</h2>
            <p className="text-sm text-foreground/70">
              카드 클릭 시 사이드 패널에서 상세 정보가 나타나는 흐름을 기준으로 IA를 설계합니다.
            </p>
          </div>
          <p className="text-xs text-foreground/60">* 사이드 패널 레이아웃은 라우트 그룹으로 분리해 확장 예정</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background to-background/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/60">
                <span className="rounded-full border border-border px-3 py-1">{project.tag}</span>
                <span className="h-[1px] w-8 bg-foreground/30" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{project.summary}</p>
              <p className="mt-2 text-xs text-foreground/60">{project.detail}</p>
              <div className="mt-7 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <button
                  type="button"
                  onClick={() => openDrawer(project.slug)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-2 text-foreground transition hover:-translate-y-0.5 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  )}
                >
                  드로어로 보기 <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </button>
                <span aria-hidden className="hidden text-foreground/60 sm:inline">/{project.slug}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Drawer
        open={Boolean(activeProject)}
        onClose={closeDrawer}
        side="right"
        motion="slide"
        title={activeProject?.title ?? "Project"}
        description={activeProject?.tag ?? "Selected work"}
      >
        {activeProject ? (
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">#{activeProject.slug}</p>
            <p className="text-base font-semibold">{activeProject.summary}</p>
            <p className="text-foreground/70">{activeProject.detail}</p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
              <span className="rounded-full border border-border/60 px-3 py-1">IA</span>
              <span className="rounded-full border border-border/60 px-3 py-1">Drawer</span>
              <span className="rounded-full border border-border/60 px-3 py-1">Responsive</span>
            </div>
            <Link
              href={{ hash: "contact" }}
              className="inline-flex rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              프로젝트 문의
            </Link>
          </div>
        ) : (
          <p className="text-sm text-foreground/60">프로젝트를 선택하면 드로어로 상세 내용을 확인할 수 있습니다.</p>
        )}
      </Drawer>
    </section>
  );
}

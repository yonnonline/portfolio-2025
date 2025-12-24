import type { ReactNode } from "react";

// 사이트 메인 그룹 레이아웃 (섹션 단위 구성)
export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="space-y-0">{children}</div>;
}

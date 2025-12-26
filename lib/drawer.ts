import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type UseDrawerQueryOptions = {
  key?: string;
  baseHash?: string;
};

// 쿼리스트링으로 드로어 상태를 제어하는 훅
export function useDrawerQuery({ key = "drawer", baseHash }: UseDrawerQueryOptions = {}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const drawerId = searchParams.get(key);

  const buildUrl = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);

    const query = params.toString();
    const hash = baseHash
      ? `#${baseHash}`
      : typeof window !== "undefined"
        ? window.location.hash
        : "";

    return `${pathname}${query ? `?${query}` : ""}${hash}`;
  };

  const openDrawer = (value: string) => {
    router.replace(buildUrl(value) as Route, { scroll: false });
  };

  const closeDrawer = () => {
    router.replace(buildUrl(null) as Route, { scroll: false });
  };

  return { drawerId, openDrawer, closeDrawer };
}

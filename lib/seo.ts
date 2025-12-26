import type { Metadata } from "next";
import { siteConfig } from "./constants";

type BuildMetadataProps = {
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
  type?: "website" | "article";
};

// OG 이미지 규칙: slug가 있으면 /og/{slug}.png, 없으면 기본 이미지 반환
export function getOgImage(slug?: string, override?: string) {
  if (override) return override;
  if (slug) return siteConfig.ogImagePattern.replace("{slug}", slug);
  return siteConfig.ogImage;
}

// 상세 페이지에서 공통으로 사용할 Metadata 빌더
export function buildMetadata({
  title,
  description,
  slug,
  ogImage,
  type = "website"
}: BuildMetadataProps): Metadata {
  const canonicalPath = slug ? `/${slug.replace(/^\/+/, "")}` : "/";
  const absoluteUrl = new URL(canonicalPath, siteConfig.url).toString();
  const ogImageUrl = getOgImage(slug, ogImage);

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.title}`
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      siteName: siteConfig.title,
      locale: siteConfig.locale,
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
      creator: siteConfig.twitter
    }
  };
}

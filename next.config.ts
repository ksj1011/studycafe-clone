import type { NextConfig } from "next";

// GitHub Pages 배포 시에만 정적 export (PPR/cacheComponents는 export 모드와 호환되지 않음)
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/studycafe-clone" : "";

const nextConfig: NextConfig = {
  ...(isPages
    ? { output: "export" as const, basePath, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

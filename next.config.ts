import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    domains: ['picsum.photos'],  // 允许 picsum.photos 作为图片来源
    // contentDispositionType: 'attachment',
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

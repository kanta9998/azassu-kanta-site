import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    CALENDAR_URL: process.env.CALENDAR_URL,
    FORMSPREE_KEY: process.env.FORMSPREE_KEY,
  },
};

export default withContentlayer(nextConfig);

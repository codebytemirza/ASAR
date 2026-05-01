// [FIXED: Security Headers — CSP, Clickjacking, HSTS, XSS, MIME Sniffing]
// [FIXED: Re-enabled TypeScript + ESLint to catch type vulnerabilities]
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // [FIXED: TypeScript errors now BLOCK the build — no silent bugs in prod]
  typescript: {
    ignoreBuildErrors: false,
  },
  // [FIXED: ESLint now runs during builds]
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // [FIXED: Clickjacking — prevents embedding in iframes]
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // [FIXED: MIME sniffing attacks]
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // [FIXED: Legacy XSS browser filter]
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // [FIXED: Referrer leakage to third parties]
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // [FIXED: HSTS — force HTTPS for 2 years]
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // [FIXED: Disable dangerous browser features]
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // [FIXED: Content Security Policy — restricts script/style sources]
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://placehold.co https://images.unsplash.com https://picsum.photos",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

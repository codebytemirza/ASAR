import Link from 'next/link';

/**
 * NewsTicker — Corporate announcement strip.
 *
 * Design: Dark navy background (#082652), cyan pulse indicator,
 * smooth infinite CSS marquee. Server component (no JS needed).
 *
 * Placement: Strategic sections only — homepage (between hero & advantage),
 * services (after header). NOT on every page.
 */

const TICKER_MESSAGES = [
  {
    text: 'Deploy Scalable Data Solutions with ASAR Global',
    cta: 'Get Started',
    href: '/contact',
  },
  {
    text: 'Trusted by Enterprise Clients for ISO Compliance & Data Engineering',
    cta: null,
    href: null,
  },
  {
    text: 'Transform Your Infrastructure with Modern ETL Pipelines',
    cta: 'Learn More',
    href: '/services#data',
  },
  {
    text: 'ISO 27001 · SOC 2 · HIPAA · NCA · SAMA · PDPL — 16 Frameworks Supported',
    cta: null,
    href: null,
  },
  {
    text: '100% Audit Success Rate Across Global Enterprise Deployments',
    cta: 'Our Services',
    href: '/services',
  },
  {
    text: 'MEA Region Data Engineering & Compliance Specialists',
    cta: null,
    href: null,
  },
];

// Duplicate for seamless infinite loop
const REPEATED = [...TICKER_MESSAGES, ...TICKER_MESSAGES];

export function NewsTicker() {
  return (
    <div className="ticker-bar" role="marquee" aria-label="ASAR Global announcements">
      {/* Left Badge */}
      <div className="ticker-badge">
        <span className="ticker-badge-text">ASAR GLOBAL</span>
      </div>

      {/* Thin cyan divider */}
      <div className="ticker-divider-bar" />

      {/* Scrolling Track */}
      <div className="ticker-track">
        <div className="ticker-content">
          {REPEATED.map((item, i) => (
            <span key={i} className="ticker-item">
              {item.text}
              {item.cta && item.href && (
                <Link href={item.href} className="ticker-cta-link" tabIndex={-1}>
                  {item.cta} →
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

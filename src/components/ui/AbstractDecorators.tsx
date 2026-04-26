import React, { useId } from 'react';

/**
 * AbstractDecorators — Subtle corporate SVG background elements.
 *
 * Color palette: STRICTLY hsl(var(--primary)) (deep navy) and #FFFFFF (white) only.
 * All elements are pointer-events-none, aria-hidden, z-0.
 * Opacity kept at 5–8% max. SVG IDs are unique per instance via useId().
 */

interface DecoratorProps {
  className?: string;
}

const DecoratorWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    aria-hidden="true"
  >
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// CORPORATE GRID
// Purpose: Fine orthogonal grid — adds structural depth to hero/architecture.
// Use on: Full-bleed sections with solid light backgrounds.
// ─────────────────────────────────────────────────────────────────────────────
export const CorporateGrid = ({ className = '' }: DecoratorProps) => {
  const id = useId();
  const patternId = `cg-${id}`.replace(/:/g, '');

  return (
    <DecoratorWrapper className={className}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeOpacity="0.06"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// TECH MESH
// Purpose: Sparse dot + dashed-line mesh — data connectivity narrative.
// Use on: Data/analytics or pipeline sections with white/light backgrounds.
// ─────────────────────────────────────────────────────────────────────────────
export const TechMesh = ({ className = '' }: DecoratorProps) => {
  const id = useId();
  const patternId = `tm-${id}`.replace(/:/g, '');

  return (
    <DecoratorWrapper className={className}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="0"  cy="0"  r="1.2" fill="hsl(var(--primary))" fillOpacity="0.07" />
            <circle cx="40" cy="40" r="1.2" fill="hsl(var(--primary))" fillOpacity="0.07" />
            <line x1="0" y1="0" x2="40" y2="40"
              stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="3 5" />
            <line x1="80" y1="0" x2="40" y2="40"
              stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.05" strokeDasharray="3 5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// AMBIENT GLOW
// Purpose: Soft radial colour bloom — perceived depth and warmth.
// Colors: 'primary' = navy (hsl(var(--primary))), 'white' = white bloom for dark sections.
// Use on: Hero sections, dark CTA blocks.
// ─────────────────────────────────────────────────────────────────────────────
interface AmbientGlowProps extends DecoratorProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  color?: 'primary' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const AmbientGlow = ({
  position = 'top-right',
  color = 'primary',
  size = 'md',
  className = '',
}: AmbientGlowProps) => {
  const positionClasses = {
    'top-right':    'top-0 right-0 -translate-y-1/4 translate-x-1/4',
    'top-left':     'top-0 left-0 -translate-y-1/4 -translate-x-1/4',
    'bottom-right': 'bottom-0 right-0 translate-y-1/4 translate-x-1/4',
    'bottom-left':  'bottom-0 left-0 translate-y-1/4 -translate-x-1/4',
    'center':       'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
  };
  const sizeClasses = {
    'sm': 'w-[400px] h-[400px]',
    'md': 'w-[600px] h-[600px]',
    'lg': 'w-[800px] h-[800px]',
  };
  // Only hsl(var(--primary)) (navy) or #ffffff (white) — no third colors
  const bgColors = {
    'primary': 'bg-[hsl(var(--primary))]',
    'white':   'bg-white',
  };

  return (
    <DecoratorWrapper className={className}>
      <div
        className={`absolute rounded-full blur-[120px] opacity-[0.05] ${bgColors[color]} ${sizeClasses[size]} ${positionClasses[position]}`}
      />
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// CORNER ACCENT
// Purpose: Minimal L-bracket — corporate framing on section headers.
// Use on: Top corners of hero or major page headers.
// ─────────────────────────────────────────────────────────────────────────────
interface CornerAccentProps extends DecoratorProps {
  corner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: 'navy' | 'white';
}

export const CornerAccent = ({
  corner = 'top-left',
  color = 'navy',
  className = '',
}: CornerAccentProps) => {
  const posMap = {
    'top-left':     'top-8 left-8',
    'top-right':    'top-8 right-8 rotate-90',
    'bottom-left':  'bottom-8 left-8 -rotate-90',
    'bottom-right': 'bottom-8 right-8 rotate-180',
  };
  const stroke = color === 'white' ? '#ffffff' : 'hsl(var(--primary))';

  return (
    <DecoratorWrapper className={className}>
      <svg
        className={`absolute ${posMap[corner]} w-20 h-20 opacity-[0.07]`}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 78 L2 2 L78 2" stroke={stroke} strokeWidth="1.5" strokeLinecap="square" />
        <path d="M14 78 L14 14 L78 14" stroke={stroke} strokeWidth="0.5" strokeLinecap="square" strokeOpacity="0.4" />
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// RADIAL LINES
// Purpose: Lines radiating from a corner — fills empty corner space elegantly.
// Use on: Hero right-side empty areas, large CTA section corners.
// ─────────────────────────────────────────────────────────────────────────────
interface RadialLinesProps extends DecoratorProps {
  corner?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: 'navy' | 'white';
}

export const RadialLines = ({
  corner = 'top-right',
  color = 'navy',
  className = '',
}: RadialLinesProps) => {
  const stroke = color === 'white' ? '#ffffff' : 'hsl(var(--primary))';

  // Generate 8 lines radiating outward from the corner point
  const lines = Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 9) * 75; // spread across 75 degrees
    const rad = (angle * Math.PI) / 180;
    const length = 320 + i * 20;
    return {
      x2: Math.cos(rad) * length,
      y2: Math.sin(rad) * length,
      opacity: 0.03 + i * 0.005,
    };
  });

  const cornerStyles: Record<string, string> = {
    'top-right':    'top-0 right-0',
    'top-left':     'top-0 left-0 scale-x-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-y-[-1]',
    'bottom-left':  'bottom-0 left-0 scale-[-1]',
  };

  return (
    <DecoratorWrapper className={className}>
      <svg
        className={`absolute ${cornerStyles[corner]} w-[420px] h-[420px]`}
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, i) => (
          <line
            key={i}
            x1="0" y1="0"
            x2={line.x2} y2={line.y2}
            stroke={stroke}
            strokeWidth="0.6"
            strokeOpacity={line.opacity}
          />
        ))}
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DOTS PATTERN
// Purpose: Scattered dot field — fills large empty section backgrounds.
// Use on: Wide feature sections with large white/light backgrounds.
// ─────────────────────────────────────────────────────────────────────────────
export const DotsPattern = ({ className = '' }: DecoratorProps) => {
  const id = useId();
  const patternId = `dp-${id}`.replace(/:/g, '');

  return (
    <DecoratorWrapper className={className}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="hsl(var(--primary))" fillOpacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// DIAGONAL LINES
// Purpose: Subtle diagonal stripe pattern — fills structured empty sections.
// Use on: Alternating section backgrounds, ISO/compliance framework sections.
// ─────────────────────────────────────────────────────────────────────────────
export const DiagonalLines = ({ className = '' }: DecoratorProps) => {
  const id = useId();
  const patternId = `dl-${id}`.replace(/:/g, '');

  return (
    <DecoratorWrapper className={className}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20"
              stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.04" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </DecoratorWrapper>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// HEXGRID
// Purpose: Subtle hexagonal tile pattern — premium data / enterprise feel.
// Use on: Technology or innovation-themed sections with large empty areas.
// ─────────────────────────────────────────────────────────────────────────────
export const HexGrid = ({ className = '' }: DecoratorProps) => {
  const id = useId();
  const patternId = `hg-${id}`.replace(/:/g, '');
  // Flat-top hex: w=60, h=52, drawn as a path
  const hex = 'M30,1 L59,17 L59,49 L30,65 L1,49 L1,17 Z';

  return (
    <DecoratorWrapper className={className}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="60" height="52" patternUnits="userSpaceOnUse">
            <path d={hex} fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </DecoratorWrapper>
  );
};

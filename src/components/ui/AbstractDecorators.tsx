import React from 'react';

interface DecoratorProps {
  className?: string;
}

const DecoratorWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div 
    className={`pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`} 
    aria-hidden="true"
  >
    {children}
  </div>
);

export const CorporateGrid = ({ className = '' }: DecoratorProps) => {
  return (
    <DecoratorWrapper className={`opacity-5 dark:opacity-10 ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="corporate-grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path 
              d="M 60 0 L 0 0 0 60" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="text-[#082652] dark:text-white"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#corporate-grid-pattern)" />
      </svg>
    </DecoratorWrapper>
  );
};

export const TechMesh = ({ className = '' }: DecoratorProps) => {
  return (
    <DecoratorWrapper className={`opacity-5 dark:opacity-10 ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tech-mesh-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" className="fill-[#082652] dark:fill-white" />
            <circle cx="60" cy="60" r="1.5" className="fill-[#082652] dark:fill-white" />
            <path 
              d="M 2 2 L 60 60 M 60 60 L 120 2" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              strokeDasharray="4 4"
              className="text-[#082652] dark:text-white"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-mesh-pattern)" />
      </svg>
    </DecoratorWrapper>
  );
};

interface AmbientGlowProps extends DecoratorProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  color?: 'primary' | 'accent';
}

export const AmbientGlow = ({ position = 'top-right', color = 'primary', className = '' }: AmbientGlowProps) => {
  const positionClasses = {
    'top-right': 'top-0 right-0 -translate-y-1/3 translate-x-1/3',
    'top-left': 'top-0 left-0 -translate-y-1/3 -translate-x-1/3',
    'bottom-right': 'bottom-0 right-0 translate-y-1/3 translate-x-1/3',
    'bottom-left': 'bottom-0 left-0 translate-y-1/3 -translate-x-1/3',
    'center': 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
  };

  const bgColors = {
    'primary': 'bg-[#082652] dark:bg-white',
    'accent': 'bg-cyan-500',
  };

  return (
    <DecoratorWrapper className={className}>
      <div 
        className={`absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-5 dark:opacity-10 ${bgColors[color]} ${positionClasses[position]}`}
      />
    </DecoratorWrapper>
  );
};

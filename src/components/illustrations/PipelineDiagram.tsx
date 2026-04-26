import React from 'react';

export function PipelineDiagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1000 660" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background with Paper Frame */}
      <rect width="1000" height="660" fill="#FAFAFA" />
      
      <defs>
        <pattern id="gridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#E5E7EB" strokeWidth="1"/>
        </pattern>
        <pattern id="gridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F3F4F6" strokeWidth="1"/>
        </pattern>
        <pattern id="hatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="4" stroke="#D1D5DB" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Grid Paper Effect */}
      <rect width="1000" height="660" fill="url(#gridSmall)"/>
      <rect width="1000" height="660" fill="url(#gridLarge)"/>
      
      {/* Outer Blueprint Frame */}
      <path d="M 20 20 L 980 20 L 980 640 L 20 640 Z" fill="none" stroke="#082652" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 26 26 L 974 26 L 974 634 L 26 634 Z" fill="none" stroke="#082652" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Top Left Metadata Annotations */}
      <g transform="translate(40, 50)">
        <text x="0" y="0" fill="#082652" fontSize="16" fontWeight="900" fontFamily="sans-serif">ARCHITECTURAL SCHEMATIC</text>
        <text x="0" y="20" fill="#6B7280" fontSize="12" fontFamily="mono">DWG_NO: ASAR-PL-001</text>
        <text x="0" y="35" fill="#6B7280" fontSize="12" fontFamily="mono">REV: 2.1.0-STABLE</text>
        <text x="0" y="50" fill="#6B7280" fontSize="12" fontFamily="mono">CLASS: STRICT COMPLIANCE</text>
      </g>

      {/* Crop Marks / Registry Marks */}
      <path d="M 10 100 L 30 100 M 100 10 L 100 30" stroke="#082652" strokeWidth="1" />
      <path d="M 990 100 L 970 100 M 900 10 L 900 30" stroke="#082652" strokeWidth="1" />
      <circle cx="500" cy="20" r="4" fill="#FAFAFA" stroke="#082652" strokeWidth="1" />
      <circle cx="500" cy="20" r="1" fill="#082652" />
      <circle cx="20" cy="330" r="4" fill="#FAFAFA" stroke="#082652" strokeWidth="1" />
      <circle cx="20" cy="330" r="1" fill="#082652" />

      {/* --- CONNECTIONS (Hand-sketched orthogonal aesthetic) --- */}
      <g stroke="#082652" strokeWidth="2.5" fill="none" strokeLinecap="round">
        {/* Ingestion to Processing */}
        <path d="M 275 280 L 345 280" />
        <path d="M 340 286 L 340 195" />
        <path d="M 335 200 L 405 200" />
        <circle cx="280" cy="280" r="3" fill="#FAFAFA" stroke="#082652" />
        <circle cx="400" cy="200" r="3" fill="#082652" />
        
        {/* Ingestion to Compliance */}
        <path d="M 275 340 L 345 340" />
        <path d="M 340 334 L 340 426" />
        <path d="M 335 420 L 405 420" />
        <circle cx="280" cy="340" r="3" fill="#FAFAFA" stroke="#082652" />
        <circle cx="400" cy="420" r="3" fill="#082652" />

        {/* Processing to Warehouse */}
        <path d="M 575 200 L 645 200" />
        <path d="M 640 194 L 640 306" />
        <path d="M 635 300 L 705 300" />
        <circle cx="580" cy="200" r="3" fill="#FAFAFA" stroke="#082652" />
        <circle cx="700" cy="300" r="3" fill="#082652" />

        {/* Compliance to Warehouse */}
        <path d="M 575 420 L 645 420" />
        <path d="M 640 426 L 640 334" />
        <path d="M 635 340 L 705 340" />
        <circle cx="580" cy="420" r="3" fill="#FAFAFA" stroke="#082652" />
        <circle cx="700" cy="340" r="3" fill="#082652" />
      </g>

      {/* Dimensional Lines / Connection Annotations */}
      <g fill="#4B5563" fontSize="10" fontFamily="mono">
        {/* Pipe 1 */}
        <text x="310" y="272" textAnchor="middle">RAW_API_L</text>
        <path d="M 290 275 L 330 275 M 290 273 L 290 277 M 330 273 L 330 277" stroke="#9CA3AF" strokeWidth="1" />
        <text x="348" y="240" transform="rotate(-90 348 240)">1TB/SEC</text>

        {/* Pipe 2 */}
        <text x="310" y="352" textAnchor="middle">LOG_STREAM</text>
        <path d="M 290 345 L 330 345 M 290 343 L 290 347 M 330 343 L 330 347" stroke="#9CA3AF" strokeWidth="1" />
        
        {/* Pipe 3 */}
        <text x="610" y="192" textAnchor="middle">DBT_SYNC</text>
        
        {/* Pipe 4 */}
        <text x="610" y="432" textAnchor="middle">AUDIT_TICK</text>
      </g>

      {/* --- NODES --- */}
      <g stroke="#082652" strokeWidth="2.5" strokeLinecap="round">
        
        {/* 1. INGESTION */}
        <g transform="translate(100, 250)">
          <rect x="8" y="8" width="180" height="120" fill="url(#hatch)" stroke="none" />
          <rect x="0" y="0" width="180" height="120" fill="#FFFFFF" />
          {/* Overlap Sketch Corners */}
          <path d="M -5 0 L 185 0 M -5 120 L 185 120 M 0 -5 L 0 125 M 180 -5 L 180 125" />
          <rect x="6" y="6" width="168" height="108" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <text x="20" y="32" fill="#082652" fontSize="12" fontWeight="900" fontFamily="mono" stroke="none">01.</text>
          <text x="20" y="55" fill="#082652" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" stroke="none">INGESTION</text>
          <text x="20" y="75" fill="#4B5563" fontSize="11" fontFamily="mono" stroke="none">[ MULTI-SOURCE API ]</text>
          <text x="20" y="95" fill="#9CA3AF" fontSize="10" fontFamily="mono" stroke="none">Kafka / Event Hubs</text>
        </g>

        {/* 2. PROCESSING */}
        <g transform="translate(400, 140)">
          <rect x="8" y="8" width="180" height="120" fill="url(#hatch)" stroke="none" />
          <rect x="0" y="0" width="180" height="120" fill="#FFFFFF" />
          <path d="M -5 0 L 185 0 M -5 120 L 185 120 M 0 -5 L 0 125 M 180 -5 L 180 125" />
          <rect x="6" y="6" width="168" height="108" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <text x="20" y="32" fill="#082652" fontSize="12" fontWeight="900" fontFamily="mono" stroke="none">02.</text>
          <text x="20" y="55" fill="#082652" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" stroke="none">PROCESSING</text>
          <text x="20" y="75" fill="#4B5563" fontSize="11" fontFamily="mono" stroke="none">[ ENGINES ON ]</text>
          <text x="20" y="95" fill="#9CA3AF" fontSize="10" fontFamily="mono" stroke="none">Apache Spark / dbt</text>
        </g>

        {/* 3. COMPLIANCE */}
        <g transform="translate(400, 360)">
          <rect x="8" y="8" width="180" height="120" fill="url(#hatch)" stroke="none" />
          <rect x="0" y="0" width="180" height="120" fill="#FFFFFF" />
          <path d="M -5 0 L 185 0 M -5 120 L 185 120 M 0 -5 L 0 125 M 180 -5 L 180 125" />
          <rect x="6" y="6" width="168" height="108" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <text x="20" y="32" fill="#082652" fontSize="12" fontWeight="900" fontFamily="mono" stroke="none">03.</text>
          <text x="20" y="55" fill="#082652" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" stroke="none">COMPLIANCE</text>
          <text x="20" y="75" fill="#4B5563" fontSize="11" fontFamily="mono" stroke="none">[ RIGID ENFORCEMENT ]</text>
          <text x="20" y="95" fill="#9CA3AF" fontSize="10" fontFamily="mono" stroke="none">NDMO / SAMA / SOC 2</text>
        </g>

        {/* 4. WAREHOUSE */}
        <g transform="translate(700, 250)">
          <rect x="8" y="8" width="180" height="120" fill="url(#hatch)" stroke="none" />
          <rect x="0" y="0" width="180" height="120" fill="#FFFFFF" />
          <path d="M -5 0 L 185 0 M -5 120 L 185 120 M 0 -5 L 0 125 M 180 -5 L 180 125" />
          <rect x="6" y="6" width="168" height="108" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          <text x="20" y="32" fill="#082652" fontSize="12" fontWeight="900" fontFamily="mono" stroke="none">04.</text>
          <text x="20" y="55" fill="#082652" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" stroke="none">DATA WAREHOUSE</text>
          <text x="20" y="75" fill="#4B5563" fontSize="11" fontFamily="mono" stroke="none">[ ENTERPRISE BI ]</text>
          <text x="20" y="95" fill="#9CA3AF" fontSize="10" fontFamily="mono" stroke="none">Secure Dashboards</text>
        </g>
      </g>

      {/* --- TITLE BLOCK / CTA (CAD Style) --- */}
      <g transform="translate(480, 520)">
        {/* Base Frame */}
        <rect x="0" y="0" width="500" height="120" fill="#FAFAFA" stroke="#082652" strokeWidth="3" strokeLinejoin="miter"/>
        <path d="M -5 0 L 505 0 M -5 120 L 505 120 M 0 -5 L 0 125 M 500 -5 L 500 125" stroke="#082652" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Internal Table Lines */}
        <path d="M 0 60 L 500 60" stroke="#082652" strokeWidth="2" />
        <path d="M 150 0 L 150 60 M 310 0 L 310 60 L 310 120" stroke="#082652" strokeWidth="2" />
        
        {/* ROW 1 */}
        <text x="10" y="15" fill="#6B7280" fontSize="10" fontFamily="mono">PROJECT</text>
        <text x="10" y="45" fill="#082652" fontSize="13" fontWeight="900" fontFamily="sans-serif">CORP PIPELINE</text>

        <text x="160" y="15" fill="#6B7280" fontSize="10" fontFamily="mono">CLIENT</text>
        <text x="160" y="45" fill="#082652" fontSize="13" fontWeight="900" fontFamily="sans-serif">ENTERPRISE SCALE</text>

        <text x="320" y="15" fill="#6B7280" fontSize="10" fontFamily="mono">ARCHITECTS</text>
        <text x="320" y="45" fill="#082652" fontSize="13" fontWeight="900" fontFamily="sans-serif">ASAR GLOBAL</text>
        
        {/* ROW 2 */}
        <text x="10" y="75" fill="#6B7280" fontSize="10" fontFamily="mono">SYSTEM ACTION REQUIRED</text>
        <text x="10" y="105" fill="#082652" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">DEPLOY SCALABLE DATA PIPELINES</text>

        {/* CAD Style CTA Button */}
        <a href="/contact" style={{ cursor: 'pointer' }} className="group">
          <rect x="310" y="60" width="190" height="60" fill="#082652" className="transition-all hover:fill-[#1e4483] group-hover:fill-[#1e4483]" stroke="#082652" strokeWidth="2"/>
          {/* Overlap Sketch Corners on the button */}
          <path d="M 305 60 L 505 60 M 305 120 L 505 120 M 310 55 L 310 125 M 500 55 L 500 125" stroke="#082652" strokeWidth="2" strokeLinecap="round" fill="none" />
          
          <text x="405" y="96" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="1" textAnchor="middle">
            GET STARTED →
          </text>
        </a>
      </g>
    </svg>
  );
}

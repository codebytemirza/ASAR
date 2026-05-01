import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const alt = 'ASAR GLOBAL - Enterprise Technology & Compliance Solutions';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const runtime = 'nodejs';

export default async function Image() {
  let logoBase64 = '';
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    const logoData = await readFile(logoPath);
    logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;
  } catch (e) {
    console.error('Failed to load logo', e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#082652', // Deep corporate navy
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Sweeping Gradient / Glow with Shield Icon */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(8, 38, 82, 0) 70%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: 'rotate(15deg)' }}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        </div>

        {/* Corporate Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Logo or Text Fallback */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            {logoBase64 ? (
              <img src={logoBase64} alt="ASAR GLOBAL Logo" style={{ height: '60px', width: 'auto', marginRight: '20px' }} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: '#2563eb', borderRadius: '4px' }} />
                <span style={{ color: 'white', fontSize: '40px', fontWeight: 900, letterSpacing: '0.05em' }}>ASAR GLOBAL</span>
              </div>
            )}
          </div>

          {/* Accent Line */}
          <div style={{ width: '80px', height: '6px', background: '#2563eb', marginBottom: '40px' }} />

          {/* Main Title */}
          <div
            style={{
              color: 'white',
              fontSize: '64px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '900px',
              marginBottom: '24px',
            }}
          >
            Solutions That Secure &amp; Scale.
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.4,
              maxWidth: '800px',
            }}
          >
            ISO Compliance Standards, Corporate Governance Training, and Enterprise Data Engineering.
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            display: 'flex',
            color: '#2563eb',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          asarglobal.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

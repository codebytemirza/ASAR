import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'ASAR GLOBAL - Enterprise Technology & Compliance Solutions';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), 'public', 'logo.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #061833 0%, #0D2B5A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle geometric background overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2px, transparent 0)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Top Accent Line */}
        <div
          style={{
            width: '120px',
            height: '6px',
            background: '#007BFF',
            marginBottom: '40px',
            borderRadius: '3px',
          }}
        />

        <div
          style={{
            display: 'flex',
            marginBottom: '32px',
          }}
        >
          <img src={logoBase64} alt="ASAR GLOBAL Logo" style={{ height: '80px', width: 'auto' }} />
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Enterprise Data Engineering & Uncompromising Corporate Compliance Architectures.
        </div>
        
        {/* URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            display: 'flex',
            fontSize: '24px',
            fontWeight: 600,
            color: '#007BFF',
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

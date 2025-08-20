import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontSize: 32,
          fontWeight: 600,
          color: 'white',
          padding: '40px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 60, marginBottom: 20 }}>
            Ismat Samadov
          </div>
          <div style={{ fontSize: 32, opacity: 0.9, marginBottom: 20 }}>
            Machine Learning Engineer
          </div>
          <div style={{ fontSize: 24, opacity: 0.8, lineHeight: 1.4 }}>
            AI Systems Developer • Computer Vision • NLP • MLOps
          </div>
        </div>
        <div 
          style={{
            position: 'absolute',
            bottom: 40,
            right: 80,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          ismat.pro
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
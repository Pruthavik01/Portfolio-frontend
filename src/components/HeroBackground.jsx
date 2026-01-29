import ParticleCanvas from './ui//ParticleCanvas'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        }}
      />

      {/* 🔥 Particle layer */}
      <ParticleCanvas />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-purple-600/40 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-600/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '5s' }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}

interface BackgroundEffectsProps {
  theme: 'orange' | 'blue' | 'purple'
  particleCount?: number
}

export default function BackgroundEffects({ theme, particleCount = 15 }: BackgroundEffectsProps) {
  const themeColors = {
    orange: {
      orb1: 'from-orange-300/50 to-red-300/50',
      orb2: 'from-red-300/50 to-orange-300/50',
      orb3: 'from-red-200/40 to-orange-200/40',
      particle: 'bg-orange-400/60'
    },
    blue: {
      orb1: 'from-blue-300/50 to-cyan-300/50',
      orb2: 'from-teal-300/50 to-blue-300/50',
      orb3: 'from-cyan-200/40 to-teal-200/40',
      particle: 'bg-blue-400/60'
    },
    purple: {
      orb1: 'from-purple-300/50 to-pink-300/50',
      orb2: 'from-rose-300/50 to-purple-300/50',
      orb3: 'from-pink-200/40 to-rose-200/40',
      particle: 'bg-purple-400/60'
    }
  }

  const colors = themeColors[theme]

  return (
    <div className="absolute inset-0">
      {/* Animated Gradient Orbs */}
      <div className={`absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r ${colors.orb1} rounded-full blur-3xl animate-floating-slow`}></div>
      <div className={`absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r ${colors.orb2} rounded-full blur-3xl animate-floating-slow delay-1000`}></div>
      <div className={`absolute bottom-1/4 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r ${colors.orb3} rounded-full blur-3xl animate-floating-slow delay-500`}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 ${colors.particle} rounded-full animate-particle-float`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
} 
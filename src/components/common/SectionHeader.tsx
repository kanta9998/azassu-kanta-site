import { Badge } from '@/components/ui/badge'

interface SectionHeaderProps {
  badge?: {
    text: string
    icon?: string
  }
  title: string
  subtitle?: string
  description?: string
  theme: 'orange' | 'blue' | 'purple'
  alignment?: 'center' | 'left'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  theme,
  alignment = 'center',
  className = ''
}: SectionHeaderProps) {
  const themeColors = {
    orange: {
      badge: 'from-orange-600 to-red-600',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      highlight: 'text-orange-700 bg-orange-100'
    },
    blue: {
      badge: 'from-blue-600 to-cyan-600',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      highlight: 'text-blue-700 bg-blue-100'
    },
    purple: {
      badge: 'from-purple-600 to-pink-600',
      gradient: 'from-purple-600 via-pink-600 to-rose-600',
      highlight: 'text-purple-700 bg-purple-100'
    }
  }

  const colors = themeColors[theme]
  const textAlign = alignment === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${textAlign} mb-12 sm:mb-16 lg:mb-20 ${className}`}>
      {badge && (
        <Badge className={`mb-4 sm:mb-6 bg-gradient-to-r ${colors.badge} text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl`}>
          {badge.icon && <span className="mr-2">{badge.icon}</span>}
          {badge.text}
        </Badge>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight">
        {title}
        {subtitle && (
          <span className={`block bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent animate-gradient-x`}>
            {subtitle}
          </span>
        )}
      </h2>
      
      {description && (
        <p className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          {description}
        </p>
      )}
    </div>
  )
} 
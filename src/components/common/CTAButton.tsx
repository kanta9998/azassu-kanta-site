import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  theme: 'orange' | 'blue' | 'purple'
  size?: 'default' | 'large'
  icon?: string
  children: React.ReactNode
  subtitle?: string
  className?: string
}

export default function CTAButton({ 
  href, 
  variant = 'primary', 
  theme, 
  size = 'default',
  icon,
  children,
  subtitle,
  className = ''
}: CTAButtonProps) {
  const themeColors = {
    orange: {
      primary: 'from-orange-600 via-red-600 to-pink-600 hover:from-orange-500 hover:via-red-500 hover:to-pink-500',
      secondary: 'border-orange-600 hover:bg-orange-50 hover:border-red-600',
      glow: 'from-orange-500 to-red-600'
    },
    blue: {
      primary: 'from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500',
      secondary: 'border-blue-600 hover:bg-blue-50 hover:border-cyan-600',
      glow: 'from-blue-500 to-cyan-600'
    },
    purple: {
      primary: 'from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500',
      secondary: 'border-purple-600 hover:bg-purple-50 hover:border-pink-600',
      glow: 'from-purple-500 to-pink-600'
    }
  }

  const colors = themeColors[theme]
  const isLarge = size === 'large'
  const isPrimary = variant === 'primary'

  const buttonClasses = isPrimary
    ? `bg-gradient-to-r ${colors.primary} text-white`
    : `border-4 ${colors.secondary} text-gray-900 bg-white/90`

  const sizeClasses = isLarge
    ? 'px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 text-lg sm:text-xl lg:text-2xl min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]'
    : 'px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg'

  return (
    <div className="group relative w-full sm:w-auto">
      {isPrimary && (
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse`}></div>
      )}
      
      <Button
        size="lg"
        className={`relative ${buttonClasses} ${sizeClasses} ${className} font-black rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-white/30 w-full sm:w-auto`}
        asChild
      >
        <Link href={href} className="flex items-center justify-center gap-3 sm:gap-4">
          {icon && (
            <span className="text-2xl sm:text-3xl lg:text-4xl animate-bounce">
              {icon}
            </span>
          )}
          <div className="text-center sm:text-left">
            <div className="whitespace-nowrap font-black">{children}</div>
            {subtitle && (
              <div className="text-sm sm:text-base lg:text-lg opacity-90 font-bold">
                {subtitle}
              </div>
            )}
          </div>
        </Link>
      </Button>
    </div>
  )
} 
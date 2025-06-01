'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import headerNavLinks from '@/../data/headerNavLinks'
import { Menu } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top Banner - Neutral black/white theme */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-2 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-black/20 animate-gradient-x"></div>
        <div className="relative flex items-center justify-center gap-2 text-sm font-bold">
          <span className="animate-pulse">🔥</span>
          <span>Limited Time: 50% OFF First Lesson</span>
          <span className="animate-pulse">⏰</span>
          <span className="hidden sm:inline">- Only 24 hours left!</span>
        </div>
      </div>

      {/* Main Header - Neutral black/white theme */}
      <div className="bg-white border-b border-gray-200 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section - Neutral theme */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                {/* Avatar Glow Effects - Neutral */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-md opacity-30 animate-pulse scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full blur-sm opacity-20 animate-pulse delay-300 scale-105"></div>
                
                <Avatar className="relative h-12 w-12 border-2 border-gray-200 shadow-lg ring-2 ring-gray-300/30 group-hover:scale-110 transition-transform duration-300">
                  <AvatarImage src="/static/images/avatar.png" alt="Kanta" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-gray-700 to-black text-white font-bold text-lg">
                    K
                  </AvatarFallback>
                </Avatar>
                
                {/* Live Indicator - Neutral */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-700 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-gray-900 group-hover:text-gray-700 transition-colors">
                  Kanta Azassu
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Japanese Language Expert
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Neutral theme */}
            <nav className="hidden md:flex items-center space-x-8">
              {headerNavLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 group ${
                    pathname === item.href
                      ? 'text-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <span className="relative z-10">{item.title}</span>
                  {pathname === item.href && (
                    <div className="absolute inset-0 bg-gray-100 rounded-lg"></div>
                  )}
                  <div className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Neutral theme */}
            <div className="flex items-center space-x-4">
              <Button 
                asChild 
                className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 hover:from-gray-800 hover:via-gray-900 hover:to-gray-700 text-white font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 text-xs sm:text-sm md:text-base"
              >
                <Link href="/lessons" className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-base md:text-lg">🚀</span>
                  <span className="hidden sm:inline whitespace-nowrap">Book Free Trial</span>
                  <span className="sm:hidden font-black text-xs">FREE</span>
                </Link>
              </Button>

              {/* Mobile Menu Button - Neutral theme */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-gray-700 hover:text-black hover:bg-gray-100 p-2"
                onClick={toggleMenu}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Neutral theme */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Logo Section - Neutral theme */}
            <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-sm opacity-30 animate-pulse"></div>
                <Avatar className="relative h-10 w-10 border border-gray-200 ring-1 ring-gray-300/30">
                  <AvatarImage src="/static/images/avatar.png" alt="Kanta" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-gray-700 to-black text-white font-bold">
                    K
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="font-black text-gray-900 text-lg">Kanta Azassu</h2>
                <p className="text-gray-600 text-sm">Japanese Expert</p>
              </div>
            </div>

            {/* Mobile Navigation - Neutral theme */}
            <nav className="space-y-3">
              {headerNavLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-gray-100 text-black border border-gray-300'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA - Neutral theme */}
            <div className="pt-4 border-t border-gray-200">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 sm:py-4 rounded-full shadow-xl transition-all duration-300 border-2 border-gray-300 text-sm sm:text-base"
              >
                <Link href="/lessons" className="flex items-center justify-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <span className="text-base sm:text-lg">🚀</span>
                  <span className="whitespace-nowrap">Book Free Trial Lesson</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
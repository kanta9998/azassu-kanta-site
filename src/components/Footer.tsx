'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Footer = () => {
  const pathname = usePathname()

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@azassukanta',
      icon: '🎵',
      followers: '2.5M',
      color: 'from-gray-700 to-black'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@azassukanta',
      icon: '📺',
      followers: '850K',
      color: 'from-gray-700 to-black'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/azassu.kanta',
      icon: '📸',
      followers: '1.2M',
      color: 'from-gray-700 to-black'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/azassukanta',
      icon: '🐦',
      followers: '450K',
      color: 'from-gray-700 to-black'
    }
  ]

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/lessons', label: 'Lessons' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ]

  const learningResources = [
    { 
      label: 'JLPT Prep',
      href: '/lessons#jlpt'
    },
    { 
      label: 'Business Japanese',
      href: '/lessons#business'
    },
    { 
      label: 'Cultural Lessons',
      href: '/lessons#culture'
    },
    { 
      label: 'Free Resources',
      href: '/portfolio#resources'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Effects - Neutral style */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full blur-3xl animate-floating-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-gray-800/20 to-black/20 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
      </div>

      {/* Newsletter Section - Neutral theme */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-gray-700 to-black text-white font-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg animate-glow-pulse border-2 border-white/20">
              📧 NEWSLETTER
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Stay Updated with</span>
              <span className="block bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent animate-gradient-x">
                Japanese Learning
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Get weekly Japanese learning tips, cultural insights, and exclusive content
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-xl text-white placeholder-gray-300 focus:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400/20 transition-all duration-300 text-sm sm:text-base"
              />
              <Button className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-white font-black px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-gray-500/50 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                <span className="mr-2 text-base sm:text-lg">🚀</span>
                Subscribe
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 text-center mt-4">
              Free to subscribe. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Brand Column - Neutral theme */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full blur-md opacity-50"></div>
                <Avatar className="relative h-12 w-12 sm:h-16 sm:w-16 ring-2 ring-gray-600/30">
                  <AvatarImage src="/static/images/avatar.png" alt="Kanta Azassu" />
                  <AvatarFallback className="bg-gradient-to-r from-gray-700 to-black text-white font-bold text-sm sm:text-lg">
                    K
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-700 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">Kanta Azassu</h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Japanese Language Expert
                </p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              Helping 1000+ students master Japanese with innovative teaching methods and cultural immersion.
            </p>

            {/* Stats - Neutral theme */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                <div className="text-lg sm:text-xl font-black text-gray-300">5M+</div>
                <div className="text-xs text-gray-400">Followers</div>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                <div className="text-lg sm:text-xl font-black text-white">1000+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">
              Learning Resources
            </h4>
            <ul className="space-y-3">
              {learningResources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-black text-white mb-4 sm:mb-6">
              Follow & Contact
            </h4>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg mr-2 group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">{social.name}</div>
                    <div className="text-xs text-gray-400">{social.followers}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact CTA - Neutral theme */}
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 text-white font-black py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-sm"
            >
              <Link href="/contact">
                <span className="mr-2">💬</span>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Neutral theme */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Kanta Azassu. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Badge className="bg-gray-700 text-white text-xs animate-pulse">
                ONLINE
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
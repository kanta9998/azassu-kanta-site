'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { allPortfolios } from 'contentlayer/generated'

// Enhanced portfolio data with authority metrics
const portfolioItems = [
  {
    slug: 'tiktok-viral-video',
    title: 'TikTok Viral Video: Japanese Pronunciation Tips',
    date: '2024-01-15',
    summary: 'A viral TikTok video teaching Japanese pronunciation that reached over 1 million views and helped thousands of learners improve their speaking skills.',
    images: ['/static/images/portfolio/tiktok-viral.jpg'],
    category: 'Social Media Content',
    tags: ['TikTok', 'Viral', 'Pronunciation', 'Education'],
    url: '/portfolio/tiktok-viral-video',
    metrics: {
      views: '1.2M',
      engagement: '15.3%',
      shares: '45K',
      impact: 'Viral Success'
    }
  },
  {
    slug: 'brand-collaboration',
    title: 'Brand Collaboration: Japanese Learning App Partnership',
    date: '2024-02-20',
    summary: 'A successful brand collaboration with a leading Japanese learning app, creating educational content that drove significant user engagement and app downloads.',
    images: ['/static/images/portfolio/app-collaboration.jpg'],
    category: 'Brand Partnership',
    tags: ['Brand Partnership', 'App', 'Collaboration', 'Marketing'],
    url: '/portfolio/brand-collaboration',
    metrics: {
      revenue: '$50K+',
      downloads: '100K+',
      retention: '85%',
      impact: 'Commercial Success'
    }
  },
  {
    slug: 'youtube-series',
    title: 'YouTube Educational Series: Japanese Culture Deep Dive',
    date: '2024-03-10',
    summary: 'A comprehensive 12-part YouTube series exploring Japanese culture, traditions, and modern society, combining language learning with cultural education.',
    images: ['/static/images/portfolio/youtube-series.jpg'],
    category: 'Educational Content',
    tags: ['YouTube', 'Education', 'Culture', 'Series'],
    url: '/portfolio/youtube-series',
    metrics: {
      episodes: '12',
      totalViews: '2.5M',
      subscribers: '+25K',
      impact: 'Educational Impact'
    }
  }
]

// Authority statistics
const authorityStats = [
  {
    number: "5M+",
    label: "Total Views",
    icon: "👁️",
    description: "Across all platforms"
  },
  {
    number: "3M+",
    label: "Followers",
    icon: "👥",
    description: "Global community"
  },
  {
    number: "150+",
    label: "Brand Partnerships",
    icon: "🤝",
    description: "Major collaborations"
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    icon: "⭐",
    description: "Student feedback"
  },
  {
    number: "50+",
    label: "Countries Reached",
    icon: "🌍",
    description: "Global impact"
  },
  {
    number: "10K+",
    label: "Students Taught",
    icon: "🎓",
    description: "Success stories"
  }
]

// Achievement badges
const achievements = [
  {
    title: "Top 1% Creator",
    description: "Recognized as top Japanese education creator",
    icon: "🏆",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Viral Content Expert",
    description: "Multiple videos with 1M+ views",
    icon: "🔥",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Brand Partner",
    description: "Trusted by 150+ global brands",
    icon: "🤝",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Cultural Ambassador",
    description: "Bridging cultures through education",
    icon: "🌸",
    color: "from-rose-500 to-pink-500"
  }
]

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Viral Videos', value: 'viral' },
  { name: 'Brand Collaborations', value: 'brand' },
  { name: 'Educational Content', value: 'educational' },
  { name: 'Cultural Content', value: 'cultural' }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const portfolios = allPortfolios.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 🎨 CREATIVE HERO SECTION - Purple/Pink for Creativity & Innovation */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-300/50 to-pink-300/50 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-rose-300/50 to-purple-300/50 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-pink-200/40 to-rose-200/40 rounded-full blur-3xl animate-floating-slow delay-500"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-purple-400/60 rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Creative Badge */}
            <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl animate-glow-pulse border-2 border-white shadow-2xl">
                🎨 CREATIVE PORTFOLIO
              </Badge>
            </div>

            {/* Creative Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up leading-tight px-2">
              <span className="block text-gray-900 mb-2 sm:mb-4 drop-shadow-lg">My Creative</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
                Journey
              </span>
            </h1>

            {/* Creative Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-12 sm:mb-16 lg:mb-20 leading-relaxed animate-fade-in-up max-w-4xl mx-auto font-medium px-2 drop-shadow-sm">
              From <span className="font-black text-purple-700 bg-purple-100 px-2 py-1 rounded-lg">viral content creation</span> to 
              <span className="font-black text-pink-700 bg-pink-100 px-2 py-1 rounded-lg"> educational innovation</span> - 
              discover the work that's <span className="font-black text-rose-700 bg-rose-100 px-2 py-1 rounded-lg">transforming lives</span>
            </p>

            {/* High-Contrast CTA Section - SIGNIFICANTLY ENLARGED */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up px-2">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse"></div>
                
                <Button 
                  size="lg"
                  className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500 text-white font-black px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 text-lg sm:text-xl lg:text-2xl border-4 border-white/30 w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                  asChild
                >
                  <Link href="/contact" className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl animate-bounce">🚀</span>
                    <div className="text-center sm:text-left">
                      <div className="whitespace-nowrap font-black">Start Your Project</div>
                      <div className="text-sm sm:text-base lg:text-lg opacity-90 font-bold">Let's Create Together</div>
                    </div>
                  </Link>
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-4 border-purple-600 text-gray-900 bg-white/90 hover:bg-purple-50 hover:border-pink-600 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full font-black text-lg sm:text-xl lg:text-2xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                asChild
              >
                <Link href="/lessons" className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">📚</span>
                  <div className="text-center sm:text-left">
                    <div className="whitespace-nowrap font-black">Book a Lesson</div>
                    <div className="text-sm sm:text-base lg:text-lg opacity-80 font-bold">Learn Japanese</div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 CREATIVE METRICS SECTION - Purple Gradients for Innovation */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl">
              📊 SUCCESS METRICS
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900 leading-tight drop-shadow-lg">
              Numbers That 
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-gradient-x">
                Tell My Story
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
              Building trust through <span className="font-black text-purple-700 bg-purple-100 px-2 py-1 rounded-lg">consistent results</span> and 
              <span className="font-black text-pink-700 bg-pink-100 px-2 py-1 rounded-lg">measurable impact</span>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {authorityStats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-purple-300 hover:bg-white hover:border-pink-400 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-xl sm:text-2xl lg:text-4xl font-black bg-gradient-to-r ${
                  index % 4 === 0 ? 'from-purple-600 to-pink-600' :
                  index % 4 === 1 ? 'from-pink-600 to-rose-600' :
                  index % 4 === 2 ? 'from-rose-600 to-purple-600' :
                  'from-indigo-600 to-purple-600'
                } bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-bold mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 ACHIEVEMENT BADGES SECTION - Creative Purple Theme */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #a855f7 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)`,
            backgroundSize: '50px 50px sm:100px sm:100px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl">
              🏆 ACHIEVEMENTS
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg">
              Recognition & 
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-gradient-x">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Industry recognition and milestones that establish <span className="font-black text-purple-300 bg-purple-900/50 px-2 py-1 rounded-lg">credibility</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500/30 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{achievement.icon}</div>
                  <h3 className="text-lg font-black text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CREATIVE CTA SECTION - Purple/Pink Gradients */}
      <section className="py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-rose-600/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-purple-300 p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 drop-shadow-lg">
              Ready to Create
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Viral Success?
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on your next big project. From <span className="font-black text-purple-700 bg-purple-100 px-2 py-1 rounded-lg">content creation</span> to 
              <span className="font-black text-pink-700 bg-pink-100 px-2 py-1 rounded-lg"> brand partnerships</span>, 
              I bring proven expertise and measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse"></div>
                
                <Button
                  asChild
                  size="lg"
                  className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black px-10 sm:px-14 lg:px-18 py-6 sm:py-8 lg:py-10 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105 text-xl sm:text-2xl lg:text-3xl border-4 border-white/30 w-full sm:w-auto min-h-[90px] sm:min-h-[110px] lg:min-h-[130px]"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl animate-bounce">🚀</span>
                    <span className="font-black">Start a Project</span>
                  </Link>
                </Button>
              </div>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/90 backdrop-blur-sm border-4 border-purple-600 text-gray-900 hover:bg-purple-50 hover:border-pink-600 px-10 sm:px-14 lg:px-18 py-6 sm:py-8 lg:py-10 rounded-full font-black text-xl sm:text-2xl lg:text-3xl transition-all duration-500 hover:shadow-2xl w-full sm:w-auto min-h-[90px] sm:min-h-[110px] lg:min-h-[130px]"
              >
                <Link href="/lessons" className="flex items-center justify-center gap-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl">📚</span>
                  <span className="font-black">Book a Lesson</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
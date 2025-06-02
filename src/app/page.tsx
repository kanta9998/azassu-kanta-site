import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteMetadata } from '@/../data/siteMetadata'

const socialIcons = {
  tiktok: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ),
  youtube: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  instagram: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a5.918 5.918 0 0 0-2.14 1.393A5.918 5.918 0 0 0 .503 4.021c-.184.484-.306 1.058-.34 2.005C.128 7.024.115 7.431.115 11.052s.013 4.028.048 4.976c.034.947.156 1.521.34 2.005a5.918 5.918 0 0 0 1.393 2.14 5.918 5.918 0 0 0 2.14 1.393c.484.184 1.058.306 2.005.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.005-.34a5.918 5.918 0 0 0 2.14-1.393 5.918 5.918 0 0 0 1.393-2.14c.184-.484.306-1.058.34-2.005.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.34-2.005a5.918 5.918 0 0 0-1.393-2.14A5.918 5.918 0 0 0 19.078.503c-.484-.184-1.058-.306-2.005-.34C16.125.013 15.718 0 12.017 0zm0 2.164c3.573 0 3.99.014 5.402.048.947.034 1.462.156 1.805.26.454.176.778.387 1.12.729.342.342.553.666.729 1.12.104.343.226.858.26 1.805.034 1.412.048 1.829.048 5.402s-.014 3.99-.048 5.402c-.034.947-.156 1.462-.26 1.805-.176.454-.387.778-.729 1.12-.342.342-.666.553-1.12.729-.343.104-.858.226-1.805.26-1.412.034-1.829.048-5.402.048s-3.99-.014-5.402-.048c-.947-.034-1.462-.156-1.805-.26-.454-.176-.778-.387-1.12-.729-.342-.342-.553-.666-.729-1.12-.104-.343-.226-.858-.26-1.805-.034-1.412-.048-1.829-.048-5.402s.014-3.99.048-5.402c.034-.947.156-1.462.26-1.805.176-.454.387-.778.729-1.12.342-.342.666-.553 1.12-.729.343-.104.858-.226 1.805-.26 1.412-.034 1.829-.048 5.402-.048z"/>
      <circle cx="12.017" cy="12.017" r="3.708"/>
      <circle cx="18.408" cy="5.608" r="1.378"/>
    </svg>
  ),
  twitter: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const features = [
  {
    title: "1-on-1 Personalized Lessons",
    description: "Tailored lessons designed specifically for your learning goals and pace",
    icon: "👨‍🏫",
    gradient: "from-orange-500 to-red-500",
    stats: "100% Personalized"
  },
  {
    title: "Flexible Scheduling",
    description: "Book lessons at times that work for your busy schedule",
    icon: "📅",
    gradient: "from-red-500 to-pink-500",
    stats: "24/7 Available"
  },
  {
    title: "Cultural Immersion",
    description: "Learn not just the language, but the culture behind it",
    icon: "🎌",
    gradient: "from-red-500 to-orange-500",
    stats: "Real Culture"
  },
  {
    title: "Proven Results",
    description: "Join 1000+ students who achieved fluency with my method",
    icon: "🏆",
    gradient: "from-orange-500 to-red-500",
    stats: "95% Success"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Professional",
    content: "Kanta's teaching method is incredible! I went from zero to conversational Japanese in just 6 months. The personalized approach made all the difference.",
    avatar: "/static/images/testimonial-1.jpg",
    rating: 5,
    achievement: "Zero to Conversational in 6 months",
    flag: "🇺🇸"
  },
  {
    name: "Mike Chen",
    role: "University Student",
    content: "The cultural insights Kanta shares make learning Japanese so much more meaningful and fun. I passed JLPT N3 on my first try!",
    avatar: "/static/images/testimonial-2.jpg",
    rating: 5,
    achievement: "Passed JLPT N3 First Try",
    flag: "🇨🇦"
  },
  {
    name: "Emma Rodriguez",
    role: "Travel Enthusiast",
    content: "Thanks to Kanta, I was able to navigate Japan confidently during my trip. The practical phrases and cultural tips were invaluable.",
    avatar: "/static/images/testimonial-3.jpg",
    rating: 5,
    achievement: "Traveled Japan Confidently",
    flag: "🇪🇸"
  }
]

const stats = [
  { number: "1000+", label: "Students Taught", icon: "👥" },
  { number: "5.0★", label: "Average Rating", icon: "⭐" },
  { number: "3M+", label: "Video Views", icon: "📺" },
  { number: "95%", label: "Success Rate", icon: "🎯" }
]

export default function Home() {
  const socialLinks = [
    { 
      platform: 'tiktok', 
      url: siteMetadata.tiktok, 
      followers: '2M+ followers',
      color: 'from-orange-500 to-red-500',
      description: 'Daily Japanese tips & viral content'
    },
    { 
      platform: 'youtube', 
      url: siteMetadata.youtube, 
      followers: '500K+ subscribers',
      color: 'from-red-500 to-red-600',
      description: 'In-depth lessons & tutorials'
    },
    { 
      platform: 'instagram', 
      url: siteMetadata.instagram, 
      followers: '300K+ followers',
      color: 'from-red-600 to-orange-600',
      description: 'Behind-the-scenes & culture'
    },
    { 
      platform: 'twitter', 
      url: siteMetadata.twitter, 
      followers: '100K+ followers',
      color: 'from-orange-600 to-red-700',
      description: 'Quick tips & community'
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 🔥 ENERGETIC HERO SECTION - Orange/Red for Maximum Dopamine */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-red-50 to-pink-50 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-orange-300/50 to-red-300/50 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-red-300/50 to-orange-300/50 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-red-200/40 to-orange-200/40 rounded-full blur-3xl animate-floating-slow delay-500"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-orange-400/60 rounded-full animate-particle-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-5xl">
            {/* High-Contrast Badge */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg animate-bounce border-2 border-white shadow-2xl">
                🔥 TRANSFORM YOUR JAPANESE TODAY
              </Badge>
            </div>

            {/* Profile Photo Section */}
            <div className="mb-8 sm:mb-12 animate-fade-in-up">
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                {/* Multiple Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-2xl opacity-60 animate-pulse scale-125"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-40 animate-pulse delay-300 scale-115"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-30 animate-pulse delay-600 scale-110"></div>
                
                <Avatar className="relative w-full h-full border-4 sm:border-6 border-white/30 shadow-2xl ring-4 sm:ring-6 ring-orange-600/40 hover:scale-105 transition-transform duration-500">
                  <AvatarImage src="/static/images/avatar.png" alt="Kanta Azassu" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-2xl sm:text-3xl lg:text-4xl">
                    K
                  </AvatarFallback>
                </Avatar>
                
                {/* Live Indicator */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-full border-4 border-white animate-pulse flex items-center justify-center shadow-xl">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-black px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm animate-bounce border-2 border-white shadow-xl">
                    🏆 #1 Teacher
                  </Badge>
                </div>
              </div>
              
              {/* Name and Title */}
              <div className="mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2 drop-shadow-lg">
                  Kanta Azassu
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-bold bg-orange-100 px-4 py-2 rounded-full inline-block">
                  🇯🇵 Japanese Language Expert
                </p>
              </div>
            </div>

            {/* High-Contrast Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 animate-fade-in-up leading-tight">
              <span className="block text-gray-900 mb-2 sm:mb-4 drop-shadow-lg">Master Japanese</span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
                With Confidence
              </span>
            </h1>

            {/* High-Contrast Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 mb-8 sm:mb-12 leading-relaxed animate-fade-in-up max-w-4xl mx-auto font-medium px-4 drop-shadow-sm">
              Join <span className="font-black text-orange-700 bg-orange-100 px-2 py-1 rounded-lg">10,000+ happy students</span> who achieved 
              <span className="font-black text-red-700 bg-red-100 px-2 py-1 rounded-lg"> fluency</span> with my 
              <span className="font-black text-pink-700 bg-pink-100 px-2 py-1 rounded-lg"> proven method</span>
            </p>

            {/* High-Contrast CTA Section - SIGNIFICANTLY ENLARGED */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up px-4">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse"></div>
                
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-500 hover:via-red-500 hover:to-pink-500 text-white font-black px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 text-lg sm:text-xl lg:text-2xl border-4 border-white/30 w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                  asChild
                >
                  <Link href="/lessons" className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl animate-bounce">🚀</span>
                    <div className="text-center sm:text-left">
                      <div className="whitespace-nowrap font-black">Start Learning Now</div>
                      <div className="text-sm sm:text-base lg:text-lg opacity-90 font-bold">First lesson ¥1,250</div>
                    </div>
                  </Link>
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-4 border-orange-600 text-gray-900 bg-white/90 hover:bg-orange-50 hover:border-red-600 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full font-black text-lg sm:text-xl lg:text-2xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                asChild
              >
                <Link href="#success-stories" className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">💝</span>
                  <div className="text-center sm:text-left">
                    <div className="whitespace-nowrap font-black">Success Stories</div>
                    <div className="text-sm sm:text-base lg:text-lg opacity-80 font-bold">10,000+ Happy Students</div>
                  </div>
                </Link>
              </Button>
            </div>
            
            {/* High-Contrast Social Proof */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up px-4">
              {[
                { icon: "⭐", number: "5.0", label: "Student Rating", color: "from-orange-500 to-red-500" },
                { icon: "👥", number: "10K+", label: "Happy Students", color: "from-orange-500 to-red-500" },
                { icon: "🎯", number: "95%", label: "Success Rate", color: "from-red-500 to-orange-500" },
                { icon: "💝", number: "3x", label: "Faster Results", color: "from-red-600 to-orange-600" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border-2 border-orange-300 hover:bg-white hover:border-red-400 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 VIRAL CONTENT SECTION - Dark with Red Accents for Excitement */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-red-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #dc2626 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #991b1b 0%, transparent 50%)`,
            backgroundSize: '50px 50px sm:100px sm:100px'
          }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-pink-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl">
              🔥 VIRAL CONTENT CREATOR
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-white leading-tight drop-shadow-lg">
              Follow My 
              <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                Viral Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Join <span className="font-black text-red-400 bg-red-900/50 px-2 py-1 rounded-lg">millions</span> learning Japanese through my 
              <span className="font-black text-white bg-white/20 px-2 py-1 rounded-lg">engaging content</span> across all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {socialLinks.map(({ platform, url, followers, color, description }, index) => (
              <Card 
                key={platform} 
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-black/70 to-red-900/30 backdrop-blur-xl hover:from-black/90 hover:to-red-800/50 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] bg-gradient-to-br from-black to-red-900 rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                  {/* Platform Icon */}
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 scale-110"></div>
                    <div className={`relative mx-auto flex h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-r ${color} text-white group-hover:scale-125 transition-transform duration-500 shadow-2xl border-2 border-white/20`}>
                      {socialIcons[platform as keyof typeof socialIcons]}
                    </div>
                    
                    {/* Live Indicator */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full border-2 border-white animate-pulse flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="font-black text-lg sm:text-xl lg:text-2xl capitalize text-white mb-2 sm:mb-3 group-hover:text-red-300 transition-all duration-300">
                    {platform}
                  </h3>
                  
                  <div className="mb-3 sm:mb-4">
                    <p className={`text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      {followers}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{description}</p>
                  </div>

                  {/* Engagement Stats */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs">
                    <div className="bg-black/50 rounded-lg p-2 border border-red-500/30">
                      <div className="text-white font-bold text-sm sm:text-base">98%</div>
                      <div className="text-gray-300 text-xs">Engagement</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-2 border border-red-500/30">
                      <div className="text-white font-bold text-sm sm:text-base">Daily</div>
                      <div className="text-gray-300 text-xs">Content</div>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${color} hover:shadow-2xl transition-all duration-500 text-white border-0 rounded-full font-bold text-sm sm:text-base lg:text-lg py-2 sm:py-3 group-hover:scale-105 shadow-lg`}
                    asChild
                  >
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      Follow Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-red-500/30 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                Ready to Go Viral with Your Japanese?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 px-4">
                Book your first lesson and start creating content that gets millions of views!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-lg w-full sm:w-auto border-2 border-white/20"
                asChild
              >
                <Link href="/lessons" className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl">🎬</span>
                  <span className="whitespace-nowrap">Book Free Trial Lesson</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section - Orange/Red theme to match header/footer */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background Elements - Orange/Red style */}
        <div className="absolute inset-0 opacity-30 sm:opacity-50">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-2xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-2xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold">
              ✨ PROVEN METHOD
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight">
              Why Students 
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent animate-gradient-x">
                Choose Me
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Experience the difference with my <span className="font-bold text-orange-600">revolutionary teaching methodology</span> that gets 
              <span className="font-bold text-red-600"> guaranteed results</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl hover:bg-white/90 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Background Gradient - Orange/Red */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Icon Background - Responsive */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                  {/* Enhanced Icon - Orange/Red accent */}
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>
                    <div className="relative text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 filter drop-shadow-lg">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="font-black text-base sm:text-lg lg:text-xl text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-all duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Progress Indicator - Orange/Red */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-3 sm:mb-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 group-hover:w-full"
                      style={{ width: '0%' }}
                    ></div>
                  </div>

                  {/* Feature Stats - Mobile Responsive */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-50 rounded-lg p-2 group-hover:bg-gray-100 transition-colors">
                      <div className="font-bold text-gray-900 text-sm sm:text-base">100%</div>
                      <div className="text-gray-600 text-xs">Success</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 group-hover:bg-gray-100 transition-colors">
                      <div className="font-bold text-gray-900 text-sm sm:text-base">Fast</div>
                      <div className="text-gray-600 text-xs">Results</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA - Orange/Red theme */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern - Orange/Red style */}
              <div className="absolute inset-0 opacity-5 sm:opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, white 0%, transparent 50%), 
                                   radial-gradient(circle at 80% 80%, white 0%, transparent 50%)`,
                  backgroundSize: '30px 30px sm:50px sm:50px'
                }}></div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4">Ready to Experience the Difference?</h3>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-4">Join thousands of successful students who transformed their Japanese skills</p>
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="/lessons" className="flex items-center justify-center gap-2">
                    <span className="text-lg sm:text-xl">🎯</span>
                    <span className="whitespace-nowrap">Start Your Transformation</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Testimonials Section - Orange/Red theme to match header/footer */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Dynamic Background - Orange/Red style */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-orange-800/20 to-red-700/20 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-gray-700/20 to-black/20 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-full blur-3xl animate-floating-slow delay-500"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold animate-glow-pulse">
              🏆 SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
              Student 
              <span className="block bg-gradient-to-r from-orange-500 via-red-600 to-orange-700 bg-clip-text text-transparent animate-gradient-x">
                Transformations
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Real results from <span className="font-bold text-orange-400">real students</span> who transformed their 
              <span className="font-bold text-white"> Japanese skills</span> with my proven method
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="group relative overflow-hidden border-0 bg-black/40 backdrop-blur-xl hover:bg-black/60 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-orange-500/25"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Border Effect - Orange/Red */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                  <div className="bg-gray-900 h-full w-full rounded-lg"></div>
                </div>
                
                <CardContent className="relative p-4 sm:p-6 lg:p-8">
                  {/* Enhanced Header - Orange/Red theme */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="relative">
                      {/* Multiple Glow Effects - Orange/Red */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-md sm:blur-lg opacity-60 animate-pulse scale-110"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-sm sm:blur-md opacity-40 animate-pulse delay-300 scale-105"></div>
                      
                      <Avatar className="relative h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20 border-2 sm:border-4 border-white/20 shadow-2xl ring-2 sm:ring-4 ring-orange-600/30">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                        <AvatarFallback className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-sm sm:text-base lg:text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Achievement Badge - Orange/Red */}
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-orange-600 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center animate-bounce-slow">
                        <span className="text-white text-xs sm:text-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="ml-4 sm:ml-6 flex-1">
                      <h4 className="font-black text-lg sm:text-xl text-white mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-300 mb-2 text-sm sm:text-base">{testimonial.role}</p>
                      <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 font-bold text-xs sm:text-sm">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Enhanced Rating - Orange/Red theme */}
                  <div className="flex mb-4 sm:mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span 
                        key={i} 
                        className="text-orange-500 text-xl sm:text-2xl animate-neon-glow"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  
                  {/* Quote with Enhanced Styling - Orange/Red theme */}
                  <blockquote className="text-gray-200 italic leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 relative">
                    <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-3xl sm:text-4xl lg:text-6xl text-orange-500/30 font-serif">&ldquo;</div>
                    <div className="relative z-10 px-4 sm:px-6">{testimonial.content}</div>
                    <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-4 text-3xl sm:text-4xl lg:text-6xl text-orange-500/30 font-serif rotate-180">&rdquo;</div>
                  </blockquote>

                  {/* Progress Metrics - Orange/Red theme */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                    <div className="text-center bg-black/30 rounded-lg p-2 sm:p-3">
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-orange-400">90</div>
                      <div className="text-xs text-gray-400">Days</div>
                    </div>
                    <div className="text-center bg-black/30 rounded-lg p-2 sm:p-3">
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-white">100%</div>
                      <div className="text-xs text-gray-400">Success</div>
                    </div>
                    <div className="text-center bg-black/30 rounded-lg p-2 sm:p-3">
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-orange-400">N3</div>
                      <div className="text-xs text-gray-400">Level</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action - Orange/Red theme */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-orange-600/20 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
                Your transformation starts with a single lesson. Book now and see results in just 30 days!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-xl w-full sm:w-auto"
                asChild
              >
                <Link href="/lessons" className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl">🌟</span>
                  <span className="whitespace-nowrap">Start My Success Story</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

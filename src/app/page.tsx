import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteMetadata } from '@/../data/siteMetadata'
import BackgroundEffects from '@/components/common/BackgroundEffects'
import CTAButton from '@/components/common/CTAButton'
import SectionHeader from '@/components/common/SectionHeader'
import { 
  socialIcons, 
  homepageFeatures, 
  homepageTestimonials, 
  homepageStats 
} from '@/data/constants'

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
        <BackgroundEffects theme="orange" particleCount={20} />

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
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-bold">
                  🇯🇵 Japanese Teacher • 📱 Content Creator • 🎌 Cultural Ambassador
                </p>
              </div>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up leading-tight">
              <span className="block text-gray-900 mb-2 sm:mb-4 drop-shadow-lg">Master Japanese</span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
                In 90 Days
              </span>
            </h1>

            {/* High-Impact Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 mb-12 sm:mb-16 lg:mb-20 leading-relaxed animate-fade-in-up max-w-4xl mx-auto font-medium px-4 drop-shadow-sm">
              Join <span className="font-black text-orange-700 bg-orange-100 px-2 py-1 rounded-lg">1000+ successful students</span> who achieved 
              <span className="font-black text-red-700 bg-red-100 px-2 py-1 rounded-lg"> fluency</span> with my 
              <span className="font-black text-pink-700 bg-pink-100 px-2 py-1 rounded-lg"> proven method</span>
            </p>

            {/* High-Contrast CTA Section - SIGNIFICANTLY ENLARGED */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up px-4">
              <CTAButton
                href="/lessons"
                theme="orange"
                size="large"
                icon="🚀"
                subtitle="First lesson ¥1,250"
              >
                Start Learning Now
              </CTAButton>
              
              <CTAButton
                href="#features"
                variant="secondary"
                theme="orange"
                size="large"
                icon="💝"
                subtitle="10,000+ Happy Students"
              >
                Success Stories
              </CTAButton>
            </div>
            
            {/* High-Contrast Social Proof */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up">
              {homepageStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border-2 border-orange-300 hover:bg-white hover:border-red-400 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${
                    index % 4 === 0 ? 'from-orange-600 to-red-600' :
                    index % 4 === 1 ? 'from-red-600 to-pink-600' :
                    index % 4 === 2 ? 'from-pink-600 to-orange-600' :
                    'from-orange-500 to-red-500'
                  } bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 FEATURES SECTION - Gradient Orange/Red for Energy */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 sm:opacity-50">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-2xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-red-200 to-orange-200 rounded-full blur-2xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ text: "🔥 WHY CHOOSE ME", icon: "🔥" }}
            title="Revolutionary"
            subtitle="Learning Experience"
            description="Experience the difference with personalized lessons designed for maximum results and cultural immersion"
            theme="orange"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {homepageFeatures.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl border-2 border-orange-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-4 sm:p-6 lg:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-110`}></div>
                    <div className="relative text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 filter drop-shadow-lg">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="font-black text-base sm:text-lg lg:text-xl text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors">
                    {feature.description}
                  </p>

                  <Badge className={`bg-gradient-to-r ${feature.gradient} text-white border-0 font-bold text-xs sm:text-sm shadow-lg`}>
                    {feature.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-orange-50 to-red-50 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ text: "🌟 SUCCESS STORIES", icon: "🌟" }}
            title="Real Students,"
            subtitle="Real Results"
            description="See how my students transformed their Japanese skills and achieved their dreams"
            theme="orange"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {homepageTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-xl border border-orange-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Avatar className="h-16 w-16 sm:h-20 sm:w-20 ring-4 ring-orange-200">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-orange-500 text-white font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 text-2xl">{testimonial.flag}</div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h4 className="font-black text-lg sm:text-xl text-gray-800 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-orange-400 text-lg">★</span>
                        ))}
                      </div>
                      <Badge className="bg-orange-100 text-orange-800 text-xs font-bold">
                        {testimonial.achievement}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 📱 SOCIAL MEDIA SECTION */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={{ text: "📱 FOLLOW MY JOURNEY", icon: "📱" }}
            title="Join My"
            subtitle="Learning Community"
            description="Get daily Japanese tips, cultural insights, and motivation from my social media channels"
            theme="orange"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-500 text-white text-center shadow-xl hover:shadow-2xl border-4 border-white/30`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-300">
                  {socialIcons[social.platform as keyof typeof socialIcons]}
                </div>
                
                <h3 className="font-black text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 capitalize">
                  {social.platform}
                </h3>
                
                <p className="text-sm sm:text-base opacity-90 mb-2 sm:mb-3 font-bold">
                  {social.followers}
                </p>
                
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                  {social.description}
                </p>
                
                <div className="absolute inset-0 bg-white/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA SECTION */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-white via-orange-100 to-red-100 bg-clip-text text-transparent animate-gradient-x">
              Japanese Journey?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Join the revolution. Master Japanese. Transform your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <CTAButton
              href="/lessons"
              theme="orange"
              size="large"
              icon="🚀"
              subtitle="¥1,250 • 50% OFF"
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:via-red-600 hover:to-red-700"
            >
              Book Your Trial Now
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const lessonFeatures = [
  {
    title: "AI-Powered Personalization",
    description: "Every lesson adapts to your learning style with cutting-edge AI technology",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500",
    stats: "98% Accuracy"
  },
  {
    title: "Cultural Immersion VR",
    description: "Experience Japan virtually with our revolutionary VR cultural sessions",
    icon: "🥽",
    gradient: "from-cyan-500 to-teal-500",
    stats: "360° Experience"
  },
  {
    title: "Real-time Conversation",
    description: "Practice with native speakers through live video sessions worldwide",
    icon: "🌍",
    gradient: "from-teal-500 to-emerald-500",
    stats: "24/7 Available"
  },
  {
    title: "Gamified Learning",
    description: "Level up your Japanese with interactive games and achievement systems",
    icon: "🎮",
    gradient: "from-emerald-500 to-green-500",
    stats: "10K+ Points"
  },
  {
    title: "Neural Progress Tracking",
    description: "Advanced analytics track your brain's language acquisition patterns",
    icon: "🧠",
    gradient: "from-indigo-500 to-blue-500",
    stats: "Real-time Data"
  },
  {
    title: "Lifetime Mastery",
    description: "Join our exclusive community with lifetime access and support",
    icon: "♾️",
    gradient: "from-blue-500 to-cyan-500",
    stats: "Forever Access"
  }
]

const pricingPlans = [
  {
    name: "Discovery Trial",
    price: "¥1,250",
    originalPrice: "¥2,500",
    duration: "30 minutes",
    description: "Perfect introduction to revolutionary learning",
    features: [
      "AI-powered level assessment",
      "Personalized learning roadmap",
      "VR cultural preview session",
      "1-on-1 consultation with Kanta",
      "Custom study materials"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
    savings: "50% OFF"
  },
  {
    name: "Transformation Package",
    price: "¥2,800",
    originalPrice: "¥3,500",
    duration: "60 minutes",
    description: "Most popular choice for serious learners",
    features: [
      "Full immersive 60-minute session",
      "VR cultural immersion experience",
      "AI-customized learning materials",
      "Real-time progress analytics",
      "24/7 WhatsApp support",
      "Homework with video feedback"
    ],
    popular: true,
    color: "from-cyan-500 to-teal-500",
    savings: "20% OFF"
  },
  {
    name: "Mastery Accelerator",
    price: "¥22,500",
    originalPrice: "¥30,000",
    duration: "10 lessons + bonuses",
    description: "Ultimate package for fluency seekers",
    features: [
      "10 x 60-minute premium lessons",
      "Unlimited VR cultural sessions",
      "Priority booking (24h guarantee)",
      "Custom AI tutor companion",
      "Weekly neural progress reports",
      "Exclusive community access",
      "Live group practice sessions",
      "Certificate of completion"
    ],
    popular: false,
    color: "from-teal-500 to-emerald-500",
    savings: "25% OFF"
  }
]

const successStories = [
  {
    name: "Alex Thompson",
    achievement: "JLPT N2 → Fluent in 4 months",
    story: "From struggling with basic conversation to leading business meetings in Tokyo",
    image: "/static/images/student-1.jpg",
    rating: 5,
    improvement: "+400% fluency",
    flag: "🇺🇸"
  },
  {
    name: "Maria Garcia",
    achievement: "Zero → Conversational in 3 months",
    story: "Now confidently dating a Japanese partner and planning to move to Osaka",
    image: "/static/images/student-2.jpg",
    rating: 5,
    improvement: "+∞% from zero",
    flag: "🇪🇸"
  },
  {
    name: "David Kim",
    achievement: "Business Japanese Mastery",
    story: "Promoted to Japan division manager after mastering keigo and business culture",
    image: "/static/images/student-3.jpg",
    rating: 5,
    improvement: "+250% confidence",
    flag: "🇰🇷"
  }
]

const guarantees = [
  {
    icon: "🎯",
    title: "Results Guarantee",
    description: "See measurable progress in 30 days or full refund"
  },
  {
    icon: "⚡",
    title: "Speed Promise",
    description: "3x faster learning than traditional methods"
  },
  {
    icon: "🔒",
    title: "Lifetime Support",
    description: "Unlimited access to materials and community"
  },
  {
    icon: "🏆",
    title: "Success Assurance",
    description: "95% of students achieve their goals"
  }
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* 🧠 LEARNING-FOCUSED HERO SECTION - Blue/Teal for Concentration & Trust */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-300/50 to-cyan-300/50 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-teal-300/50 to-blue-300/50 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl animate-floating-slow delay-500"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/60 rounded-full animate-particle-float"
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
            {/* Learning-Focused Badge */}
            <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl animate-bounce border-2 border-white shadow-2xl">
                🧠 LIMITED TIME: 50% OFF FIRST LESSON
              </Badge>
            </div>

            {/* Learning-Focused Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up leading-tight px-2">
              <span className="block text-gray-900 mb-2 sm:mb-4 drop-shadow-lg">Transform Your</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
                Japanese in 90 Days
              </span>
            </h1>

            {/* Learning-Focused Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 mb-12 sm:mb-16 lg:mb-20 leading-relaxed animate-fade-in-up max-w-4xl mx-auto font-medium px-2 drop-shadow-sm">
              Join <span className="font-black text-blue-700 bg-blue-100 px-2 py-1 rounded-lg">1000+ successful students</span> who achieved 
              <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-1 rounded-lg"> fluency</span> with my 
              <span className="font-black text-teal-700 bg-teal-100 px-2 py-1 rounded-lg"> AI-powered method</span>
            </p>

            {/* High-Contrast CTA Section - SIGNIFICANTLY ENLARGED */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up px-2">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse"></div>
                
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-black px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 text-lg sm:text-xl lg:text-2xl border-4 border-white/30 w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                  asChild
                >
                  <Link href="#pricing" className="flex items-center justify-center gap-3 sm:gap-4">
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
                className="border-4 border-blue-600 text-gray-900 bg-white/90 hover:bg-blue-50 hover:border-cyan-600 px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 rounded-full font-black text-lg sm:text-xl lg:text-2xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm w-full sm:w-auto min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
                asChild
              >
                <Link href="#features" className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">💝</span>
                  <div className="text-center sm:text-left">
                    <div className="whitespace-nowrap font-black">Success Stories</div>
                    <div className="text-sm sm:text-base lg:text-lg opacity-80 font-bold">10,000+ Happy Students</div>
                  </div>
                </Link>
              </Button>
            </div>
            
            {/* Learning-Focused Social Proof */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up px-2">
              {[
                { icon: "⭐", number: "5.0", label: "Perfect Rating", color: "from-yellow-500 to-blue-500" },
                { icon: "👥", number: "1000+", label: "Students Taught", color: "from-blue-500 to-cyan-500" },
                { icon: "🎯", number: "95%", label: "Success Rate", color: "from-cyan-500 to-teal-500" },
                { icon: "⚡", number: "3x", label: "Faster Learning", color: "from-teal-500 to-emerald-500" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border-2 border-blue-300 hover:bg-white hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
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

      {/* 🚀 AI-POWERED FEATURES SECTION - Gradient Blue/Teal for Innovation */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 sm:opacity-50">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur-2xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl">
              🤖 AI-POWERED LEARNING
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight drop-shadow-lg">
              Revolutionary 
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Learning Experience
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
              Experience the future of language learning with <span className="font-black text-blue-700 bg-blue-100 px-2 py-1 rounded-lg">cutting-edge technology</span> and 
              <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-1 rounded-lg"> personalized AI tutoring</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {lessonFeatures.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl border-2 border-blue-300"
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

                  <h3 className="font-black text-base sm:text-lg lg:text-xl text-gray-900 mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
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

      {/* Revolutionary Pricing Section - Blue/Cyan theme for learning focus */}
      <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold animate-glow-pulse">
              💝 LIMITED TIME OFFER
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-800 leading-tight">
              Choose Your 
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Transformation
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Flexible packages designed for <span className="font-bold text-blue-700">maximum results</span> and 
              <span className="font-bold text-cyan-700"> guaranteed success</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-105 shadow-lg hover:shadow-xl border border-blue-200 ${
                  plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm animate-bounce whitespace-nowrap">
                      🔥 MOST POPULAR
                    </Badge>
                  </div>
                )}

                {plan.savings && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-blue-600 text-white font-bold text-xs animate-pulse">
                      {plan.savings}
                    </Badge>
                  </div>
                )}
                
                <CardContent className="relative p-6 sm:p-8 text-center">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-800 mb-2 sm:mb-4">
                      {plan.name}
                    </h3>
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg sm:text-xl text-gray-500 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-600 text-sm sm:text-base">/{plan.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                        <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-500 text-white border-0 rounded-full font-bold text-sm sm:text-base lg:text-lg py-3 sm:py-4 group-hover:scale-105 ${
                      plan.popular ? 'animate-glow-pulse' : ''
                    }`}
                    asChild
                  >
                    <Link href="/contact">
                      {plan.popular ? '🚀 Start Transformation' : '📞 Book Now'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantees Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 text-center mb-8 sm:mb-12">
              Our <span className="text-blue-500">Guarantees</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {guarantees.map((guarantee, index) => (
                <div 
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-blue-200 hover:bg-white hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{guarantee.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{guarantee.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold">
              🏆 SUCCESS STORIES
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-800 leading-tight">
              Real Students,
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
                Real Results
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <Card 
                key={story.name} 
                className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-xl border border-blue-200"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Avatar className="h-16 w-16 sm:h-20 sm:w-20 ring-4 ring-blue-200">
                        <AvatarImage src={story.image} alt={story.name} />
                        <AvatarFallback className="bg-blue-500 text-white font-bold">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 text-2xl">{story.flag}</div>
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h4 className="font-black text-lg sm:text-xl text-gray-800 mb-1">
                        {story.name}
                      </h4>
                      <div className="flex mb-2">
                        {[...Array(story.rating)].map((_, i) => (
                          <span key={i} className="text-blue-400 text-lg">★</span>
                        ))}
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 text-xs font-bold">
                        {story.improvement}
                      </Badge>
                    </div>
                  </div>
                  
                  <h5 className="font-bold text-blue-600 mb-3 text-sm sm:text-base">
                    {story.achievement}
                  </h5>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    "{story.story}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent animate-gradient-x">
              Transformation?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Join the revolution. Transform your Japanese. Change your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <div className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse"></div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white font-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 text-sm sm:text-base lg:text-xl border-4 border-white/30 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact" className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl lg:text-2xl animate-bounce">🚀</span>
                  <div className="text-center sm:text-left">
                    <div className="whitespace-nowrap">Book Your Trial Now</div>
                    <div className="text-xs sm:text-sm opacity-90 font-bold">¥1,250 • 50% OFF</div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
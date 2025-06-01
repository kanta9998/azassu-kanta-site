'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Instant messaging for quick questions",
    icon: "💬",
    action: "Message Now",
    color: "from-green-500 to-emerald-500",
    response: "Usually responds within 1 hour"
  },
  {
    title: "Email",
    description: "Detailed inquiries and collaborations",
    icon: "📧",
    action: "Send Email",
    color: "from-blue-500 to-cyan-500",
    response: "Response within 24 hours"
  },
  {
    title: "Video Call",
    description: "Schedule a consultation call",
    icon: "📹",
    action: "Book Call",
    color: "from-cyan-500 to-teal-500",
    response: "Available 7 days a week"
  }
]

const socialPlatforms = [
  {
    name: "TikTok",
    handle: "@azassukanta",
    followers: "2.5M followers",
    icon: "🎵",
    color: "from-blue-500 to-cyan-500",
    url: "https://tiktok.com/@azassukanta"
  },
  {
    name: "YouTube",
    handle: "@azassukanta",
    followers: "850K subscribers",
    icon: "📺",
    color: "from-cyan-500 to-teal-500",
    url: "https://youtube.com/@azassukanta"
  },
  {
    name: "Instagram",
    handle: "@azassu.kanta",
    followers: "1.2M followers",
    icon: "📸",
    color: "from-teal-500 to-blue-500",
    url: "https://instagram.com/azassu.kanta"
  },
  {
    name: "Twitter",
    handle: "@azassukanta",
    followers: "450K followers",
    icon: "🐦",
    color: "from-blue-600 to-cyan-600",
    url: "https://twitter.com/azassukanta"
  }
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'lesson'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Success Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-300/50 to-cyan-300/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-teal-300/50 to-blue-300/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8 animate-bounce">
            <div className="text-6xl sm:text-8xl lg:text-9xl mb-4 sm:mb-6">🎉</div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Message Sent Successfully!
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            Thank you for reaching out! I'll get back to you within 24 hours. 
            In the meantime, follow me on social media for daily Japanese tips!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button 
              asChild 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-lg border-4 border-white/30"
            >
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl">🏠</span>
                <span>Back to Home</span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white/90 backdrop-blur-xl border-4 border-blue-600 text-gray-900 hover:bg-blue-50 hover:border-cyan-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base lg:text-lg"
            >
              <Link href="/lessons" className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl">📚</span>
                <span>Book a Lesson</span>
              </Link>
            </Button>
          </div>

          {/* Social Media Follow CTAs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${platform.color} hover:scale-105 transition-all duration-300 text-white text-center shadow-lg`}
              >
                <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{platform.icon}</div>
                <div className="font-bold text-xs sm:text-sm">{platform.name}</div>
                <div className="text-xs opacity-90">{platform.followers.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* 🤝 TRUST-BUILDING HERO SECTION - Blue/Cyan for Trust & Reliability */}
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Trust Badge */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up">
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg animate-glow-pulse border-2 border-white shadow-2xl">
                🤝 LET'S CONNECT
              </Badge>
            </div>

            {/* Trust Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 sm:mb-6 animate-fade-in-up leading-tight">
              <span className="block text-gray-900 mb-2 sm:mb-4 drop-shadow-lg">Ready to</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
                Transform?
              </span>
            </h1>

            {/* Trust Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-8 sm:mb-12 leading-relaxed animate-fade-in-up max-w-4xl mx-auto font-medium px-4 drop-shadow-sm">
              Connect with a <span className="font-black text-blue-700 bg-blue-100 px-2 py-1 rounded-lg">caring teacher</span> who has helped 
              <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-1 rounded-lg"> thousands achieve fluency</span>. Let's discuss your 
              <span className="font-black text-teal-700 bg-teal-100 px-2 py-1 rounded-lg"> Japanese learning goals</span>
            </p>

            {/* Contact Method Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 animate-fade-in-up">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.title}
                  className="group bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-300 hover:bg-white hover:border-cyan-400 transition-all duration-500 hover:scale-105 shadow-lg"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="font-black text-gray-900 mb-2 text-sm sm:text-base">{method.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">{method.description}</p>
                  <div className="text-xs text-blue-600 font-bold">{method.response}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📝 PROFESSIONAL CONTACT FORM SECTION - Blue Gradients for Trust */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30 sm:opacity-50">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur-2xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold shadow-2xl">
              📝 SEND MESSAGE
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight drop-shadow-lg">
              Let's Start Your 
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Success Story
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
              Tell me about your <span className="font-black text-blue-700 bg-blue-100 px-2 py-1 rounded-lg">Japanese goals</span> and I'll create a 
              <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-1 rounded-lg"> personalized learning plan</span> just for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-300">
              <CardHeader className="text-center pb-6 sm:pb-8">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-4">
                  Ready to Transform Your Japanese?
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Fill out this form and I'll personally respond within 24 hours with a customized learning strategy
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  {/* Inquiry Type Selection */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="inquiryType" className="text-base sm:text-lg font-black text-gray-900">
                      What can I help you with? *
                    </Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                      required
                    >
                      <option value="lesson">🎯 Book a Japanese Lesson</option>
                      <option value="collaboration">🤝 Business Collaboration</option>
                      <option value="consultation">💡 Learning Consultation</option>
                      <option value="media">📺 Media & Press Inquiry</option>
                      <option value="other">💬 General Question</option>
                    </select>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <Label htmlFor="name" className="text-base sm:text-lg font-black text-gray-900">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                        required
                      />
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <Label htmlFor="email" className="text-base sm:text-lg font-black text-gray-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="subject" className="text-base sm:text-lg font-black text-gray-900">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-3 sm:space-y-4">
                    <Label htmlFor="message" className="text-base sm:text-lg font-black text-gray-900">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your Japanese learning goals, current level, and how I can help you succeed..."
                      rows={6}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 bg-white/90 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4 sm:pt-6">
                    <div className="relative group inline-block w-full sm:w-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                      
                      <Button 
                        type="submit"
                        size="lg" 
                        className="relative w-full sm:w-auto bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500 text-white font-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 text-sm sm:text-base lg:text-lg border-4 border-white/30"
                      >
                        <span className="flex items-center justify-center gap-2 sm:gap-3">
                          <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
                          <div className="text-center sm:text-left">
                            <div className="whitespace-nowrap">Send Message</div>
                            <div className="text-xs sm:text-sm opacity-90 font-bold">Response within 24h</div>
                          </div>
                        </span>
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 sm:mt-6 px-4">
                      By sending this message, you agree to receive personalized learning recommendations and updates about my Japanese courses.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🌟 ENHANCED SOCIAL MEDIA SECTION - Blue Theme for Trust */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-floating-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-teal-200/30 to-blue-200/30 rounded-full blur-3xl animate-floating-slow delay-1000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 sm:px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold animate-glow-pulse shadow-2xl">
              🌟 FOLLOW MY JOURNEY
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight drop-shadow-lg">
              Join My 
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Global Community
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed px-4">
              Connect with me on social media for <span className="font-black text-blue-700 bg-blue-100 px-2 py-1 rounded-lg">daily Japanese tips</span>, 
              <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-1 rounded-lg"> behind-the-scenes content</span>, and exclusive learning resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialPlatforms.map((platform, index) => (
              <Card 
                key={platform.name}
                className="group bg-white/95 backdrop-blur-xl border-2 border-blue-300 hover:bg-white hover:border-cyan-400 transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${platform.color} text-white text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                    {platform.icon}
                  </div>
                  
                  <h3 className="font-black text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">{platform.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-1 sm:mb-2">{platform.handle}</p>
                  <p className={`text-lg sm:text-xl font-black bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-4 sm:mb-6`}>
                    {platform.followers}
                  </p>
                  
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${platform.color} hover:shadow-lg transition-all duration-500 text-white border-0 rounded-full font-bold text-sm sm:text-base py-3 sm:py-4 group-hover:scale-105`}
                  >
                    <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                      Follow Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
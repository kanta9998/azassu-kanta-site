import React from 'react'

// Social Media Icons
export const socialIcons = {
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

// Homepage Data
export const homepageFeatures = [
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

export const homepageTestimonials = [
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

export const homepageStats = [
  { number: "1000+", label: "Students Taught", icon: "👥" },
  { number: "5.0★", label: "Average Rating", icon: "⭐" },
  { number: "3M+", label: "Video Views", icon: "📺" },
  { number: "95%", label: "Success Rate", icon: "🎯" }
]

// Lessons Page Data
export const lessonFeatures = [
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

// Contact Page Data
export const contactMethods = [
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

export const socialPlatforms = [
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
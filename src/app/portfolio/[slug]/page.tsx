import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Temporary portfolio data until contentlayer is built
const portfolioItems = [
  {
    slug: 'tiktok-viral-video',
    title: 'TikTok Viral Video: Japanese Pronunciation Tips',
    date: '2024-01-15',
    summary: 'A viral TikTok video teaching Japanese pronunciation that reached over 1 million views and helped thousands of learners improve their speaking skills.',
    images: ['/static/images/portfolio/tiktok-viral.jpg'],
    category: 'Social Media Content',
    tags: ['TikTok', 'Viral', 'Pronunciation', 'Education'],
    content: `
## Project Overview

This TikTok video became a viral sensation, reaching over 1 million views and helping thousands of learners worldwide improve their Japanese pronunciation. The video focused on common pronunciation mistakes that English speakers make when learning Japanese.

## Key Features

- **Clear visual demonstrations** of mouth positioning
- **Before and after examples** showing improvement
- **Engaging format** that keeps viewers watching
- **Actionable tips** viewers can practice immediately

## Results

- 🎯 **1.2M+ views** in the first week
- 💬 **50K+ comments** from grateful learners
- 📈 **25K+ new followers** gained
- 🔄 **100K+ shares** across platforms

## What Made It Successful

The video's success came from its combination of:

1. **Practical value** - Immediate improvement for viewers
2. **Visual learning** - Clear demonstrations of techniques
3. **Relatable content** - Addressing common struggles
4. **Perfect timing** - Posted during peak engagement hours

## Impact

This video not only boosted my social media presence but also led to:
- Increased lesson bookings
- Brand partnership opportunities
- Speaking engagement invitations
- Feature in language learning publications

The success of this content piece demonstrates the power of educational content that provides immediate value to the audience while showcasing expertise in an engaging format.
    `
  },
  {
    slug: 'brand-collaboration',
    title: 'Brand Collaboration: Japanese Learning App Partnership',
    date: '2024-02-20',
    summary: 'A successful brand collaboration with a leading Japanese learning app, creating educational content that drove significant user engagement and app downloads.',
    images: ['/static/images/portfolio/app-collaboration.jpg'],
    category: 'Brand Partnership',
    tags: ['Brand Partnership', 'App', 'Collaboration', 'Marketing'],
    content: `
## Project Overview

Partnered with JapanLearn Pro, a leading Japanese learning application, to create a series of educational content pieces that would showcase the app's features while providing genuine value to language learners.

## Collaboration Details

### Content Created
- **5 Instagram Reels** demonstrating app features
- **3 YouTube videos** with in-depth tutorials
- **10 TikTok videos** showing quick learning tips
- **2 Live streaming sessions** for Q&A

### Campaign Goals
- Increase app downloads
- Boost user engagement
- Showcase premium features
- Build brand awareness

## Results & Metrics

### Engagement
- **2.5M+ total views** across all platforms
- **150K+ likes** and positive reactions
- **25K+ comments** with high engagement rate
- **85% positive sentiment** in comments

### Business Impact
- **15,000+ app downloads** directly attributed to campaign
- **40% increase** in premium subscriptions
- **200% boost** in social media mentions
- **3x increase** in brand awareness metrics

## What Made It Successful

### Authentic Integration
- Naturally incorporated app features into educational content
- Maintained my teaching style and personality
- Focused on genuine user benefits

### Strategic Content Mix
- Platform-specific content optimization
- Varied content types to reach different audiences
- Consistent messaging across all platforms

### Community Engagement
- Responded to all comments and questions
- Created follow-up content based on user feedback
- Hosted live sessions for direct interaction

## Long-term Partnership

This successful collaboration led to:
- **Ongoing partnership agreement** for 2024
- **Ambassador program** participation
- **Co-creation opportunities** for new features
- **Speaking opportunities** at company events

The partnership demonstrates my ability to create authentic, engaging content that drives real business results while maintaining educational value for my audience.
    `
  },
  {
    slug: 'youtube-series',
    title: 'YouTube Educational Series: Japanese Culture Deep Dive',
    date: '2024-03-10',
    summary: 'A comprehensive 12-part YouTube series exploring Japanese culture, traditions, and modern society, combining language learning with cultural education.',
    images: ['/static/images/portfolio/youtube-series.jpg'],
    category: 'Educational Content',
    tags: ['YouTube', 'Education', 'Culture', 'Series'],
    content: `
## Series Overview

Created a comprehensive 12-part YouTube series that goes beyond language learning to explore the rich tapestry of Japanese culture, from ancient traditions to modern pop culture phenomena.

## Series Structure

### Episodes Breakdown
1. **Traditional Tea Ceremony** - History and modern practice
2. **Seasonal Festivals** - Matsuri throughout the year
3. **Japanese Cuisine** - Regional specialties and cooking techniques
4. **Modern Tokyo** - Urban culture and lifestyle
5. **Anime & Manga Culture** - Impact on global culture
6. **Traditional Arts** - Calligraphy, origami, and more
7. **Business Etiquette** - Working in Japan
8. **Fashion Evolution** - From kimono to street style
9. **Technology & Innovation** - Japan's tech landscape
10. **Education System** - Schools and learning culture
11. **Family Traditions** - Modern Japanese family life
12. **Future of Japan** - Trends and predictions

## Production Quality

### Technical Excellence
- **4K video quality** with professional lighting
- **Multi-camera setup** for dynamic viewing
- **Professional audio** with clear narration
- **Custom graphics** and animations
- **Subtitles** in English and Japanese

### Educational Value
- **Cultural context** for language learners
- **Historical background** for each topic
- **Modern applications** of traditional concepts
- **Interactive elements** encouraging viewer participation

## Performance Metrics

### Viewership
- **500K+ total views** across all episodes
- **Average watch time**: 8.5 minutes (85% retention)
- **25K+ subscribers** gained during series
- **High engagement rate**: 12% average

### Community Response
- **Overwhelmingly positive feedback** (98% positive)
- **Educational impact** noted by viewers
- **Requests for more content** in similar format
- **Shared by educators** in classrooms worldwide

## Educational Impact

### Classroom Adoption
- **50+ schools** using series in curriculum
- **University partnerships** for cultural studies
- **Teacher resources** created as companion materials
- **Academic citations** in cultural research

### Community Building
- **Active discussion** in comments section
- **Cultural exchange** between viewers
- **Follow-up Q&A sessions** addressing viewer questions
- **Community challenges** related to each episode

## Recognition & Awards

- **YouTube Creator Award** for educational content
- **Featured** in YouTube's Education spotlight
- **Nominated** for Digital Education Excellence Award
- **Praised** by Japan Cultural Institute

## Future Plans

Building on this success:
- **Season 2** focusing on regional differences
- **Interactive workshops** based on series content
- **Collaboration** with Japanese cultural institutions
- **Educational partnerships** with language schools

This series demonstrates my ability to create high-quality, educational content that resonates with diverse audiences while maintaining cultural authenticity and educational value.
    `
  }
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const portfolio = portfolioItems.find(item => item.slug === slug)
  
  if (!portfolio) {
    return {
      title: 'Portfolio Item Not Found',
    }
  }

  return {
    title: `${portfolio.title} - Kanta Azassu Portfolio`,
    description: portfolio.summary,
    openGraph: {
      title: portfolio.title,
      description: portfolio.summary,
      images: portfolio.images,
    },
  }
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const portfolio = portfolioItems.find(item => item.slug === slug)

  if (!portfolio) {
    notFound()
  }

  return (
    <div className="divide-y divide-border">
      {/* Hero Section */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/portfolio" className="hover:text-primary">
            Portfolio
          </Link>
          <span>→</span>
          <span>{portfolio.category}</span>
        </div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {portfolio.title}
        </h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <time dateTime={portfolio.date}>
            {new Date(portfolio.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {portfolio.category}
          </span>
        </div>
      </div>

      {/* Featured Image */}
      {portfolio.images[0] && (
        <div className="py-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={portfolio.images[0]}
              alt={portfolio.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="py-12">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {portfolio.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                )
              }
              
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-muted-foreground mb-2">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                )
              }
              
              return (
                <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="py-8">
        <div className="flex flex-wrap gap-2">
          {portfolio.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="py-8">
        <div className="flex justify-between">
          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Portfolio</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            <span>Get in Touch</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 
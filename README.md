# Kanta Azassu - Japanese Language Teacher Portfolio

A modern, bilingual portfolio website for a Japanese language teacher built with Next.js 14, featuring lesson booking, portfolio showcase, and social media integration.

## 🌟 Features

- **Bilingual Support** - English and Japanese versions
- **Responsive Design** - Apple-style minimal design with dark theme
- **Lesson Booking** - Integrated calendar for lesson scheduling
- **Portfolio Showcase** - Dynamic portfolio with filtering
- **Contact Form** - Formspree integration for inquiries
- **Social Media Integration** - Links to TikTok, YouTube, Instagram, Twitter
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Accessibility** - WCAG compliant with keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Content Management**: Contentlayer
- **Typography**: @tailwindcss/typography
- **Deployment**: Vercel

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/azassu-kanta-site.git
   cd azassu-kanta-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Calendar Integration
   CALENDAR_URL=https://calendly.com/your-username
   
   # Contact Form
   NEXT_PUBLIC_FORMSPREE_KEY=your-formspree-key
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://azassu-kanta.vercel.app
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
azassu-kanta-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── ja/                 # Japanese language routes
│   │   ├── lessons/            # Lesson booking page
│   │   ├── portfolio/          # Portfolio pages
│   │   └── contact/            # Contact form
│   ├── components/             # Reusable components
│   └── i18n.ts                # Internationalization config
├── data/                       # Content and configuration
│   ├── authors/               # Author bio content
│   ├── portfolio/             # Portfolio MDX files
│   ├── siteMetadata.ts        # Site configuration
│   └── headerNavLinks.ts      # Navigation links
├── messages/                   # Translation files
│   ├── en.json                # English translations
│   └── ja.json                # Japanese translations
└── public/                     # Static assets
    └── static/
        └── images/            # Images and media
```

## 🌐 Routes

- `/` - English homepage
- `/ja` - Japanese homepage
- `/lessons` - English lesson booking
- `/ja/lessons` - Japanese lesson booking
- `/portfolio` - Portfolio grid with filtering
- `/portfolio/[slug]` - Individual portfolio items
- `/contact` - Contact form

## ⚙️ Configuration

### Site Metadata
Update `data/siteMetadata.ts` with your information:
- Personal details
- Social media links
- Site URLs
- Analytics configuration

### Navigation
Modify `data/headerNavLinks.ts` to customize navigation menu.

### Content
- Author bios: `data/authors/`
- Portfolio items: `data/portfolio/`
- Translations: `messages/`

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `CALENDAR_URL` | Calendly or booking calendar URL | Yes |
| `NEXT_PUBLIC_FORMSPREE_KEY` | Formspree form key for contact form | Yes |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | No |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics tracking ID | No |

## 🎨 Customization

### Colors
The site uses a black and blue color scheme defined in `src/app/globals.css`:
- Background: `#000000` (black)
- Primary: `#2563EB` (blue)
- Text: `#ffffff` (white)

### Fonts
- Primary: SF Pro Display/Text, Inter
- Monospace: SF Mono, Monaco, Consolas

### Theme
The site defaults to dark theme with a light theme toggle available.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🌍 Internationalization

The site supports English and Japanese with:
- URL-based routing (`/ja` prefix for Japanese)
- Separate translation files
- Language switcher component
- Localized content and metadata

## 📊 Analytics

Optional analytics support for:
- Google Analytics
- Plausible Analytics
- Simple Analytics
- Umami

Configure in `data/siteMetadata.ts`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The site can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Content Management

### Adding Portfolio Items
1. Create new MDX file in `data/portfolio/`
2. Follow existing format with frontmatter
3. Add images to `public/static/images/portfolio/`

### Updating Translations
1. Edit `messages/en.json` for English
2. Edit `messages/ja.json` for Japanese
3. Maintain consistent key structure

## 🔒 Security

- Environment variables for sensitive data
- Form validation and sanitization
- HTTPS enforcement in production
- Content Security Policy headers

## 🐛 Troubleshooting

### Common Issues

1. **Build errors with Contentlayer**
   ```bash
   npm run build
   ```
   If errors persist, check MDX file formatting.

2. **Missing environment variables**
   Ensure all required variables are set in `.env.local`.

3. **Translation errors**
   Verify all translation keys exist in both language files.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: kanta@example.com
- GitHub Issues: [Create an issue](https://github.com/username/azassu-kanta-site/issues)

---

Built with ❤️ using Next.js and Tailwind CSS

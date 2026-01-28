# SEO Instructions for 2Clients Website Launch

## Pre-Launch Checklist

### 1. Remove Development Blocking Tags
Before going live, remove these meta tags from `src/pages/_document.js`:
```html
<meta name="robots" content="noindex, nofollow" />
<meta name="googlebot" content="noindex, nofollow" />
<meta name="bingbot" content="noindex, nofollow" />
<meta name="yandexbot" content="noindex, nofollow" />
```

### 2. Update robots.txt
In `public/robots.txt`, remove:
```
Disallow: /
```
And keep only:
```
User-agent: *
Allow: /

Sitemap: https://2clients.com/sitemap.xml
```

### 3. Verify Sitemap
Ensure `public/sitemap.xml` is accessible at: https://2clients.com/sitemap.xml

## SEO Features Implemented

### ✅ Meta Tags
- **Title tags**: Optimized for each page with target keywords
- **Meta descriptions**: Unique, compelling descriptions under 160 characters
- **Keywords**: Relevant keywords for each page
- **Open Graph**: Facebook/social media optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Canonical URLs**: Prevent duplicate content issues

### ✅ Structured Data (Schema.org)
- **Organization**: Company information and contact details
- **Service**: Detailed service offerings with pricing
- **Portfolio**: Project showcase with structured data
- **About Page**: Team and company information
- **Contact Page**: Multiple office locations and contact points

### ✅ Technical SEO
- **WebP Images**: Automatic conversion via Next.js
- **Lazy Loading**: Images load as needed
- **Responsive Images**: Different sizes for different devices
- **Fast Loading**: Optimized performance
- **Mobile-First**: Responsive design

### ✅ Internal Linking
- **Footer Navigation**: Links to all main pages
- **Service Cross-Links**: Links from services to portfolio
- **Breadcrumbs**: Navigation context on all pages

### ✅ Content Optimization
- **H1 Tags**: Unique on each page
- **H2-H6 Structure**: Proper heading hierarchy
- **Alt Text**: Descriptive alt attributes for all images
- **Internal Links**: Strategic linking between pages

## Post-Launch Tasks

### 1. Google Search Console
1. Add and verify the website
2. Submit sitemap: https://2clients.com/sitemap.xml
3. Monitor indexing status

### 2. Google Analytics
1. Set up Google Analytics 4
2. Configure goals and conversions
3. Monitor traffic and user behavior

### 3. Performance Monitoring
1. Run Lighthouse audits
2. Monitor Core Web Vitals
3. Optimize based on results

### 4. Content Updates
1. Add real testimonials (currently using placeholder content)
2. Update portfolio with actual case studies
3. Add blog content for SEO

## Target Keywords by Page

### Homepage
- "digital marketing agency"
- "web development"
- "SEO services"

### Services
- "digital marketing services"
- "web development services"
- "SEO optimization"

### Portfolio
- "web development portfolio"
- "digital marketing case studies"
- "website design examples"

### About
- "about digital marketing agency"
- "web development team"
- "SEO experts"

### Contact
- "contact digital agency"
- "web development consultation"
- "digital marketing contact"

### Calculator
- "web development cost calculator"
- "project cost estimator"
- "website pricing calculator"

### Pricing
- "web development pricing"
- "digital marketing packages"
- "website development costs"

## Performance Targets
- **Lighthouse Performance**: ≥ 90
- **Core Web Vitals**: All green
- **Mobile Performance**: ≥ 90
- **SEO Score**: 100

## Monitoring Tools
1. Google Search Console
2. Google Analytics
3. Google PageSpeed Insights
4. Lighthouse CI
5. Core Web Vitals monitoring

## Content Strategy
1. **Blog Section**: Add for content marketing
2. **Case Studies**: Detailed project breakdowns
3. **FAQ Pages**: Answer common questions
4. **Local SEO**: Optimize for Poland market

## Social Media Integration
- Open Graph images for each page
- Twitter Card optimization
- Social sharing buttons
- Social media links in footer

## Security & Performance
- HTTPS enabled
- SSL certificate installed
- CDN configuration
- Image optimization
- Code splitting
- Caching strategies

## Launch Checklist
- [ ] Remove noindex tags
- [ ] Update robots.txt
- [ ] Verify sitemap
- [ ] Test all internal links
- [ ] Verify structured data
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor for 48 hours post-launch

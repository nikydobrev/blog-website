# Blog Website

A modern blog website built with Astro.js frontend and Sanity.io CMS, deployable to Cloudflare Pages.

## ⚡ Tech Stack

- **Frontend**: Astro.js with professional marketing theme
- **CMS**: Sanity.io for content management
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **Version Control**: GitHub

## 🚀 Quick Start

### 1. Environment Setup
```bash
cp .env.example .env
# Update .env with your Sanity project details
```

### 2. Install Dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../sanity-blog
npm install
```

### 3. Run Development Servers
```bash
# Frontend (port 4321)
cd frontend
npm run dev

# Sanity Studio (port 3333)
cd ../sanity-blog
npm run dev
```

## 📖 Features

- ✅ Professional marketing-focused design
- ✅ Responsive layout with Tailwind CSS
- ✅ Syntax highlighted code blocks (Shiki)
- ✅ Optimized images with Sanity CDN
- ✅ SEO-friendly with meta tags
- ✅ Reading time calculation
- ✅ Blog categories and tags
- ✅ Environment variable configuration
- ✅ Cloudflare Pages ready

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

## 📁 Project Structure

```
blog-website/
├── frontend/               # Astro.js frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── layouts/       # Page layouts
│   │   ├── pages/         # Route pages
│   │   └── sanity.ts      # Sanity client config
│   └── package.json
├── sanity-blog/            # Sanity.io CMS
│   ├── schemas/           # Content schemas
│   └── sanity.config.ts   # Sanity configuration
├── .env                    # Local environment variables
├── .env.example           # Environment template
└── DEPLOYMENT.md          # Deployment guide
```

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

### Sanity Studio

```bash
cd sanity-blog
npm install
npm run dev
```

## Deployment

### Cloudflare Pages Build Settings

- **Build command**: `cd frontend && npm run build`
- **Build output directory**: `frontend/dist`
- **Root directory**: `/` (project root)
- **Node.js version**: 18.x or later

### Environment Variables

Add these to Cloudflare Pages:

```
# Add any environment variables here if needed
# SANITY_PROJECT_ID=your-project-id (if not public)
```

## Features

- ✅ Static Site Generation (SSG)
- ✅ Responsive design with TailwindCSS
- ✅ Blog posts with rich content (PortableText)
- ✅ Code syntax highlighting
- ✅ Image optimization
- ✅ SEO optimized
- ✅ RSS feed
- ✅ Sitemap generation

## Content Management

Content is managed through Sanity Studio. The frontend fetches content at build time for optimal performance.

## Performance

- Built with Astro for maximum performance
- Static generation for fast loading
- Optimized images
- Minimal JavaScript bundle
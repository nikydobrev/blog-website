# Blog Website Deployment Guide

## 🔐 Environment Variables Setup

### For Development
Create a `.env` file in the `frontend/` directory:
```env
PUBLIC_SANITY_PROJECT_ID=your-project-id-here
PUBLIC_SANITY_DATASET=your-dataset-name
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### For Cloudflare Pages Production

#### Option 1: Cloudflare Dashboard (Recommended)
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your project (`your-project-name` or your project name)
3. Go to **Settings** → **Environment variables**
4. Add these variables for **Production**:
   ```
   PUBLIC_SANITY_PROJECT_ID = your-project-id-here
   PUBLIC_SANITY_DATASET = your-dataset-name
   PUBLIC_SANITY_API_VERSION = 2024-01-01
   ```

#### Option 2: Via wrangler.toml (Already configured)
The environment variables are also defined in `wrangler.toml` as backup.
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update the values in `.env` with your actual Sanity project details

### For Cloudflare Pages Deployment
Add these environment variables in your Cloudflare Pages project settings:

```
PUBLIC_SANITY_PROJECT_ID=your-project-id-here
PUBLIC_SANITY_DATASET=your-dataset-name
PUBLIC_SANITY_API_VERSION=2024-01-01
```

## 🚀 Cloudflare Pages Configuration

### Build Settings:
- **Build command**: `cd frontend && npm install && npm run build`
- **Build output directory**: `frontend/dist`
- **Root directory**: `/` (leave blank)
- **Node.js version**: `18` or higher

### Build Environment Variables:
Set these in your Cloudflare Pages dashboard under Settings > Environment variables:

| Variable | Value |
|----------|-------|
| `PUBLIC_SANITY_PROJECT_ID` | `your-project-id-here` |
| `PUBLIC_SANITY_DATASET` | `your-dataset-name` |
| `PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

## 📁 Project Structure

```
blog-website/
├── frontend/               # Astro.js frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── sanity-blog/            # Sanity.io CMS
│   ├── schemas/
│   └── sanity.config.ts
├── .env                    # Local environment variables (not in git)
├── .env.example           # Environment variables template
└── README.md
```

## 🔗 GitHub Repository Setup

1. Create a new repository on GitHub
2. Push this code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Blog website with Astro + Sanity"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/blog-website.git
   git push -u origin main
   ```

## 🌐 Cloudflare Pages Deployment Steps

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub account and select the repository
4. Configure build settings:
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Build output directory**: `frontend/dist`
5. Add environment variables (see table above)
6. Click "Save and Deploy"

## 🛠 Local Development

### Frontend (Astro.js)
```bash
cd frontend
npm install
npm run dev
```

### Backend (Sanity Studio)
```bash
cd sanity-blog
npm install
npm run dev
```

## 🔍 Troubleshooting

### Environment Variables Not Loading
- Ensure `.env` file is in the project root
- Check that variables are prefixed with `PUBLIC_` for client-side usage
- Restart your development server after adding new environment variables

### Sanity Connection Issues
- Verify your Sanity project ID and dataset are correct
- Check that your Sanity project is published and accessible
- Ensure CORS settings in Sanity allow your domain

## 🔄 Content Updates

After publishing content in Sanity Studio:
1. Content should appear immediately on local development (with `useCdn: false`)
2. Production builds may take 1-2 minutes to reflect changes due to CDN caching
3. You can trigger a new deployment in Cloudflare Pages if needed
# Deployment Guide

This guide explains how to deploy your portfolio to GitHub and Netlify.

## Step 1: Setup GitHub Repository

### If you don't have a repository yet:

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right and select "New repository"
3. Name it: `portfolio` (or any name you prefer)
4. Choose "Public" or "Private"
5. Don't add README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Initialize Git in your local project:

```bash
# Navigate to your project
cd C:\Users\SHAURYA\Downloads\My_Portfolio_V3

# Initialize git (if not already done)
git init

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio setup"

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 2: Deploy Frontend to Netlify

### Option A: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Select GitHub as your Git provider
4. Authorize Netlify to access your repositories
5. Select the `portfolio` repository
6. **Build Settings:**
   - Owner: select your account
   - Branch to deploy: `main`
   - Build command: `pnpm install --ignore-scripts && pnpm build`
   - Publish directory: `artifacts/portfolio/dist/public`
7. Click "Deploy site"

### Option B: Deploy with CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project
cd C:\Users\SHAURYA\Downloads\My_Portfolio_V3

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Set Environment Variables

After deployment, go to Netlify Dashboard → Your Site → Site settings → Build & deploy → Environment:

Click "Edit variables" and add:
- Key: `VITE_API_URL`
- Value: `https://your-api-domain.com` (update after deploying API)

## Step 3: Deploy Backend API

Choose one of these platforms:

### Option 1: Render (Recommended for Express)

1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click "New +" → "Web Service"
3. Select your portfolio repository
4. Configure:
   - Name: `portfolio-api`
   - Environment: `Node`
   - Build Command: `cd artifacts/api-server && pnpm install --ignore-scripts && pnpm run build`
   - Start Command: `cd artifacts/api-server && pnpm run start`
5. Go to Environment → Add environment variable:
   - `DATABASE_URL` = `file:./database.db` (or PostgreSQL URL if using production database)
   - `NODE_ENV` = `production`
6. Click "Deploy"

Get your API URL (e.g., `https://portfolio-api-xxxx.onrender.com`) and update:
- Netlify environment variable `VITE_API_URL`
- Your local `.env.local` file

### Option 2: Railway

1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Create a new project → GitHub repo
3. Select your portfolio repository
4. Add services:
   - Runtime: `Node.js`
   - Build command: `cd artifacts/api-server && pnpm install --ignore-scripts && pnpm run build`
   - Start command: `cd artifacts/api-server && pnpm run start`
5. Set environment variables in Railway dashboard
6. Deploy

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Import your repository
3. Framework: `Other`
4. Build Command: `cd artifacts/api-server && pnpm install --ignore-scripts && pnpm run build`
5. Output Directory: `artifacts/api-server/dist`
6. Deploy

## Step 4: Update Your Portfolio

### After deployment, update:

1. **In the portfolio app** (if you fetch the API URL):
   - Check that `VITE_API_URL` is correctly set in Netlify
   - Update any hardcoded URLs in your code

2. **In the API server** (if you have CORS):
   - Update CORS settings to include your Netlify domain
   - In `artifacts/api-server/src/app.ts`, update the `cors` configuration

Example CORS update:
```typescript
import cors from "cors";

app.use(cors({
  origin: [
    "https://your-portfolio.netlify.app",  // Your Netlify URL
    "http://localhost:5173",                // Local development
  ],
  credentials: true,
}));
```

## Step 5: Continuous Deployment

Both platforms are now set up for continuous deployment:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Netlify and your API platform automatically redeploy

## Monitoring & Maintenance

### Netlify Dashboard
- View logs: `Deploys` → select deployment → View log
- Rebuild: `Deploys` → `Trigger deploy` → `Deploy site`

### Render/Railway Dashboard
- View logs in their dashboard
- Redeploy from settings

### Local Development
```bash
# Test before pushing
pnpm dev

# View logs while running
tail -f artifacts/api-server/dist/index.js
```

## Troubleshooting

### Build fails on Netlify but works locally

Check:
1. Node version on Netlify matches your local version
2. All environment variables are set
3. Build command is correct
4. No hardcoded paths or local-only files

### API calls fail after deployment

1. Check CORS settings in your API
2. Verify API URL is set correctly in Netlify environment
3. Check API server logs for errors
4. Ensure database connection string is correct

### Changes not reflecting on deployed site

1. Clear Netlify cache: `Deploys` → `Trigger deploy` → `Clear cache and deploy`
2. Force rebuild: `Site settings` → `Danger zone` → `Delete site` (then relink)

## Next Steps

After successful deployment:
1. Test your site: `https://your-portfolio.netlify.app`
2. Test API endpoints
3. Share your portfolio link
4. Keep committing and pushing to GitHub
5. Monitor Netlify and API platform dashboards

Happy deploying! 🚀

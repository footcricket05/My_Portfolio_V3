# Quick Start Guide - Local Development & Deployment

## 🚀 Your Portfolio is Ready!

Your portfolio has been fully configured for local development and deployment to GitHub + Netlify.

### What's Running Right Now?

- **Frontend**: http://localhost:5174 (React/Vite app)
- **Backend API**: http://localhost:3000 (Express server)
- **Component Sandbox**: Available via `pnpm dev:mockup`

---

## 📝 Quick Commands

```bash
# Install dependencies (do this once)
pnpm install --ignore-scripts

# Run entire project (API + Frontend)
pnpm dev

# Run individual servers
pnpm dev:api        # API on port 3000
pnpm dev:portfolio  # Frontend on port 5174
pnpm dev:mockup     # Components on port 5174

# Build for production
pnpm build

# Type check
pnpm typecheck
```

---

## 🌐 Deploy to GitHub & Netlify (5 Steps)

### Step 1: Create a GitHub Repository
```bash
cd C:\Users\SHAURYA\Downloads\My_Portfolio_V3

# Initialize and push to GitHub
git add .
git commit -m "Initial commit: Portfolio setup"
git branch -M main
git push -u origin main
```

[Detailed GitHub setup →](DEPLOYMENT_GUIDE.md#step-1-setup-github-repository)

### Step 2: Deploy Frontend to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Build command: `pnpm install --ignore-scripts && pnpm build`
5. Publish directory: `artifacts/portfolio/dist/public`
6. Click "Deploy"

[Detailed Netlify setup →](DEPLOYMENT_GUIDE.md#step-2-deploy-frontend-to-netlify)

### Step 3: Deploy Backend API
Choose one:
- **Render** (Recommended): [render.com](https://render.com)
- **Railway**: [railway.app](https://railway.app)
- **Vercel**: [vercel.com](https://vercel.com)
- **Heroku**: [heroku.com](https://heroku.com)

[Detailed API setup →](DEPLOYMENT_GUIDE.md#step-3-deploy-backend-api)

### Step 4: Set Environment Variables
After deployment, update these in Netlify:
- `VITE_API_URL` = `https://your-api-domain.com`

### Step 5: Push Changes
```bash
# Make changes
# ... edit files ...

# Push updates
git add .
git commit -m "Update portfolio"
git push origin main

# Netlify automatically redeploys!
```

---

## 📁 Project Structure

```
📦 My_Portfolio_V3
├── 📂 artifacts/
│   ├── 📂 portfolio/          ← Frontend (React/Vite) → Netlify
│   ├── 📂 api-server/         ← Backend (Express) → Render/Railway
│   └── 📂 mockup-sandbox/     ← Component showcase
├── 📂 lib/                    ← Shared utilities
├── 📄 netlify.toml            ← Netlify config
├── 📄 render.toml             ← Render config
├── 📄 vercel.json             ← Vercel config
├── 📄 Procfile                ← Heroku config
├── 📄 README.md               ← Full documentation
└── 📄 DEPLOYMENT_GUIDE.md     ← Deployment walkthrough
```

---

## ✅ What's Been Fixed

- ✅ Removed all Replit-specific dependencies
- ✅ Environment variables work on Windows
- ✅ Both servers run locally without issues
- ✅ Netlify configuration ready
- ✅ Multiple deployment platform options
- ✅ GitHub CI/CD workflows configured
- ✅ Production-ready build setup

---

## 🔗 Important Links

| Purpose | Link |
|---------|------|
| Documentation | [README.md](README.md) |
| Deployment Steps | [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) |
| Environment Example | [.env.example](.env.example) |
| Netlify Config | [netlify.toml](netlify.toml) |
| GitHub Workflows | [.github/workflows](.github/workflows) |

---

## 🎯 Next Steps

1. **Test Locally** (✅ Already running!)
   ```bash
   # Visit http://localhost:5174 in your browser
   ```

2. **Push to GitHub** (5 mins)
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

3. **Deploy to Netlify** (5 mins)
   - Sign in with GitHub
   - Select repo
   - Deploy

4. **Deploy Backend** (10 mins)
   - Choose Render/Railway/Vercel
   - Connect GitHub repo
   - Deploy

5. **Share Your Portfolio!** 🎉
   - Your site: `https://your-portfolio.netlify.app`

---

## 💡 Pro Tips

- **Auto-reload**: Changes are automatically deployed when you push to GitHub
- **Preview deploys**: Netlify creates preview URLs for each PR
- **Custom domain**: Add your own domain in Netlify settings
- **Analytics**: Netlify provides built-in analytics

---

## ❓ Need Help?

Check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for troubleshooting and FAQs.

---

**Happy coding! 🚀**

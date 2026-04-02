# Backend API Deployment Guide

Your portfolio backend API is ready to deploy! Follow these steps to get the contact form working in production.

## Quick Deploy to Render.app (Recommended - Free)

### Step 1: Push Code to GitHub (Already Done ✅)
Your code is already on GitHub at: `https://github.com/footcricket05/My_Portfolio_V3`

### Step 2: Create a PostgreSQL Database

1. Go to [Render.app](https://render.com)
2. Sign up with your GitHub account
3. Go to **Dashboard** → **Create** → **PostgreSQL**
4. Fill in:
   - **Name**: `portfolio-database`
   - **Database**: `portfolio_db`
   - **User**: `portfolio_user`
   - **Region**: (Choose closest to you)
   - **Keep other settings as default**
5. Click **Create Database**
6. **Wait 2-3 minutes** for the database to be created
7. Once created, copy the **External Database URL** (looks like: `postgresql://...`)

### Step 3: Deploy the Backend API

1. Still on Render, go to **Dashboard** → **Create** → **Web Service**
2. Select **Connect a GitHub repository**
3. Find and connect `My_Portfolio_V3` repository
4. Fill in the configuration:
   - **Name**: `portfolio-api`
   - **Environment**: `Node`
   - **Region**: (Same as database)
   - **Branch**: `main`
   - **Build Command**: `pnpm install --no-frozen-lockfile --ignore-scripts && pnpm run build`
   - **Start Command**: `pnpm run start`
5. Add Environment Variables:
   - **Key**: `DATABASE_URL`
   - **Value**: (Paste the PostgreSQL URL from Step 2)
   - **Key**: `NODE_ENV`
   - **Value**: `production`
6. Click **Create Web Service**
7. **Wait 3-5 minutes** for deployment to complete

### Step 4: Update Netlify with API URL

1. After deployment completes, Render will give you a URL like: `https://portfolio-api-xxxx.onrender.com`
2. Go to [Netlify](https://netlify.com) → Your Site → **Site settings** → **Build & deploy** → **Environment**
3. Add a new environment variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://portfolio-api-xxxx.onrender.com` (your Render URL)
4. Trigger a new deploy on Netlify (Deploy site)

### Step 5: Test the Contact Form

Your contact form should now work! Try submitting a message through your portfolio.

---

## Alternative: Deploy to Railway.app

If Render is busy, Railway is another great option:

1. Go to [Railway.app](https://railway.app)
2. Click **Start a New Project** → **Provision PostgreSQL**
3. Add the GitHub repository
4. Set environment variables (DATABASE_URL, NODE_ENV)
5. Deploy
6. Copy the generated URL and add to Netlify as `VITE_API_URL`

---

## Troubleshooting

**API not connecting?**
- Check that `VITE_API_URL` is set correctly on Netlify
- Make sure there are no trailing slashes in the URL
- Wait a few minutes after deployment - services need time to warm up

**Database errors?**
- Verify `DATABASE_URL` is set correctly on the web service
- Check it's a PostgreSQL URL (starts with `postgresql://`)
- Make sure the database is running

**Contact form still shows error?**
- Hard refresh your portfolio (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console (F12) for any error messages
- Verify the API URL on Netlify doesn't have trailing slashes

---

## Production Checklist

✅ Backend API deployed to Render/Railway
✅ PostgreSQL database provisioned
✅ `VITE_API_URL` set on Netlify
✅ Netlify redeployed
✅ Contact form tested and working
✅ Messages being saved to database

You're all set! Your portfolio is now fully functional with a working contact form. 🚀

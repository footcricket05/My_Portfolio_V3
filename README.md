# Shaurya's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features an interactive frontend and a Node.js/Express backend API.

## Project Structure

```
├── artifacts/
│   ├── portfolio/          # Frontend React app (Netlify)
│   ├── api-server/         # Backend Express API (Render/Railway/Vercel)
│   └── mockup-sandbox/     # Component showcase
├── lib/                    # Shared libraries
├── scripts/                # Utility scripts
└── netlify.toml            # Netlify deployment config
```

## Local Development

### Prerequisites
- Node.js 20.19+ or 22.12+
- pnpm (package manager)

### Installation

```bash
# Install dependencies for the entire workspace
pnpm install --ignore-scripts
```

### Running Locally

**Option 1: Run both frontend and API together**
```bash
pnpm dev
```

**Option 2: Run separately**

Frontend only:
```bash
cd artifacts/portfolio && pnpm run dev
# Runs on http://localhost:5173
```

API only:
```bash
cd artifacts/api-server && pnpm run dev
# Runs on http://localhost:3000
```

Component Sandbox:
```bash
cd artifacts/mockup-sandbox && pnpm run dev
# Runs on http://localhost:5174
```

## Building for Production

```bash
# Build all packages
pnpm build

# Build specific package
cd artifacts/portfolio && pnpm run build
cd artifacts/api-server && pnpm run build
```

## Deployment

### Frontend (Portfolio) - Netlify

1. **Connect to Netlify:**
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com) and sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select this repository

2. **Configure in Netlify:**
   - Build command: `pnpm install --ignore-scripts && pnpm build`
   - Publish directory: `artifacts/portfolio/dist/public`
   - Environment variables:
     - `VITE_API_URL`: Your API server URL (e.g., `https://portfolio-api.render.com`)

3. **Deploy:**
   - Netlify automatically deploys on every push to main branch

### Backend API - Render (or similar)

1. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Create a new "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Build command: `cd artifacts/api-server && pnpm install --ignore-scripts && pnpm run build`
     - Start command: `cd artifacts/api-server && pnpm run start`
     - Environment variables:
       - `NODE_ENV`: `production`
       - `PORT`: `3000` (Render assigns this automatically)
       - `DATABASE_URL`: Your database connection string

2. **Alternative Platforms:**
   - **Railway.app**: Similar setup to Render
   - **Vercel**: Use `vercel.json` (provided separately)
   - **Heroku**: Use `Procfile` (provided separately)

## Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:3000  # Development
VITE_API_URL=https://your-api.com   # Production
```

### Backend (.env or Render dashboard)
```
NODE_ENV=development
PORT=3000
DATABASE_URL=file:./database.db    # SQLite for development
DATABASE_URL=postgresql://...      # PostgreSQL for production
```

## Removing Replit Specifics

This project has been configured to work independently of Replit:

- ✅ Removed Replit-specific Vite plugins
- ✅ Environment variables are now platform-agnostic
- ✅ Added GitHub + Netlify deployment configs
- ✅ Netlify, Render, and other platform configs included

The `.replit` and `.replitignore` files can be safely deleted if not needed.

## Scripts

```bash
# Development
pnpm dev              # Run all dev servers
pnpm dev:portfolio    # Frontend only
pnpm dev:api         # API only
pnpm dev:mockup      # Component sandbox only

# Building
pnpm build           # Build everything
pnpm typecheck       # Run TypeScript checks

# Type checking
pnpm typecheck:libs  # Check libraries only
```

## Technology Stack

### Frontend
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- Framer Motion
- TanStack React Query

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM
- SQLite (dev) / PostgreSQL (prod)
- Pino Logger

## Git Workflow

1. Clone the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make commits: `git commit -m "Description"`
4. Push to GitHub: `git push origin feature/your-feature`
5. Create a Pull Request on GitHub
6. Once merged to main, Netlify automatically deploys

## Troubleshooting

### Port already in use
```bash
# Kill process on port (Windows PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process -Force
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### Dependencies issue
```bash
# Clear cache and reinstall
rm -r node_modules pnpm-lock.yaml
pnpm install --ignore-scripts
```

### Build fails locally but works on Netlify
- Check Node.js version: `node --version` (should be 20.19+)
- Check pnpm version: `pnpm --version`
- Clear Netlify cache and redeploy

## License

MIT

## Author

Shaurya Srinet

---

For questions or issues, please create an issue in the GitHub repository.

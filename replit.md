# Shaurya Singh Srinet — Portfolio

## Overview
Full-stack personal portfolio for Shaurya Singh Srinet, Cybersecurity Analyst at Deloitte USI. Single-page scrollable site with a working contact form backed by a PostgreSQL database.

## Architecture

### Monorepo Structure (pnpm workspaces)
- `artifacts/portfolio/` — React + Vite frontend (single-page portfolio)
- `artifacts/api-server/` — Express backend API
- `lib/db/` — Drizzle ORM + PostgreSQL schema
- `lib/api-spec/` — OpenAPI spec (source of truth for API shape)
- `lib/api-client-react/` — Generated TanStack Query React hooks
- `lib/api-zod/` — Generated Zod validation schemas

### Frontend (`artifacts/portfolio`)
- React 19 + TypeScript + Vite
- Framer Motion for animations
- TanStack Query for server state
- wouter for routing
- Theme system: light / dark / dim modes + small / medium / large font sizes (ThemeProvider + SettingsPanel)
- Sections: Hero, About, Experience, Projects, Skills, Certifications, Contact

### Backend (`artifacts/api-server`)
- Express + TypeScript + esbuild
- Routes: `GET /api/healthz`, `POST /api/contact`
- Contact messages stored in `contact_messages` table

### Database
- PostgreSQL via Replit managed DB (DATABASE_URL env var)
- Drizzle ORM with `drizzle-kit push` for schema management
- Tables: `contact_messages` (id, name, email, subject, message, created_at)

## Key Files
- `lib/api-spec/openapi.yaml` — Edit this to change API shape, then run codegen
- `artifacts/portfolio/src/providers/ThemeProvider.tsx` — Theme + font size context
- `artifacts/portfolio/src/components/SettingsPanel.tsx` — Floating settings panel
- `artifacts/portfolio/src/index.css` — CSS variables for all 3 themes
- `artifacts/api-server/src/routes/contact.ts` — Contact form backend route

## Workflows
- `artifacts/portfolio: web` — Vite dev server for portfolio frontend
- `artifacts/api-server: API Server` — Express API server
- `artifacts/mockup-sandbox: Component Preview Server` — Canvas component previews

## Codegen
After editing `lib/api-spec/openapi.yaml`, run:
```bash
pnpm --filter @workspace/api-spec run codegen
```

## DB Schema Changes
After editing `lib/db/src/schema/`, run:
```bash
pnpm --filter @workspace/db run push
```

## Content
All portfolio content is hardcoded in component files under `artifacts/portfolio/src/components/sections/`. No CMS.

## Design Notes
- react-icons v5 is missing many icons: SiLinkedin, SiMicrosoftazure, SiCss3, SiNeo4j, SiJava, SiAmazonwebservices — use lucide-react for those
- SiApachekafka, SiMysql, SiCplusplus, SiPytorch, SiKeras, SiTerraform, SiDocker, SiKubernetes all exist in v5
- CSS variables: --bg, --bg-card, --text, --text-muted, --accent, --accent-dim, --border (set by data-theme on html element)

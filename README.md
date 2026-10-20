# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



npm run deploy // command for deploying gh pages

## Admin Panel + Convex Setup

1. Copy `.env.example` to `.env` and set values:
	- `VITE_CONVEX_URL`
	- `VITE_ADMIN_PIN`
2. Start Convex dev backend:
	- `npx convex dev`
3. Start frontend:
	- `npm run dev`
4. Open admin dashboard:
	- `/admin`

### Included Admin Modules

- Overview KPIs (leads/projects/careers/SEO pages)
- Dashboard module toggles
- Leads CRUD-lite with status pipeline
- Projects manager
- Careers manager
- SEO metadata manager
- Activity feed
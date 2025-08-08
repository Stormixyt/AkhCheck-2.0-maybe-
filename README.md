
# AkhCheck — Starter Scaffold (Next.js + Tailwind + Supabase)

This is a production-ready starter scaffold for **AkhCheck** — the Islamic accountability platform.
It includes:
- Next.js + Tailwind frontend scaffold
- Supabase client wired to your provided project (in `.env.local`)
- SQL migration to create core tables + RLS policies
- Example pages: Auth, Dashboard, Goals, Groups (basic)
- Client-side encryption helper (tweetnacl)
- Instructions to package for Windows (Tauri/Electron) and iOS (Expo / React Native)

## Quick start (web)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

.env.local is pre-filled with the Supabase **Project URL** and **anon key** you provided.
**Do not** add your SUPABASE_SERVICE_ROLE_KEY to this file if you plan to share it publicly.

## What I included
- `sql/001_init.sql` — DB schema + RLS policies
- `pages/` — basic Next.js pages using Supabase client
- `lib/supabaseClient.ts` — supabase-js client wrapper
- `utils/encryption.ts` — sample client-side encryption utilities (tweetnacl)
- `docs/` — packaging & deployment guides (Windows, iOS)
- Tests skeleton and CI notes (see README sections)

## Next steps I recommend
- Run the SQL migration in your Supabase project (SQL editor) to create tables and policies.
- Review and enable Row-Level Security (RLS) and add the policy functions in `sql/001_init.sql`.
- Configure email provider in Supabase for real signup emails.
- For production, add a SUPABASE_SERVICE_ROLE_KEY on your server only (never expose it to the frontend).

If you want, I can now:
- Push this scaffold into a GitHub repo for you.
- Create a Vercel deployment config.
- Generate the Tauri/Electron packaging files and an example `.exe` (requires additional build steps on your machine).

Download the ZIP below and open it in VS Code to start hacking!



## Quick deploy (Vercel)
1. Sign into vercel.com and import this repository.
2. Set environment variables from `.env.local` if present (SUPABASE keys etc).
3. Build command: `npm run build`, Output directory: `.next`

Or run locally:
```bash
npm install
npm run dev
```

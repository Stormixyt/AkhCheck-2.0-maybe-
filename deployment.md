
# Deployment & CI suggestions

- Host the frontend on Vercel or Netlify. For Next.js, Vercel is easiest.
- Use Supabase for DB/Auth/Storage (already wired).
- CI: Use GitHub Actions to run tests and deploy to Vercel automatically.
- Store secret keys in GitHub secrets / Vercel environment variables (e.g., SUPABASE_SERVICE_ROLE_KEY on server only).

Example GitHub Actions (high level):
- on: push to main
- jobs: install -> build -> test -> deploy to Vercel (use Vercel/GitHub integration)

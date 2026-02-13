Deployment guide

Backend (Render)
- Render manifest: `backend/render.yaml` is provided.
- Steps:
  1. Push repo to GitHub.
  2. In Render dashboard, "New > Import from GitHub" and select this repo.
  3. When asked, choose to use the existing Render manifest (it will read `backend/render.yaml`).
  4. Inspect the service `spacer-backend` and database `spacer-db` that Render will create.
  5. Render will set `DATABASE_URL` for you. Ensure `SECRET_KEY` is set (the manifest sets `generateValue: true`).
  6. (Optional) Set `ALLOWED_ORIGINS` or `FRONTEND_URL` to your frontend URL (comma-separated if multiple).
  7. Deploy and check `https://<your-render-url>/health`.

Frontend (Vercel)
- Vercel config: `frontend/vercel.json` exists.
- Steps:
  1. In Vercel dashboard, import the same GitHub repo.
  2. Set project root to `/frontend` so Vercel builds the frontend.
  3. Build command: `npm run build` and output directory: `dist` (already in `vercel.json`).
  4. Add environment variable `VITE_API_BASE_URL` pointing to your backend URL (e.g. `https://<your-render-url>`).
  5. Deploy. Note the Vercel URL and add it to the backend's `ALLOWED_ORIGINS` or `FRONTEND_URL` in Render.

Local development
- Backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export DATABASE_URL="postgresql://user:pass@localhost:5432/spacer"
export SECRET_KEY="changeme"
uvicorn app.main:app --reload
```

- Frontend:

```bash
cd frontend
npm install
VITE_API_BASE_URL=http://localhost:8000 npm run dev
```

Notes & recommendations
- Consider running Alembic migrations in production instead of relying solely on `Base.metadata.create_all`.
- This repository now supports configuring CORS via `ALLOWED_ORIGINS` or `FRONTEND_URL` env vars.
- The frontend reads the API base URL from `VITE_API_BASE_URL` at build time.

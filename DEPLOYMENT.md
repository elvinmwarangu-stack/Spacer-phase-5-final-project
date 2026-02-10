# Deployment Guide

## Prerequisites
- GitHub account with repository pushed
- Render account (https://render.com)
- Vercel account (https://vercel.com)

## Backend Deployment (Render)

### 1. Create PostgreSQL Database
1. Go to Render dashboard
2. Click "New +" → "PostgreSQL"
3. Name it \`spacer-db\`
4. Choose free tier or paid
5. Click "Create Database"  
6. Copy the "Internal Database URL"

### 2. Deploy Backend Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: \`spacer-backend\`
   - **Root Directory**: \`backend\`
   - **Environment**: Python 3
   - **Build Command**: \`pip install -r requirements.txt\`
   - **Start Command**: \`uvicorn app.main:app --host 0.0.0.0 --port \$PORT\`

4. Add Environment Variables:
   \`\`\`
   DATABASE_URL=<paste-internal-database-url>
   SECRET_KEY=<generate-random-32-chars>
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   \`\`\`

5. Click "Create Web Service"
6. Copy your backend URL

### 3. Run Database Migrations
In Render Shell:
\`\`\`bash
cd backend
alembic upgrade head
\`\`\`

## Frontend Deployment (Vercel)

### 1. Update API URL
Update \`frontend/.env.production\`:
\`\`\`
VITE_API_URL=https://YOUR-BACKEND.onrender.com/api
\`\`\`

### 2 Deploy to Vercel
1. Go to https://vercel.com/
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: \`frontend\`
   - **Build Command**: \`npm run build\`
   - **Output Directory**: \`dist\`
5. Add Environment Variable:
   \`\`\`
   VITE_API_URL=https://YOUR-BACKEND.onrender.com/api
   \`\`\`
6. Click "Deploy"

## Verification Checklist
- [ ] Backend deployed to Render
- [ ] Database created and migrated
- [ ] Frontend deployed to Vercel
- [ ] Registration works
- [ ] Login works
- [ ] Spaces load correctly


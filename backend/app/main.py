import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.database.base import Base
from app.database.session import engine, get_db
from app.auth.routes import router as auth_router
from app.spaces.routes import router as spaces_router
from app.bookings.routes import router as bookings_router
from app.payments.routes import router as payments_router
from app.users.routes import router as users_router

app = FastAPI(title="Spacer API")

Base.metadata.create_all(bind=engine)

# Configure CORS origins from environment for flexibility in deployments.
default_origins = [
    "https://spacer-phase-5-final-project-x34l.vercel.app",
    "http://localhost:3000",
]

# Use `ALLOWED_ORIGINS` or `FRONTEND_URL` environment variable (comma-separated)
env_origins = os.getenv("ALLOWED_ORIGINS") or os.getenv("FRONTEND_URL")
if env_origins:
    try:
        allowed_origins = [o.strip() for o in env_origins.split(",") if o.strip()]
    except Exception:
        allowed_origins = default_origins
else:
    allowed_origins = default_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Spacer Commune API is running",
        "docs": "/docs"
    }

@app.get("/health")
def health(db=Depends(get_db)):
    db.execute(text("SELECT 1"))
    return {"status": "healthy", "db_connected": True}

app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(spaces_router, prefix="/spaces", tags=["Spaces"])
app.include_router(bookings_router, prefix="/bookings", tags=["Bookings"])
app.include_router(payments_router, prefix="/payments", tags=["Payments"])
app.include_router(users_router, prefix="/users", tags=["Users"])

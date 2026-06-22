"""
Main entry point for the FastAPI Portfolio Application.
Configures CORS middleware, registers routers, and sets up error handling.
"""
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers import api

app = FastAPI(
    title=settings.API_TITLE,
    version=settings.API_VERSION,
    description="Backend API serving profile data, projects, and milestones for Ahmed Akram Amer."
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(api.router, prefix="/api", tags=["portfolio"])

@app.get("/", tags=["status"])
async def root():
    """Root health check endpoint."""
    return {
        "status": "online",
        "api_title": settings.API_TITLE,
        "api_version": settings.API_VERSION,
        "docs_url": "/docs"
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

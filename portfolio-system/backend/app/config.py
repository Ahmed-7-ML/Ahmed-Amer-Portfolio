"""
Configuration settings for the FastAPI portfolio application.
Loads values from environment variables or uses defaults.
"""
import os
from typing import List

class Settings:
    """
    Application settings container.
    Loads configurations from environment variables.
    """
    API_TITLE: str = os.getenv("API_TITLE", "Ahmed Akram Amer - AI/ML Portfolio API")
    API_VERSION: str = os.getenv("API_VERSION", "1.0.0")
    
    # Safely parse ALLOWED_HOSTS list from environment
    _hosts_env = os.getenv("ALLOWED_HOSTS")
    ALLOWED_HOSTS: List[str] = (
        [host.strip() for host in _hosts_env.split(",") if host.strip()]
        if _hosts_env
        else [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://localhost:8000",
            "http://127.0.0.1:8000",
            "*"
        ]
    )

settings = Settings()

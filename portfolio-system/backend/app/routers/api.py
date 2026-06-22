"""
FastAPI Router for portfolio REST endpoints.
Handles profiles, projects, milestones, and contact submissions.
"""
from fastapi import APIRouter, HTTPException, status
from typing import List
from pydantic import BaseModel

from app.data import (
    Bio, Project, Milestone, Certificate, ProfileData,
    BIO_RECORD, PROJECTS_RECORDS, MILESTONES_RECORDS, CERTIFICATES_RECORDS, get_portfolio_profile
)

router = APIRouter()

class ContactSubmission(BaseModel):
    """Schema for contact form submissions."""
    name: str
    email: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    """Schema for contact endpoint response."""
    success: bool
    message: str

@router.get("/profile", response_model=Bio, summary="Get biography details")
async def get_profile():
    """Retrieve biographical details for the AI/ML engineer."""
    return BIO_RECORD

@router.get("/projects", response_model=List[Project], summary="Get project records")
async def get_projects():
    """Retrieve the collection of projects with details, tech stack, and impact."""
    return PROJECTS_RECORDS

@router.get("/milestones", response_model=List[Milestone], summary="Get career milestones")
async def get_milestones():
    """Retrieve key professional milestones, awards, and credentials."""
    return MILESTONES_RECORDS

@router.get("/certificates", response_model=List[Certificate], summary="Get certificates")
async def get_certificates():
    """Retrieve key professional certifications and courses."""
    return CERTIFICATES_RECORDS

@router.get("/portfolio", response_model=ProfileData, summary="Get full portfolio data")
async def get_portfolio():
    """Retrieve the full aggregated profile data in one payload for frontend optimization."""
    return get_portfolio_profile()

@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED, summary="Submit contact form")
async def submit_contact(submission: ContactSubmission):
    """
    Handle contact form submissions.
    Validates input and simulates storing the message.
    """
    if not submission.name.strip() or not submission.email.strip() or not submission.message.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Fields 'name', 'email', and 'message' are required and cannot be blank."
        )
    
    # In a production environment, this would integrate with an email provider (SES, SendGrid) 
    # or write to an internal datastore.
    print(f"Received message from {submission.name} ({submission.email}): {submission.subject}")
    print(f"Message: {submission.message}")
    
    return ContactResponse(
        success=True,
        message=f"Thank you, {submission.name}. Your message has been received successfully!"
    )

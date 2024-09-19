from pydantic import BaseModel, EmailStr, field_validator
import re


class LoginModel(BaseModel):
    """
    Data model for user login, containing the user's email and password.
    Used for validating login credentials.
    """

    email: EmailStr
    password: str


class UserProfileModel(BaseModel):
    """
    Data model for a user profile, containing fields such as user ID, OpenAI API key,
    preferred model, and a custom prompt. Used for data validation and serialization.
    """

    openai_key: str
    openai_model: str
    prompt: str

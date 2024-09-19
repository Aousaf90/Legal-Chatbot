from sqlalchemy import Column, ForeignKey, String, Integer, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from .projectModel import Project
from db import Base, engine


class User(Base):
    """
    Represents a user entity in the database, storing essential user details such as
    name, email, and hashed password. Each user can have multiple associated profiles.
    """

    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, index=True)
    hashed_password = Column(String, nullable=False)
    profiles = relationship(
        "UserProfile", back_populates="user", cascade="all, delete-orphan"
    )


class UserToken(Base):
    """
    Represents a token entity in the database, used for authenticating users.
    Each token is associated with a specific user and includes a unique ID and token string.
    """

    __tablename__ = "user_tokens"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    user_id = Column(Integer, nullable=False)
    token = Column(String, nullable=False)


class UserProfile(Base):
    """
    Represents a user profile entity in the database, linked to a specific user.
    Each profile may store OpenAI API key, model preferences, and a custom prompt.
    A profile can have multiple associated projects.
    """

    __tablename__ = "profiles"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    user_id = Column(
        Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    openai_key = Column(String, nullable=True)
    openai_model = Column(String, nullable=True, default="gpt-3.5-turbo")
    prompt = Column(Text, nullable=True)
    user = relationship("User", back_populates="profiles")
    projects = relationship(
        "Project", back_populates="profile", cascade="all, delete-orphan"
    )


Base.metadata.create_all(bind=engine)

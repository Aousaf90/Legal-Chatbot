from sqlalchemy import Column, ForeignKey, String, Integer, Text
from sqlalchemy.orm import relationship
from db import Base, engine


class Project(Base):
    """
    Represents a project entity in the database. Each project is associated with a user profile,
    a category, and can have multiple related files and chats.
    """

    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    user_id = Column(
        Integer, ForeignKey("profiles.id", ondelete="CASCADE"), nullable=False
    )
    name = Column(String, nullable=False)
    information = Column(Text, nullable=False)
    category = Column(
        Integer, ForeignKey("subcategories.id", ondelete="CASCADE"), nullable=False
    )
    profile = relationship("UserProfile", back_populates="projects")
    files = relationship("File", back_populates="project", cascade="all, delete-orphan")
    project_chats = relationship(
        "ProjectChat", back_populates="project", cascade="all, delete-orphan"
    )


class File(Base):
    """
    Represents a file entity in the database. Each file is associated with a specific project
    and includes attributes such as name and location.
    """

    __tablename__ = "files"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    project_id = Column(
        Integer, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False
    )
    project = relationship("Project", back_populates="files")


class Category(Base):
    """
    Represents a category entity in the database, used to categorize projects or other entities.
    Each category has a unique ID and a name.
    """

    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    name = Column(String, nullable=False)


class SubCategory(Base):
    """
    Represents a subcategory entity in the database, linked to a specific category.
    Each subcategory has a unique ID, a name, and is associated with a parent category.
    """

    __tablename__ = "subcategories"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True, unique=True)
    name = Column(String, nullable=False)
    category_id = Column(
        Integer, ForeignKey("categories.id", ondelete="CASCADE"), nullable=False
    )


# Base.metadata.create_all(bind=engine)

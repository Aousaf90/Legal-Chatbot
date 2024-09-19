from db import Base, engine
from sqlalchemy import Column, Integer, ForeignKey, String, DateTime
from sqlalchemy.orm import relationship
from models.projectModel import Project
from models.userModel import User


class ChatMessage(Base):
    """
    Represents a chat message model with chat_id, user_id, and message
    """

    __tablename__ = "ChatMessage"

    id = Column(
        Integer, nullable=False, unique=True, autoincrement=True, primary_key=True
    )
    send_by = Column(
        Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )
    message = Column(String, nullable=False)
    response = Column(String, nullable=False)
    date_time = Column(DateTime)
    chat_id = Column(
        String, ForeignKey("ProjectChat.chat_id", ondelete="CASCADE"), nullable=False
    )

    project_chat = relationship("ProjectChat", back_populates="chat_messages")


class ProjectChat(Base):
    """
    Represents a table that associates a chat_id with a specific project_id.
    A single project can have multiple chats, and each chat can have multiple messages.
    """

    __tablename__ = "ProjectChat"

    id = Column(
        Integer, nullable=False, unique=True, autoincrement=True, primary_key=True
    )
    project_id = Column(
        Integer, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False
    )
    chat_id = Column(String, nullable=False, unique=True)

    project = relationship("Project", back_populates="project_chats")
    chat_messages = relationship(
        "ChatMessage", back_populates="project_chat", cascade="all, delete-orphan"
    )


Base.metadata.create_all(bind=engine)


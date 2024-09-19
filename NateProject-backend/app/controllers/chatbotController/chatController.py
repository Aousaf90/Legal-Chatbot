from fastapi import APIRouter, Depends, HTTPException
from models.userModel import UserToken, UserProfile
from models.chatModel import ChatMessage, ProjectChat
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.prompts import MessagesPlaceholder
from models.chatModel import ChatMessage
from langchain_openai import ChatOpenAI
from .chatHelper import get_token, vectorize_humna_query
from schema.chatbotSchema import ChatBotMessage, NewChat
from langchain_core.messages import SystemMessage, HumanMessage
from db import get_db, Session
from datetime import datetime
import uuid
import os
import dotenv

dotenv.load_dotenv()

langchain_url = APIRouter()


@langchain_url.get("/chatmessage/{chat_id}")
def get_chat_messages(
    chat_id: str, token: str = Depends(get_token), db: Session = Depends(get_db)
):
    """
    Retrieve chat messages for a given chat ID sent by the authenticated user.

    Parameters:
    - chat_id (str): The ID of the chat.
    - token (str): The user's authentication token.

    Returns:
    - List of chat messages if found.

    Raises:
    - HTTPException: 401 if the token is invalid or expired.
    - HTTPException: 404 if no chat messages are found.
    """
    user = db.query(UserToken).filter(UserToken.token == token).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    user_id = user.user_id
    chat_messages = (
        db.query(ChatMessage)
        .filter(ChatMessage.chat_id == chat_id, ChatMessage.send_by == user_id)
        .all()
    )
    if not chat_messages:
        return {"details": "No previous conversations"}
    return chat_messages


@langchain_url.get("/chats/{project_id}")
async def get_all_chats(
    project_id, db: Session = Depends(get_db), token=Depends(get_token)
):
    """
    Retrieve all chats associated with a specific project ID after validating the user's token.
    """
    user_instance = db.query(UserToken).filter(UserToken.token == token).first()
    if user_instance is None:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    project_chats = (
        db.query(ProjectChat).filter(ProjectChat.project_id == project_id).all()
    )
    chat_messages = {}
    if project_chats and len(project_chats) > 0:
        for project_chat in project_chats:
            chat_messages[project_chat.chat_id] = (
                db.query(ChatMessage)
                .filter(ChatMessage.chat_id == project_chat.chat_id)
                .all()
            )
    return chat_messages


@langchain_url.post("/create-new-chat")
async def create_new_chat(
    new_chat: NewChat, db: Session = Depends(get_db), token=Depends(get_token)
):
    try:
        project_chat = ProjectChat(
            project_id=new_chat.project_id, chat_id=new_chat.chat_id
        )
        print(f"Project Chats: {project_chat}")
        db.add(project_chat)
        db.commit()
        db.refresh(project_chat)
        return {"project_id": project_chat.project_id, "chat_id": project_chat.chat_id}
    except Exception as e:
        print(f"Error: {e}")
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@langchain_url.post("/chatbot/{project_id}")
async def get_chatbot_response(
    project_id,
    input: ChatBotMessage,
    token: str = Depends(get_token),
    db: Session = Depends(get_db),
):
    """
    Generate and return a chatbot response for a user's message.

    Parameters:
    - input (ChatBotMessage): User message and chat info.
    - token (str): Authentication token.
    - db (Session): Database session.

    Returns:
    - dict: Contains user ID, chat ID, input message, response, and timestamp.

    Raises:
    - HTTPException: 400 on error.
    """
    try:

        user_instance = db.query(UserToken).filter(UserToken.token == token).first()
        user_id = user_instance.user_id
        setting_params = (
            db.query(UserProfile).filter(UserProfile.user_id == user_id).first()
        )
        prompt = setting_params.prompt
        vector_response = vectorize_humna_query(
            query=input.human_message,
            token=token,
            project_id=project_id,
            openai_key=setting_params.openai_key,
        )
        vector_response = "".join([doc.page_content for doc in vector_response])
        system_template = f"{prompt} = {vector_response}"
        system_message = SystemMessage(content=system_template)
        human_message = HumanMessage(content=input.human_message)
        message = [system_message, human_message]

        gpt_model = ChatOpenAI(
            api_key=setting_params.openai_key, model=setting_params.openai_model
        )

        response_content = ""
        for part in gpt_model.stream(message):
            response_content += part.content
        chat_id = input.chat_id or str(uuid.uuid1())

        project_chat = (
            db.query(ProjectChat).filter(ProjectChat.chat_id == input.chat_id).first()
        )
        if project_chat is None:
            project_chat = ProjectChat(project_id=project_id, chat_id=input.chat_id)
            db.add(project_chat)
            db.commit()
            db.refresh(project_chat)
        chat_message = ChatMessage(
            send_by=user_id,
            message=input.human_message,
            response=response_content,
            date_time=datetime.now(),
            chat_id=project_chat.chat_id,
        )
        db.add(chat_message)

        db.commit()
        db.refresh(chat_message)

        return {
            "send_by": user_id,
            "chat_id": chat_message.chat_id,
            "message": input.human_message,
            "response": response_content,
            "date_time": chat_message.date_time,
        }
    except Exception as e:
        db.rollback()
        raise HTTPException(
            detail=f"Error while loading response: {e}", status_code=400
        )

from pydantic import BaseModel


class ChatBotMessage(BaseModel):
    """
    Represents a message from a human to a chatbot.
    """

    human_message: str
    send_by: str
    chat_id: str


class NewChat(BaseModel):
    project_id: str
    chat_id: str

from fastapi import FastAPI
from controllers.authController.authController import auth_url
from controllers.projectController.projectController import project_url
from controllers.chatbotController.chatController import langchain_url

from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_url, prefix="/auth")
app.include_router(project_url, prefix="/project")
app.include_router(langchain_url, prefix="/chat")


if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")

import React, { useEffect, useState } from "react";
import { Chatbot } from "./Chatbot";
import { ChatbotProjectSidebar } from "./ChatbotProjectSidebar";
import { ChatbotNewChatSidebar } from "./ChatbotNewChatSidebar";

export const ChatbotLayout = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [chatMessageClear, setChatMessageClear] = useState(null);
  const [selectedChat, setSelectedChat] = useState("");
  const [newChatMessage, setNewChatMessage] = useState(null);

  const handleProjectSelect = (projectId) => {
    if (chatMessageClear) {
      chatMessageClear();
    }
  };

  return (
    <div className="flex h-[calc(100vh-30px)]">
      <div className="w-1/5 p-1 rounded-md">
        <div className="text-lg font-bold border-r h-full border-opacity-40">
          <ChatbotProjectSidebar 
            setSelectedProjectId={setSelectedProjectId} 
            setChatMessageClear={handleProjectSelect} 
          />
        </div>
      </div>
      <div className="flex-1 bg-white p-1">
        <Chatbot 
          selectedProjectId={selectedProjectId}
          selectedChatId={selectedChat}
          setChatMessageClear={setChatMessageClear} 
          setNewChatMessage={setNewChatMessage}
        />
      </div>
      <div className="w-1/5 p-1 h-full border-l border-opacity-40">
        <ChatbotNewChatSidebar selectedProjectId={selectedProjectId} getSelectedChatId={setSelectedChat} newChatMessage={newChatMessage} />
      </div>
    </div>
  );
};

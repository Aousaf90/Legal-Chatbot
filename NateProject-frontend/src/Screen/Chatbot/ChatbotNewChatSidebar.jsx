import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";
import { webUrl } from "../../Helper";
import { Notyf } from "notyf";
import { v4 as uuidv4 } from "uuid";
import "notyf/notyf.min.css";

const notyf = new Notyf();

export const ChatbotNewChatSidebar = ({
  selectedProjectId,
  getSelectedChatId,
  newChatMessage,
}) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const createNewChat = async () => {
    try {
      const chatData = {
        project_id: String(selectedProjectId),
        chat_id: uuidv4(),
      };

      const response = await axios.post(
        `${webUrl}/chat/create-new-chat`,
        chatData,
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        console.log(response);
        const newChat = {
          chatId: response.data.chat_id,
          firstMessage: "No messages yet",
        };

        setChats((prevChats) => [...prevChats, newChat]);
        setSelectedChatId(response.data.chat_id);
        getSelectedChatId(response.data.chat_id);
      } else {
        notyf.error("Failed to create chat");
      }
    } catch (error) {
      console.error("Error creating chat:", error);
      notyf.error("Failed to create chat");
    }
  };

  const fetchChats = async (projectId) => {
    if (!projectId) {
      setError("No project selected.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`${webUrl}/chat/chats/${projectId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("token"),
        },
      });
      const chatData = response.data;
      console.log("Chat Data: ", chatData);
      const chatSummaries = Object.entries(chatData).map(
        ([chatId, messages]) => ({
          chatId,
          firstMessage: messages[0]?.message || "No messages yet",
        })
      );
      setChats(chatSummaries);
      console.log("Chats: ",chats)

      if (chatSummaries.length === 0) {
        setError("No chats found.");
      }
    } catch (err) {
      setError(`No Chat Yet ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect((e) => {
    setSelectedChatId("");
    if (selectedProjectId) {
      console.log("New Chat Message: ", newChatMessage)
      if(newChatMessage !== null){
        console.log("New Chat Message: in if statement  ",newChatMessage)
        setChats(((chats)=>{
          chats.map((chat)=>{
            (chat.Id == selectedChatId ? chat.firstMessage=newChatMessage : "No message yet")
          })
        }))
        setSelectedChatId(selectedChatId)
      }
      setLoading(true);
      setError(null);
      fetchChats(selectedProjectId);
    } else {
      setChats([]);
      setError("No project selected.");
      setLoading(false);
    }
  }, [selectedProjectId, newChatMessage]);

  const handleChatSelect = (chatId) => {
    getSelectedChatId(chatId);
    setSelectedChatId(chatId);
  };

  return (
    <div className="h-full rounded-md p-5">
      <div
        className="cursor-pointer add-new-Chat flex items-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mb-3"
        onClick={() => {
          createNewChat();
        }}
      >
        <div className="icon flex-shrink-0">
          <FaPlus size="15" />
        </div>
        <div className="addnewProject pl-2 text-sm text-white ">New Chat</div>
      </div>
      <hr className="my-4 border-t border-gray-300" />

      <div className="chat-text-container mt-10 flex items-center">
        <div className="chat-icon flex-shrink-0 pr-3">
          <BiChat size="30" />
        </div>
        <div className="chat-text text-base md:text-lg">Chats</div>
      </div>
      <div className="chat-list mt-5">
        {loading ? (
          <p>Loading chats...</p>
        ) : error ? (
          <p>{error}</p>
        ) : chats.length === 0 ? (
          <p>No chat found.</p>
        ) : (
          chats.slice().reverse().map((chat) => (
            <div
              key={chat.chatId}
              className={`sidebar-icons cursor-pointer p-2 rounded-lg ${
                selectedChatId == null
                  ? "bg-white text-black"
                  : chat.chatId === selectedChatId
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
              onClick={() => handleChatSelect(chat.chatId)}
            >
              <p className={`text-sm font-semibold md:text-sm truncate`}>
                {chat.firstMessage}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

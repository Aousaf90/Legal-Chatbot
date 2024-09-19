import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { webUrl } from "../../Helper";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
const notyf = new Notyf();
export const Chatbot = ({ selectedProjectId, setChatMessageClear, selectedChatId, setNewChatMessage }) => {
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setChatMessageClear(() => () => setMessages([]));
    getPreviousChat();
  }, [setChatMessageClear, selectedChatId]);

  const getPreviousChat = async () => {
    try {
      const response = await axios.get(`${webUrl}/chat/chatmessage/${selectedChatId}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': localStorage.getItem('token')
        },
      });
      if (!response || response.data['details'] == "No previous conversations") {
        setMessages([]);
        setChatMessageClear();
      }
      const chatMessages = [];
      response.data.forEach(msg => {
        chatMessages.push({
          from: "user",
          text: msg.message,
        });
        if (msg.response) {
          chatMessages.push({
            from: "bot",
            text: msg.response,
          });
        }
      });

      setMessages(chatMessages);
    } catch (error) {
      console.error("Error fetching previous chat messages:", error);
    }
  };

  const scrollChat = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    scrollChat();
  };

  const handleUserInput = async (e) => {
    if (e.type === "submit" || e.key === "Enter") {
      e.preventDefault();
    }

    if (
      (e.key === "Enter" || e.type === "click") &&
      inputRef.current.value.trim()
    ) {
      const userInput = inputRef.current.value.trim();
      inputRef.current.value = "";

      addMessage({ from: "user", text: userInput });

      setBotTyping(true);

      try {
        if(selectedChatId == ""){
          
        }
        const send_by = localStorage.getItem("user_id");
        const chatId = selectedChatId
        const response = await axios.post(
          `${webUrl}/chat/chatbot/${selectedProjectId}`,
          {
            human_message: userInput,
            send_by: send_by,
            chat_id: chatId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
          }
        );

        const data = response.data;
        if (data) {
          if(messages.length <=0){
            console.log("No new message: ", messages)
            setNewChatMessage({
              chatId: selectedChatId,
              firstMessage: userInput,
            })
          }
          addMessage({ from: "bot", text: data.response });
        }
      } catch (error) {
        notyf.error(error)
        console.error("Error fetching chatbot response:", error);
        addMessage({
          from: "bot",
          text: "Sorry, I couldn't process your request. Please try again later.",
        });
      }
      setBotTyping(false);
    }
  };

  useEffect(() => {
    scrollChat();
  }, [messages]);

  useEffect(() => {
    setMessages([]);
  }, [selectedProjectId]);

  return (
    <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col rounded-2xl h-full bg-white">
      <div
        id="messages"
        className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages.length === 0 && !botTyping && (
          <div className="text-center text-gray-500">
            No previous conversations.
          </div>
        )}
        {messages.map((message, key) => (
          <div key={key}>
            <div
              className={`flex items-end ${
                message.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex flex-col space-y-2 text-md leading-tight max-w-lg mx-2 ${
                  message.from === "bot"
                    ? "order-2 items-start"
                    : "order-1 items-end"
                }`}
              >
                <div>
                  <span
                    className={`px-4 py-3 rounded-xl inline-block ${
                      message.from === "bot"
                        ? "rounded-bl-none bg-gray-100 text-gray-600"
                        : "rounded-br-none bg-[#2196F3] text-white"
                    }`}
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  ></span>
                </div>
              </div>
              <img
                src={
                  message.from === "bot"
                    ? "https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                    : "https://i.pravatar.cc/100?img=7"
                }
                alt=""
                className={`w-6 h-6 rounded-full ${
                  message.from === "bot" ? "order-1" : "order-2"
                }`}
              />
            </div>
          </div>
        ))}
        {botTyping && (
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-md leading-tight mx-2 order-2 items-start">
              <div>
                <img
                  src="https://support.signal.org/hc/article_attachments/360016877511/typing-animation-3x.gif"
                  alt="Typing..."
                  className="w-16 ml-6"
                />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex items-center">
          <input
            disabled={!selectedChatId}
            type="text"
            placeholder={"Type your message here..."}
            autoComplete="off"
            autoFocus
            onKeyDown={handleUserInput}
            className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-5 bg-gray-100 border-2 border-gray-200 focus:border-[#2196F3] rounded-md py-2"
            ref={inputRef}
          />
          <button
            type="submit"
            className="absolute right-0 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleUserInput}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

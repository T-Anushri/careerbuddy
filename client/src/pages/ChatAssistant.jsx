import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";

const ChatAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm CareerBuddy. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chatbot", {
        message: input,
      });

      const botMessage = {
        sender: "bot",
        text: response.data.reply || "Sorry, I didn't get that.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const renderMarkdown = (text) => {
    const html = marked.parse(text);
    return { __html: html };
  };

  return (
    <div className="chat-container">
      <div className="chat-header">CareerBuddy Assistant</div>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === "user" ? "user-msg" : "bot-msg"}`}
          >
            {msg.sender === "bot" ? (
              <div
                className="bot-message"
                dangerouslySetInnerHTML={renderMarkdown(msg.text)}
              />
            ) : (
              <div className="user-bubble">{msg.text}</div>
            )}
          </div>
        ))}
        {loading && <div className="chat-message bot-msg">Typing...</div>}
      </div>

      <div className="chat-input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;

// src/pages/ChatAssistant.jsx
import React, { useState } from 'react';

export default function ChatAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I’m CareerBuddy. How can I help you today?' },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    // Dummy bot response
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: input },
      { role: 'bot', content: "That's a great question! Here's my suggestion..." },
    ]);
    setInput('');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">CareerBuddy Chat Assistant</h2>
      <div className="border rounded p-4 h-80 overflow-y-auto bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded ${msg.role === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

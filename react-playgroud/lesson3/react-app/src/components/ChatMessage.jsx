import React from 'react';

function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
      {sender === "user" && (
        <img src="/user.png" className="avatar user-avatar" alt="User" />
      )}
      <div className="message-text">
        {message}
      </div>
      {sender === "bot" && (
        <img src="/robot.jpg" className="avatar bot-avatar" alt="Bot" />
      )}
    </div>
  );
}

export default ChatMessage;

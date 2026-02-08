import React from 'react';
import ChatMessage from './ChatMessage';

function ChatMessages({ chatMessages }) {
    return (
        <div className="chat-messages-container">
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;

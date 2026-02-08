import React, { useState } from 'react';

function ChatInput({ chatMessages, setChatMessages, ChatbotLogic }) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        if (!inputText.trim()) return;

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            }
        ];
        setChatMessages(newChatMessages);

        const response = ChatbotLogic.getResponse(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "bot",
                id: crypto.randomUUID()
            }
        ]);

        setInputText('');
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message..."
                onChange={saveInputText}
                onKeyDown={handleKeyDown}
                value={inputText}
            />
            <button className="send-button" onClick={sendMessage}>
                Send
            </button>
        </div>
    );
}

export default ChatInput;

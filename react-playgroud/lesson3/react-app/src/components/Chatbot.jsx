import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { Chatbot as ChatbotLogic } from '../utils/chatbot';
import './Chatbot.css';

function Chatbot() {
    const [chatMessages, setChatMessages] = useState([
        {
            message: "hello chatbot",
            sender: "user",
            id: "1"
        },
        {
            message: "Hello! How can I help you today?",
            sender: "bot",
            id: "2"
        }
    ]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>AI Assistant</h2>
            </div>
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} ChatbotLogic={ChatbotLogic} />
        </div>
    );
}

export default Chatbot;

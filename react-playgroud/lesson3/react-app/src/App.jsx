import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import TwoCounters from './components/TwoCounters';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('chatbot');

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">React Playground</h1>
        <div className="nav-links">
          <button
            className={`nav-link ${currentView === 'chatbot' ? 'active' : ''}`}
            onClick={() => setCurrentView('chatbot')}
          >
            Chatbot
          </button>
          <button
            className={`nav-link ${currentView === 'practice' ? 'active' : ''}`}
            onClick={() => setCurrentView('practice')}
          >
            Practice
          </button>
        </div>
      </nav >

      <main className="main-content">
        {currentView === 'chatbot' ? <Chatbot /> : <TwoCounters />}
      </main>
    </div >
  );
}

export default App;
